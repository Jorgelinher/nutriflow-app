'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  MessageCircle,
  Calendar,
  FileText,
  Download
} from 'lucide-react'

// Mock data - in real app, this would come from Supabase
const mockPatients = [
  { 
    id: 1, 
    name: 'María González', 
    email: 'maria@email.com', 
    phone: '+51 999 123 456',
    plan: 'Bienestar Total', 
    status: 'Activo', 
    lastVisit: '2024-01-15',
    nextAppointment: '2024-01-22',
    progress: 75,
    joinDate: '2023-08-15'
  },
  { 
    id: 2, 
    name: 'Carlos Mendoza', 
    email: 'carlos@email.com', 
    phone: '+51 999 234 567',
    plan: 'Transformación', 
    status: 'Activo', 
    lastVisit: '2024-01-12',
    nextAppointment: '2024-01-19',
    progress: 60,
    joinDate: '2023-09-20'
  },
  { 
    id: 3, 
    name: 'Ana Rodríguez', 
    email: 'ana@email.com', 
    phone: '+51 999 345 678',
    plan: 'Mantenimiento', 
    status: 'Activo', 
    lastVisit: '2024-01-10',
    nextAppointment: '2024-01-17',
    progress: 90,
    joinDate: '2023-07-10'
  },
  { 
    id: 4, 
    name: 'Roberto Silva', 
    email: 'roberto@email.com', 
    phone: '+51 999 456 789',
    plan: 'Bienestar Total', 
    status: 'Pausado', 
    lastVisit: '2024-01-08',
    nextAppointment: null,
    progress: 45,
    joinDate: '2023-10-05'
  },
  { 
    id: 5, 
    name: 'Laura Pérez', 
    email: 'laura@email.com', 
    phone: '+51 999 567 890',
    plan: 'Transformación', 
    status: 'Activo', 
    lastVisit: '2024-01-14',
    nextAppointment: '2024-01-21',
    progress: 80,
    joinDate: '2023-11-12'
  },
  { 
    id: 6, 
    name: 'Miguel Torres', 
    email: 'miguel@email.com', 
    phone: '+51 999 678 901',
    plan: 'Mantenimiento', 
    status: 'Activo', 
    lastVisit: '2024-01-13',
    nextAppointment: '2024-01-20',
    progress: 95,
    joinDate: '2023-06-18'
  }
]

export default function PacientesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('Todos')
  const [filteredPatients, setFilteredPatients] = useState(mockPatients)
  const [selectedPatient, setSelectedPatient] = useState(null)

  useEffect(() => {
    let filtered = mockPatients

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phone.includes(searchTerm)
      )
    }

    // Filter by status
    if (filterStatus !== 'Todos') {
      filtered = filtered.filter(patient => patient.status === filterStatus)
    }

    setFilteredPatients(filtered)
  }, [searchTerm, filterStatus])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Activo': return 'bg-green-100 text-green-800'
      case 'Pausado': return 'bg-yellow-100 text-yellow-800'
      case 'Inactivo': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

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
            Gestión de Pacientes 👥
          </h1>
          <p className="text-gray-600">
            Administra todos tus pacientes y su información nutricional
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-primary flex items-center space-x-2">
            <Plus size={20} />
            <span>Nuevo Paciente</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <Download size={20} />
            <span>Exportar</span>
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
          <Users className="mx-auto mb-4 text-nutri-primary" size={32} />
          <h3 className="text-3xl font-bold text-nutri-primary mb-2">{mockPatients.length}</h3>
          <p className="text-gray-600">Total Pacientes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card text-center"
        >
          <div className="mx-auto mb-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold">✓</span>
          </div>
          <h3 className="text-3xl font-bold text-green-600 mb-2">
            {mockPatients.filter(p => p.status === 'Activo').length}
          </h3>
          <p className="text-gray-600">Activos</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card text-center"
        >
          <Calendar className="mx-auto mb-4 text-nutri-accent" size={32} />
          <h3 className="text-3xl font-bold text-nutri-accent mb-2">
            {mockPatients.filter(p => p.nextAppointment).length}
          </h3>
          <p className="text-gray-600">Próximas Citas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card text-center"
        >
          <div className="mx-auto mb-4 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-yellow-600 font-bold">⏸</span>
          </div>
          <h3 className="text-3xl font-bold text-yellow-600 mb-2">
            {mockPatients.filter(p => p.status === 'Pausado').length}
          </h3>
          <p className="text-gray-600">Pausados</p>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="card"
      >
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar pacientes..."
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
                <option value="Todos">Todos</option>
                <option value="Activo">Activos</option>
                <option value="Pausado">Pausados</option>
                <option value="Inactivo">Inactivos</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Patients Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="card"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Paciente</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Plan</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Progreso</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Próxima Cita</th>
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
                      <div className="text-sm text-gray-500">{patient.phone}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-nutri-secondary text-nutri-primary">
                      {patient.plan}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(patient.progress)}`}
                          style={{ width: `${patient.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{patient.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {patient.nextAppointment || 'Sin cita'}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedPatient(patient)}
                        className="text-nutri-primary hover:text-nutri-accent transition-colors duration-200"
                        title="Ver detalles"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        className="text-nutri-data hover:text-nutri-accent transition-colors duration-200"
                        title="Editar"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="text-green-600 hover:text-green-700 transition-colors duration-200"
                        title="Contactar"
                      >
                        <MessageCircle size={18} />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-700 transition-colors duration-200"
                        title="Eliminar"
                      >
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

      {/* Patient Detail Modal */}
      {selectedPatient && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-poppins font-bold text-nutri-primary">
                Detalles del Paciente
              </h2>
              <button 
                onClick={() => setSelectedPatient(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Información Personal</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Nombre:</span> {selectedPatient.name}</p>
                    <p><span className="font-medium">Email:</span> {selectedPatient.email}</p>
                    <p><span className="font-medium">Teléfono:</span> {selectedPatient.phone}</p>
                    <p><span className="font-medium">Fecha de Ingreso:</span> {selectedPatient.joinDate}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Plan Nutricional</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Plan:</span> {selectedPatient.plan}</p>
                    <p><span className="font-medium">Estado:</span> 
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedPatient.status)}`}>
                        {selectedPatient.status}
                      </span>
                    </p>
                    <p><span className="font-medium">Progreso:</span> {selectedPatient.progress}%</p>
                    <p><span className="font-medium">Última Visita:</span> {selectedPatient.lastVisit}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4">
                <button className="btn-secondary">
                  <Edit size={18} className="mr-2" />
                  Editar
                </button>
                <button className="btn-primary">
                  <MessageCircle size={18} className="mr-2" />
                  Contactar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
