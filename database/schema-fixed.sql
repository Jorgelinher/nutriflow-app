-- NutriFlow Database Schema - VERSIÓN CORREGIDA
-- Execute this in your Supabase SQL editor

-- NO modificar auth.users - es del sistema de Supabase
-- RLS ya está habilitado por defecto en auth.users

-- Create profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create patients table
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  goal TEXT,
  initial_weight NUMERIC,
  height_cm NUMERIC,
  age INTEGER,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  activity_level TEXT CHECK (activity_level IN ('sedentary', 'light', 'moderate', 'active', 'very_active')),
  medical_conditions TEXT[],
  allergies TEXT[],
  dietary_preferences TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create nutrition plans table
CREATE TABLE nutrition_plans (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled', 'paused')),
  plan_details JSONB, -- Detailed plan structure
  goals JSONB, -- Patient goals and targets
  restrictions JSONB, -- Dietary restrictions
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create progress tracking table
CREATE TABLE progress_tracking (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  weight_kg NUMERIC,
  body_fat_percentage NUMERIC,
  muscle_mass_kg NUMERIC,
  measurements JSONB, -- Body measurements
  notes TEXT,
  photo_url TEXT,
  mood_rating INTEGER CHECK (mood_rating >= 1 AND mood_rating <= 10),
  energy_level INTEGER CHECK (energy_level >= 1 AND energy_level <= 10),
  sleep_hours NUMERIC,
  water_intake_liters NUMERIC,
  exercise_minutes INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create consultations table
CREATE TABLE consultations (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  nutritionist_id UUID REFERENCES auth.users(id),
  consultation_date TIMESTAMPTZ NOT NULL,
  type TEXT CHECK (type IN ('initial', 'follow_up', 'emergency', 'review')),
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'rescheduled')),
  notes TEXT,
  recommendations TEXT,
  next_appointment TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create meal logs table
CREATE TABLE meal_logs (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  meal_type TEXT CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  food_items JSONB, -- Array of food items with quantities
  total_calories NUMERIC,
  total_protein NUMERIC,
  total_carbs NUMERIC,
  total_fat NUMERIC,
  notes TEXT,
  photo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create recipes table
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  ingredients JSONB NOT NULL,
  instructions TEXT[] NOT NULL,
  prep_time_minutes INTEGER,
  cook_time_minutes INTEGER,
  servings INTEGER,
  nutrition_info JSONB, -- Calories, protein, carbs, fat per serving
  difficulty_level TEXT CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
  meal_type TEXT[] CHECK (meal_type <@ ARRAY['breakfast', 'lunch', 'dinner', 'snack']),
  dietary_tags TEXT[], -- vegetarian, vegan, gluten-free, etc.
  created_by UUID REFERENCES auth.users(id),
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT CHECK (type IN ('info', 'warning', 'success', 'error')),
  is_read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Admins can view all profiles
CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );

-- Patients policies
CREATE POLICY "Users can view own patient data" ON patients
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own patient data" ON patients
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own patient data" ON patients
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Admins can view all patients
CREATE POLICY "Admins can view all patients" ON patients
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );

-- Nutrition plans policies
CREATE POLICY "Users can view own nutrition plans" ON nutrition_plans
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM patients 
      WHERE patients.id = nutrition_plans.patient_id 
      AND patients.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all nutrition plans" ON nutrition_plans
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );

-- Progress tracking policies
CREATE POLICY "Users can view own progress" ON progress_tracking
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM patients 
      WHERE patients.id = progress_tracking.patient_id 
      AND patients.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own progress" ON progress_tracking
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM patients 
      WHERE patients.id = progress_tracking.patient_id 
      AND patients.user_id = auth.uid()
    )
  );

-- Admins can view all progress
CREATE POLICY "Admins can view all progress" ON progress_tracking
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );

-- Notifications policies
CREATE POLICY "Users can view own notifications" ON notifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications" ON notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- Functions and Triggers

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER handle_updated_at_profiles
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_patients
  BEFORE UPDATE ON patients
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_nutrition_plans
  BEFORE UPDATE ON nutrition_plans
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_consultations
  BEFORE UPDATE ON consultations
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_recipes
  BEFORE UPDATE ON recipes
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Indexes for better performance
CREATE INDEX idx_patients_user_id ON patients(user_id);
CREATE INDEX idx_nutrition_plans_patient_id ON nutrition_plans(patient_id);
CREATE INDEX idx_nutrition_plans_status ON nutrition_plans(status);
CREATE INDEX idx_progress_tracking_patient_id ON progress_tracking(patient_id);
CREATE INDEX idx_progress_tracking_log_date ON progress_tracking(log_date);
CREATE INDEX idx_consultations_patient_id ON consultations(patient_id);
CREATE INDEX idx_consultations_date ON consultations(consultation_date);
CREATE INDEX idx_meal_logs_patient_id ON meal_logs(patient_id);
CREATE INDEX idx_meal_logs_date ON meal_logs(log_date);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
