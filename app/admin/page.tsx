'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  Calendar,
  MessageCircle,
  Eye,
  Search
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

// Mock data - in real app, this would come from Supabase
const mockKPIs = {
  totalPatients: 127,
  monthlyRevenue: 15420,
  activePlans: 89,
  retentionRate: 87
}

const mockNewPatientsData = [
  { month: 'Ene', patients: 12 },
  { month: 'Feb', patients: 18 },
  { month: 'Mar', patients: 15 },
  { month: 'Abr', patients: 22 },
  { month: 'May', patients: 19 },
  { month: 'Jun', patients: 25 },
]

const mockRevenueData = [
  { month: 'Ene', revenue: 8500 },
  { month: 'Feb', revenue: 9200 },
  { month: 'Mar', revenue: 8800 },
  { month: 'Abr', revenue: 11200 },
  { month: 'May', revenue: 9800 },
  { month: 'Jun', revenue: 12400 },
]

const mockPatients = [
  { id: 1, name: 'María González', email: 'maria@email.com', plan: 'Bienestar Total', status: 'Activo', lastVisit: '2024-01-15' },
  { id: 2, name: 'Carlos Mendoza', email: 'carlos@email.com', plan: 'Transformación', status: 'Activo', lastVisit: '2024-01-12' },
  { id: 3, name: 'Ana Rodríguez', email: 'ana@email.com', plan: 'Mantenimiento', status: 'Activo', lastVisit: '2024-01-10' },
  { id: 4, name: 'Roberto Silva', email: 'roberto@email.com', plan: 'Bienestar Total', status: 'Pausado', lastVisit: '2024-01-08' },
  { id: 5, name: 'Laura Pérez', email: 'laura@email.com', plan: 'Transformación', status: 'Activo', lastVisit: '2024-01-14' },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPatients, setFilteredPatients] = useState(mockPatients)

  useEffect(() => {
    const filtered = mockPatients.filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.plan.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPatients(filtered)
  }, [searchTerm])

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-nutri-primary to-nutri-data rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-poppins font-bold mb-2">
          Panel Administrativo 📊
        </h1>
        <p className="text-xl opacity-90">
          Resumen completo de tu práctica nutricional y métricas de rendimiento.
        </p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card text-center"
        >
          <Users className="mx-auto mb-4 text-nutri-primary" size={32} />
          <h3 className="text-3xl font-bold text-nutri-primary mb-2">{mockKPIs.totalPatients}</h3>
          <p className="text-gray-600">Total Pacientes</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+12% este mes</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card text-center"
        >
          <DollarSign className="mx-auto mb-4 text-nutri-accent" size={32} />
          <h3 className="text-3xl font-bold text-nutri-accent mb-2">${mockKPIs.monthlyRevenue.toLocaleString()}</h3>
          <p className="text-gray-600">Ingresos Mensuales</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+8% este mes</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card text-center"
        >
          <Activity className="mx-auto mb-4 text-nutri-data" size={32} />
          <h3 className="text-3xl font-bold text-nutri-data mb-2">{mockKPIs.activePlans}</h3>
          <p className="text-gray-600">Planes Activos</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+5% este mes</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card text-center"
        >
          <TrendingUp className="mx-auto mb-4 text-green-500" size={32} />
          <h3 className="text-3xl font-bold text-green-500 mb-2">{mockKPIs.retentionRate}%</h3>
          <p className="text-gray-600">Retención</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+3% este mes</div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card"
        >
          <h3 className="text-xl font-poppins font-bold text-nutri-primary mb-6">
            Nuevos Pacientes por Mes
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockNewPatientsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="patients" fill="#2D5B4F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card"
        >
          <h3 className="text-xl font-poppins font-bold text-nutri-primary mb-6">
            Ingresos Mensuales
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#E63946" 
                  strokeWidth={3}
                  dot={{ fill: '#E63946', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Patients List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-poppins font-bold text-nutri-primary">
            Lista de Pacientes
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar pacientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Paciente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Plan</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Última Visita</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">{patient.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-nutri-secondary text-nutri-primary">
                      {patient.plan}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      patient.status === 'Activo' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{patient.lastVisit}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-nutri-primary hover:text-nutri-accent transition-colors duration-200">
                        <Eye size={18} />
                      </button>
                      <button className="text-nutri-data hover:text-nutri-accent transition-colors duration-200">
                        <MessageCircle size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
          <Calendar className="mx-auto mb-4 text-nutri-primary" size={32} />
          <h3 className="text-lg font-semibold text-nutri-primary mb-2">Agendar Consulta</h3>
          <p className="text-gray-600 text-sm">Crear nueva cita con paciente</p>
        </div>

        <div className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
          <Users className="mx-auto mb-4 text-nutri-accent" size={32} />
          <h3 className="text-lg font-semibold text-nutri-accent mb-2">Nuevo Paciente</h3>
          <p className="text-gray-600 text-sm">Registrar nuevo paciente</p>
        </div>

        <div className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
          <TrendingUp className="mx-auto mb-4 text-nutri-data" size={32} />
          <h3 className="text-lg font-semibold text-nutri-data mb-2">Reportes</h3>
          <p className="text-gray-600 text-sm">Generar reportes detallados</p>
        </div>
      </motion.div>
    </div>
  )
}
