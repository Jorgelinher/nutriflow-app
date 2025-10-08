'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, User, Mail, Phone, Calendar, Target, Activity, AlertTriangle } from 'lucide-react'
import { Patient } from '@/lib/supabase'

interface PatientFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (patientData: Partial<Patient>) => Promise<void>
  patient?: Patient | null
  title: string
}

export default function PatientForm({ isOpen, onClose, onSubmit, patient, title }: PatientFormProps) {
  const [formData, setFormData] = useState({
    user_id: patient?.user_id || '',
    goal: patient?.goal || '',
    initial_weight: patient?.initial_weight || '',
    height_cm: patient?.height_cm || '',
    age: patient?.age || '',
    gender: patient?.gender || '',
    activity_level: patient?.activity_level || '',
    medical_conditions: patient?.medical_conditions || [],
    allergies: patient?.allergies || [],
    dietary_preferences: patient?.dietary_preferences || []
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      // Validate form
      const newErrors: Record<string, string> = {}
      
      if (!formData.user_id) newErrors.user_id = 'ID de usuario es requerido'
      if (!formData.goal) newErrors.goal = 'Objetivo es requerido'
      if (!formData.age) newErrors.age = 'Edad es requerida'
      if (!formData.gender) newErrors.gender = 'Género es requerido'
      if (!formData.activity_level) newErrors.activity_level = 'Nivel de actividad es requerido'

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        setIsSubmitting(false)
        return
      }

      await onSubmit({
        ...formData,
        initial_weight: formData.initial_weight ? parseFloat(formData.initial_weight.toString()) : null,
        height_cm: formData.height_cm ? parseFloat(formData.height_cm.toString()) : null,
        age: parseInt(formData.age.toString()),
        medical_conditions: formData.medical_conditions.length > 0 ? formData.medical_conditions : null,
        allergies: formData.allergies.length > 0 ? formData.allergies : null,
        dietary_preferences: formData.dietary_preferences.length > 0 ? formData.dietary_preferences : null
      })

      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleArrayChange = (field: string, value: string) => {
    const currentArray = formData[field as keyof typeof formData] as string[]
    if (value && !currentArray.includes(value)) {
      setFormData(prev => ({
        ...prev,
        [field]: [...currentArray, value]
      }))
    }
  }

  const removeArrayItem = (field: string, index: number) => {
    const currentArray = formData[field as keyof typeof formData] as string[]
    setFormData(prev => ({
      ...prev,
      [field]: currentArray.filter((_, i) => i !== index)
    }))
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-poppins font-bold text-nutri-primary">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <User className="mr-2" size={20} />
              Información Básica
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID de Usuario *
                </label>
                <input
                  type="text"
                  value={formData.user_id}
                  onChange={(e) => setFormData(prev => ({ ...prev, user_id: e.target.value }))}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                    errors.user_id ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="UUID del usuario"
                />
                {errors.user_id && (
                  <p className="text-red-500 text-sm mt-1">{errors.user_id}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Edad *
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                    errors.age ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Edad en años"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Género *
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                  errors.gender ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Seleccionar género</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
              )}
            </div>
          </div>

          {/* Physical Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <Target className="mr-2" size={20} />
              Información Física
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Peso Inicial (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.initial_weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, initial_weight: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                  placeholder="Peso en kilogramos"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  value={formData.height_cm}
                  onChange={(e) => setFormData(prev => ({ ...prev, height_cm: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                  placeholder="Altura en centímetros"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel de Actividad *
              </label>
              <select
                value={formData.activity_level}
                onChange={(e) => setFormData(prev => ({ ...prev, activity_level: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                  errors.activity_level ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Seleccionar nivel</option>
                <option value="sedentary">Sedentario</option>
                <option value="light">Ligero</option>
                <option value="moderate">Moderado</option>
                <option value="active">Activo</option>
                <option value="very_active">Muy Activo</option>
              </select>
              {errors.activity_level && (
                <p className="text-red-500 text-sm mt-1">{errors.activity_level}</p>
              )}
            </div>
          </div>

          {/* Goals and Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <Target className="mr-2" size={20} />
              Objetivos y Preferencias
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objetivo Principal *
              </label>
              <textarea
                value={formData.goal}
                onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                  errors.goal ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={3}
                placeholder="Describe el objetivo principal del paciente"
              />
              {errors.goal && (
                <p className="text-red-500 text-sm mt-1">{errors.goal}</p>
              )}
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <AlertTriangle className="mr-2" size={20} />
              Información Médica
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Condiciones Médicas
              </label>
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Agregar condición médica"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleArrayChange('medical_conditions', e.currentTarget.value)
                        e.currentTarget.value = ''
                      }
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.medical_conditions.map((condition, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                    >
                      {condition}
                      <button
                        type="button"
                        onClick={() => removeArrayItem('medical_conditions', index)}
                        className="ml-1 text-red-600 hover:text-red-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alergias
              </label>
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Agregar alergia"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleArrayChange('allergies', e.currentTarget.value)
                        e.currentTarget.value = ''
                      }
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.allergies.map((allergy, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                    >
                      {allergy}
                      <button
                        type="button"
                        onClick={() => removeArrayItem('allergies', index)}
                        className="ml-1 text-yellow-600 hover:text-yellow-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferencias Dietéticas
              </label>
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Agregar preferencia dietética"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleArrayChange('dietary_preferences', e.currentTarget.value)
                        e.currentTarget.value = ''
                      }
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.dietary_preferences.map((preference, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {preference}
                      <button
                        type="button"
                        onClick={() => removeArrayItem('dietary_preferences', index)}
                        className="ml-1 text-green-600 hover:text-green-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Guardando...</span>
                </>
              ) : (
                <>
                  <User size={18} />
                  <span>{patient ? 'Actualizar' : 'Crear'} Paciente</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
