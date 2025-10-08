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
  created_at: string
}

export interface NutritionPlan {
  id: number
  patient_id: number
  start_date: string
  end_date: string
  status: 'active' | 'completed' | 'cancelled'
  plan_details: any
  created_at: string
}

export interface ProgressTracking {
  id: number
  patient_id: number
  log_date: string
  weight_kg: number | null
  notes: string | null
  photo_url: string | null
  created_at: string
}
