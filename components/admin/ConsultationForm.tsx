'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Calendar, Clock, User, FileText, AlertCircle } from 'lucide-react'
import { Consultation, Patient } from '@/lib/supabase'

interface ConsultationFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (consultationData: Partial<Consultation>) => Promise<void>
  consultation?: Consultation | null
  patients: Patient[]
  title: string
}

export default function ConsultationForm({ 
  isOpen, 
  onClose, 
  onSubmit, 
  consultation, 
  patients, 
  title 
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    patient_id: consultation?.patient_id || '',
    nutritionist_id: consultation?.nutritionist_id || '',
    consultation_date: consultation?.consultation_date ? 
      new Date(consultation.consultation_date).toISOString().slice(0, 16) : '',
    type: consultation?.type || '',
    status: consultation?.status || 'scheduled',
    notes: consultation?.notes || '',
    recommendations: consultation?.recommendations || '',
    next_appointment: consultation?.next_appointment ? 
      new Date(consultation.next_appointment).toISOString().slice(0, 16) : ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (consultation) {
      setFormData({
        patient_id: consultation.patient_id.toString(),
        nutritionist_id: consultation.nutritionist_id || '',
        consultation_date: consultation.consultation_date ? 
          new Date(consultation.consultation_date).toISOString().slice(0, 16) : '',
        type: consultation.type,
        status: consultation.status,
        notes: consultation.notes || '',
        recommendations: consultation.recommendations || '',
        next_appointment: consultation.next_appointment ? 
          new Date(consultation.next_appointment).toISOString().slice(0, 16) : ''
      })
    }
  }, [consultation])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      // Validate form
      const newErrors: Record<string, string> = {}
      
      if (!formData.patient_id) newErrors.patient_id = 'Paciente es requerido'
      if (!formData.consultation_date) newErrors.consultation_date = 'Fecha de consulta es requerida'
      if (!formData.type) newErrors.type = 'Tipo de consulta es requerido'

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        setIsSubmitting(false)
        return
      }

      await onSubmit({
        ...formData,
        patient_id: parseInt(formData.patient_id),
        nutritionist_id: formData.nutritionist_id || null,
        next_appointment: formData.next_appointment || null
      })

      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
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
              <Calendar className="mr-2" size={20} />
              Información de la Cita
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paciente *
                </label>
                <select
                  value={formData.patient_id}
                  onChange={(e) => setFormData(prev => ({ ...prev, patient_id: e.target.value }))}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                    errors.patient_id ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Seleccionar paciente</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.profile?.full_name || `Paciente ${patient.id}`}
                    </option>
                  ))}
                </select>
                {errors.patient_id && (
                  <p className="text-red-500 text-sm mt-1">{errors.patient_id}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Consulta *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                    errors.type ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="initial">Consulta Inicial</option>
                  <option value="follow_up">Seguimiento</option>
                  <option value="emergency">Consulta de Emergencia</option>
                  <option value="review">Revisión</option>
                </select>
                {errors.type && (
                  <p className="text-red-500 text-sm mt-1">{errors.type}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha y Hora *
                </label>
                <input
                  type="datetime-local"
                  value={formData.consultation_date}
                  onChange={(e) => setFormData(prev => ({ ...prev, consultation_date: e.target.value }))}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent ${
                    errors.consultation_date ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.consultation_date && (
                  <p className="text-red-500 text-sm mt-1">{errors.consultation_date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estado
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                >
                  <option value="scheduled">Programada</option>
                  <option value="completed">Completada</option>
                  <option value="cancelled">Cancelada</option>
                  <option value="rescheduled">Reprogramada</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Próxima Cita
              </label>
              <input
                type="datetime-local"
                value={formData.next_appointment}
                onChange={(e) => setFormData(prev => ({ ...prev, next_appointment: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Notes and Recommendations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center">
              <FileText className="mr-2" size={20} />
              Notas y Recomendaciones
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notas de la Consulta
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                rows={4}
                placeholder="Notas sobre la consulta, observaciones, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recomendaciones
              </label>
              <textarea
                value={formData.recommendations}
                onChange={(e) => setFormData(prev => ({ ...prev, recommendations: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                rows={4}
                placeholder="Recomendaciones para el paciente"
              />
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
                  <Calendar size={18} />
                  <span>{consultation ? 'Actualizar' : 'Crear'} Cita</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
