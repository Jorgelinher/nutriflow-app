import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Solo crear el cliente si las variables están disponibles
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Database types
export interface Profile {
  id: string
  full_name: string | null
  avatar_url: string | null
  is_admin: boolean
  created_at: string
}

export interface Patient {
  id: number
  user_id: string
  goal: string | null
  initial_weight: number | null
  height_cm: number | null
  age: number | null
  gender: 'male' | 'female' | 'other' | null
  activity_level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active' | null
  medical_conditions: string[] | null
  allergies: string[] | null
  dietary_preferences: string[] | null
  created_at: string
  updated_at: string
  profile?: Profile
}

export interface NutritionPlan {
  id: number
  patient_id: number
  title: string
  description: string | null
  start_date: string
  end_date: string
  status: 'active' | 'completed' | 'cancelled' | 'paused'
  plan_details: any
  goals: any
  restrictions: any
  created_at: string
  updated_at: string
  patient?: Patient
}

export interface Consultation {
  id: number
  patient_id: number
  nutritionist_id: string | null
  consultation_date: string
  type: 'initial' | 'follow_up' | 'emergency' | 'review'
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled'
  notes: string | null
  recommendations: string | null
  next_appointment: string | null
  created_at: string
  updated_at: string
  patient?: Patient
}

export interface ProgressTracking {
  id: number
  patient_id: number
  log_date: string
  weight_kg: number | null
  body_fat_percentage: number | null
  muscle_mass_kg: number | null
  measurements: any
  notes: string | null
  photo_url: string | null
  mood_rating: number | null
  energy_level: number | null
  sleep_hours: number | null
  water_intake_liters: number | null
  exercise_minutes: number | null
  created_at: string
  patient?: Patient
}

export interface MealLog {
  id: number
  patient_id: number
  log_date: string
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack'
  food_items: any
  total_calories: number | null
  total_protein: number | null
  total_carbs: number | null
  total_fat: number | null
  notes: string | null
  photo_url: string | null
  created_at: string
  patient?: Patient
}

export interface Recipe {
  id: number
  title: string
  description: string | null
  ingredients: any
  instructions: string[]
  prep_time_minutes: number | null
  cook_time_minutes: number | null
  servings: number | null
  nutrition_info: any
  difficulty_level: 'easy' | 'medium' | 'hard' | null
  meal_type: string[]
  dietary_tags: string[]
  created_by: string | null
  is_public: boolean
  created_at: string
  updated_at: string
}

export interface Notification {
  id: number
  user_id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'success' | 'error'
  is_read: boolean
  action_url: string | null
  created_at: string
}

// API Functions
export class SupabaseService {
  // Patients
  static async getPatients() {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('patients')
      .select(`
        *,
        profile:profiles(*)
      `)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Patient[]
  }

  static async getPatient(id: number) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('patients')
      .select(`
        *,
        profile:profiles(*)
      `)
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data as Patient
  }

  static async createPatient(patientData: Partial<Patient>) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('patients')
      .insert(patientData)
      .select()
      .single()
    
    if (error) throw error
    return data as Patient
  }

  static async updatePatient(id: number, updates: Partial<Patient>) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('patients')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data as Patient
  }

  static async deletePatient(id: number) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { error } = await supabase
      .from('patients')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  }

  // Consultations
  static async getConsultations() {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('consultations')
      .select(`
        *,
        patient:patients(*, profile:profiles(*))
      `)
      .order('consultation_date', { ascending: false })
    
    if (error) throw error
    return data as Consultation[]
  }

  static async getConsultation(id: number) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('consultations')
      .select(`
        *,
        patient:patients(*, profile:profiles(*))
      `)
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data as Consultation
  }

  static async createConsultation(consultationData: Partial<Consultation>) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('consultations')
      .insert(consultationData)
      .select(`
        *,
        patient:patients(*, profile:profiles(*))
      `)
      .single()
    
    if (error) throw error
    return data as Consultation
  }

  static async updateConsultation(id: number, updates: Partial<Consultation>) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('consultations')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        patient:patients(*, profile:profiles(*))
      `)
      .single()
    
    if (error) throw error
    return data as Consultation
  }

  static async deleteConsultation(id: number) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { error } = await supabase
      .from('consultations')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  }

  // Progress Tracking
  static async getProgressTracking(patientId: number) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('progress_tracking')
      .select('*')
      .eq('patient_id', patientId)
      .order('log_date', { ascending: false })
    
    if (error) throw error
    return data as ProgressTracking[]
  }

  static async createProgressEntry(progressData: Partial<ProgressTracking>) {
    if (!supabase) throw new Error('Supabase not configured')
    
    const { data, error } = await supabase
      .from('progress_tracking')
      .insert(progressData)
      .select()
      .single()
    
    if (error) throw error
    return data as ProgressTracking
  }

  // Analytics
  static async getAnalytics() {
    if (!supabase) throw new Error('Supabase not configured')
    
    // Get total patients
    const { count: totalPatients } = await supabase
      .from('patients')
      .select('*', { count: 'exact', head: true })
    
    // Get active consultations
    const { count: activeConsultations } = await supabase
      .from('consultations')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'scheduled')
    
    // Get completed consultations this month
    const startOfMonth = new Date()
    startOfMonth.setDate(1)
    startOfMonth.setHours(0, 0, 0, 0)
    
    const { count: monthlyConsultations } = await supabase
      .from('consultations')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'completed')
      .gte('consultation_date', startOfMonth.toISOString())
    
    return {
      totalPatients: totalPatients || 0,
      activeConsultations: activeConsultations || 0,
      monthlyConsultations: monthlyConsultations || 0
    }
  }
}