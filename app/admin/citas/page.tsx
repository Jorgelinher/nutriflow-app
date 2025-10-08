'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

// Mock data - in real app, this would come from Supabase
const mockAppointments = [
  {
    id: 1,
    patient: 'María González',
    patientEmail: 'maria@email.com',
    type: 'Consulta Inicial',
    date: '2024-01-22',
    time: '10:00',
    duration: 60,
    status: 'Programada',
    notes: 'Primera consulta, evaluación completa'
  },
  {
    id: 2,
    patient: 'Carlos Mendoza',
    patientEmail: 'carlos@email.com',
    type: 'Seguimiento',
    date: '2024-01-19',
    time: '14:30',
    duration: 45,
    status: 'Programada',
    notes: 'Revisión de progreso, ajuste de plan'
  },
  {
    id: 3,
    patient: 'Ana Rodríguez',
    patientEmail: 'ana@email.com',
    type: 'Consulta de Emergencia',
    date: '2024-01-17',
    time: '16:00',
    duration: 30,
    status: 'Completada',
    notes: 'Consulta completada exitosamente'
  },
  {
    id: 4,
    patient: 'Roberto Silva',
    patientEmail: 'roberto@email.com',
    type: 'Seguimiento',
    date: '2024-01-15',
    time: '11:00',
    duration: 45,
    status: 'Cancelada',
    notes: 'Paciente canceló por motivos personales'
  },
  {
    id: 5,
    patient: 'Laura Pérez',
    patientEmail: 'laura@email.com',
    type: 'Consulta Inicial',
    date: '2024-01-21',
    time: '09:00',
    duration: 60,
    status: 'Programada',
    notes: 'Nueva paciente, evaluación inicial'
  },
  {
    id: 6,
    patient: 'Miguel Torres',
    patientEmail: 'miguel@email.com',
    type: 'Seguimiento',
    date: '2024-01-20',
    time: '15:30',
    duration: 45,
    status: 'Programada',
    notes: 'Revisión mensual, ajuste de objetivos'
  }
]

export default function CitasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('Todas')
  const [filteredAppointments, setFilteredAppointments] = useState(mockAppointments)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  useEffect(() => {
    let filtered = mockAppointments

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(appointment =>
        appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.patientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by status
    if (filterStatus !== 'Todas') {
      filtered = filtered.filter(appointment => appointment.status === filterStatus)
    }

    setFilteredAppointments(filtered)
  }, [searchTerm, filterStatus])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Programada': return 'bg-blue-100 text-blue-800'
      case 'Completada': return 'bg-green-100 text-green-800'
      case 'Cancelada': return 'bg-red-100 text-red-800'
      case 'En Progreso': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Programada': return <Clock size={16} />
      case 'Completada': return <CheckCircle size={16} />
      case 'Cancelada': return <XCircle size={16} />
      case 'En Progreso': return <AlertCircle size={16} />
      default: return <Clock size={16} />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Consulta Inicial': return 'bg-purple-100 text-purple-800'
      case 'Seguimiento': return 'bg-green-100 text-green-800'
      case 'Consulta de Emergencia': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const todayAppointments = mockAppointments.filter(apt => apt.date === selectedDate)
  const upcomingAppointments = mockAppointments.filter(apt => apt.status === 'Programada')

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-poppins font-bold text-nutri-primary mb-2">
            Gestión de Citas 📅
          </h1>
          <p className="text-gray-600">
            Administra todas las citas y consultas de tus pacientes
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-primary flex items-center space-x-2">
            <Plus size={20} />
            <span>Nueva Cita</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card text-center"
        >
          <Calendar className="mx-auto mb-4 text-nutri-primary" size={32} />
          <h3 className="text-3xl font-bold text-nutri-primary mb-2">{mockAppointments.length}</h3>
          <p className="text-gray-600">Total Citas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card text-center"
        >
          <div className="mx-auto mb-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Clock className="text-blue-600" size={20} />
          </div>
          <h3 className="text-3xl font-bold text-blue-600 mb-2">
            {mockAppointments.filter(apt => apt.status === 'Programada').length}
          </h3>
          <p className="text-gray-600">Programadas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card text-center"
        >
          <div className="mx-auto mb-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <h3 className="text-3xl font-bold text-green-600 mb-2">
            {mockAppointments.filter(apt => apt.status === 'Completada').length}
          </h3>
          <p className="text-gray-600">Completadas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card text-center"
        >
          <div className="mx-auto mb-4 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
            <AlertCircle className="text-yellow-600" size={20} />
          </div>
          <h3 className="text-3xl font-bold text-yellow-600 mb-2">
            {todayAppointments.length}
          </h3>
          <p className="text-gray-600">Hoy</p>
        </motion.div>
      </div>

      {/* Today's Appointments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-poppins font-bold text-nutri-primary">
            Citas de Hoy
          </h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
          />
        </div>

        {todayAppointments.length > 0 ? (
          <div className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nutri-primary rounded-full flex items-center justify-center text-white font-bold">
                    {appointment.time}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                    <p className="text-sm text-gray-500">{appointment.notes}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {getStatusIcon(appointment.status)}
                    <span className="ml-1">{appointment.status}</span>
                  </span>
                  <button className="text-nutri-primary hover:text-nutri-accent transition-colors duration-200">
                    <Edit size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
            <p>No hay citas programadas para esta fecha</p>
          </div>
        )}
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="card"
      >
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar citas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutri-primary focus:border-transparent w-full md:w-80"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
              >
                <option value="Todas">Todas</option>
                <option value="Programada">Programadas</option>
                <option value="Completada">Completadas</option>
                <option value="Cancelada">Canceladas</option>
                <option value="En Progreso">En Progreso</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Appointments Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="card"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Paciente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Tipo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Fecha</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Hora</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Duración</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{appointment.patient}</div>
                      <div className="text-sm text-gray-500">{appointment.patientEmail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(appointment.type)}`}>
                      {appointment.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{appointment.date}</td>
                  <td className="py-4 px-4 text-gray-600">{appointment.time}</td>
                  <td className="py-4 px-4 text-gray-600">{appointment.duration} min</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {getStatusIcon(appointment.status)}
                      <span className="ml-1">{appointment.status}</span>
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-nutri-primary hover:text-nutri-accent transition-colors duration-200">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-700 transition-colors duration-200">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
