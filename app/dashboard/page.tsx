'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  MessageCircle, 
  Plus,
  Activity,
  Heart,
  Scale
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Mock data - in real app, this would come from Supabase
const mockProgressData = [
  { date: '2024-01-01', weight: 75, mood: 7, energy: 6 },
  { date: '2024-01-08', weight: 74.5, mood: 8, energy: 7 },
  { date: '2024-01-15', weight: 74, mood: 8, energy: 8 },
  { date: '2024-01-22', weight: 73.5, mood: 9, energy: 8 },
  { date: '2024-01-29', weight: 73, mood: 9, energy: 9 },
]

const mockCurrentPlan = {
  title: 'Plan Bienestar Total',
  startDate: '2024-01-01',
  endDate: '2024-06-30',
  status: 'active',
  progress: 65,
  nextConsultation: '2024-02-15'
}

export default function DashboardPage() {
  const [currentWeight, setCurrentWeight] = useState(73)
  const [showLogForm, setShowLogForm] = useState(false)
  const [logData, setLogData] = useState({
    weight: '',
    notes: '',
    mood: 5,
    energy: 5
  })

  const handleLogProgress = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would save to Supabase
    console.log('Logging progress:', logData)
    setShowLogForm(false)
    setLogData({ weight: '', notes: '', mood: 5, energy: 5 })
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-nutri-primary to-nutri-data rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-poppins font-bold mb-2">
          ¡Hola! 👋
        </h1>
        <p className="text-xl opacity-90">
          Bienvenido a tu dashboard personal. Aquí puedes ver tu progreso y gestionar tu plan nutricional.
        </p>
      </motion.div>

      {/* Current Plan Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-poppins font-bold text-nutri-primary">
            Plan Actual
          </h2>
          <div className="flex items-center space-x-2 text-nutri-accent">
            <div className="w-3 h-3 bg-nutri-accent rounded-full animate-pulse"></div>
            <span className="font-medium">Activo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">{mockCurrentPlan.title}</h3>
            <p className="text-sm text-gray-600">
              {mockCurrentPlan.startDate} - {mockCurrentPlan.endDate}
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progreso</span>
              <span className="text-sm font-bold text-nutri-primary">{mockCurrentPlan.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-nutri-primary to-nutri-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${mockCurrentPlan.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <Calendar className="mx-auto mb-2 text-nutri-data" size={24} />
            <p className="text-sm text-gray-600">Próxima consulta</p>
            <p className="font-semibold text-nutri-primary">{mockCurrentPlan.nextConsultation}</p>
          </div>
        </div>
      </motion.div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-poppins font-bold text-nutri-primary">
            Tu Progreso
          </h2>
          <button
            onClick={() => setShowLogForm(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Registrar Progreso</span>
          </button>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockProgressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="weight" 
                stroke="#2D5B4F" 
                strokeWidth={3}
                dot={{ fill: '#E63946', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card text-center"
        >
          <Scale className="mx-auto mb-4 text-nutri-primary" size={32} />
          <h3 className="text-2xl font-bold text-nutri-primary mb-2">{currentWeight} kg</h3>
          <p className="text-gray-600">Peso Actual</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card text-center"
        >
          <TrendingUp className="mx-auto mb-4 text-nutri-accent" size={32} />
          <h3 className="text-2xl font-bold text-nutri-accent mb-2">-2 kg</h3>
          <p className="text-gray-600">Perdido</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card text-center"
        >
          <Activity className="mx-auto mb-4 text-nutri-data" size={32} />
          <h3 className="text-2xl font-bold text-nutri-data mb-2">8/10</h3>
          <p className="text-gray-600">Energía</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card text-center"
        >
          <Heart className="mx-auto mb-4 text-pink-500" size={32} />
          <h3 className="text-2xl font-bold text-pink-500 mb-2">9/10</h3>
          <p className="text-gray-600">Bienestar</p>
        </motion.div>
      </div>

      {/* Log Progress Modal */}
      {showLogForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
          >
            <h3 className="text-2xl font-poppins font-bold text-nutri-primary mb-6">
              Registrar Progreso
            </h3>
            
            <form onSubmit={handleLogProgress} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={logData.weight}
                  onChange={(e) => setLogData({...logData, weight: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                  placeholder="Ej: 73.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notas
                </label>
                <textarea
                  value={logData.notes}
                  onChange={(e) => setLogData({...logData, notes: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
                  rows={3}
                  placeholder="¿Cómo te sientes hoy?"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowLogForm(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Guardar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
