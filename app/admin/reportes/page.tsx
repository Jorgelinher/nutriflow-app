'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from 'recharts'

// Mock data - in real app, this would come from Supabase
const monthlyRevenueData = [
  { month: 'Ene', revenue: 8500, patients: 12 },
  { month: 'Feb', revenue: 9200, patients: 15 },
  { month: 'Mar', revenue: 8800, patients: 13 },
  { month: 'Abr', revenue: 11200, patients: 18 },
  { month: 'May', revenue: 9800, patients: 14 },
  { month: 'Jun', revenue: 12400, patients: 22 },
  { month: 'Jul', revenue: 11800, patients: 20 },
  { month: 'Ago', revenue: 13500, patients: 25 },
  { month: 'Sep', revenue: 14200, patients: 28 },
  { month: 'Oct', revenue: 13800, patients: 26 },
  { month: 'Nov', revenue: 15200, patients: 30 },
  { month: 'Dic', revenue: 16800, patients: 35 }
]

const planDistributionData = [
  { name: 'Bienestar Total', value: 45, color: '#2D5B4F' },
  { name: 'Transformación', value: 30, color: '#E63946' },
  { name: 'Mantenimiento', value: 25, color: '#457B9D' }
]

const patientRetentionData = [
  { month: 'Ene', retention: 85 },
  { month: 'Feb', retention: 87 },
  { month: 'Mar', retention: 89 },
  { month: 'Abr', retention: 91 },
  { month: 'May', retention: 88 },
  { month: 'Jun', retention: 93 }
]

const appointmentTypesData = [
  { type: 'Consulta Inicial', count: 45, revenue: 6750 },
  { type: 'Seguimiento', count: 120, revenue: 5400 },
  { type: 'Consulta Emergencia', count: 15, revenue: 2250 },
  { type: 'Revisión', count: 80, revenue: 4000 }
]

export default function ReportesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('6M')
  const [selectedMetric, setSelectedMetric] = useState('revenue')

  const totalRevenue = monthlyRevenueData.reduce((sum, item) => sum + item.revenue, 0)
  const totalPatients = monthlyRevenueData.reduce((sum, item) => sum + item.patients, 0)
  const averageRevenue = Math.round(totalRevenue / monthlyRevenueData.length)
  const averagePatients = Math.round(totalPatients / monthlyRevenueData.length)

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
            Reportes y Analytics 📊
          </h1>
          <p className="text-gray-600">
            Análisis detallado del rendimiento de tu práctica nutricional
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-nutri-primary focus:border-transparent"
          >
            <option value="1M">Último Mes</option>
            <option value="3M">Últimos 3 Meses</option>
            <option value="6M">Últimos 6 Meses</option>
            <option value="1Y">Último Año</option>
          </select>
          <button className="btn-primary flex items-center space-x-2">
            <Download size={20} />
            <span>Exportar PDF</span>
          </button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card text-center"
        >
          <DollarSign className="mx-auto mb-4 text-nutri-accent" size={32} />
          <h3 className="text-3xl font-bold text-nutri-accent mb-2">${totalRevenue.toLocaleString()}</h3>
          <p className="text-gray-600">Ingresos Totales</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+15% vs período anterior</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card text-center"
        >
          <Users className="mx-auto mb-4 text-nutri-primary" size={32} />
          <h3 className="text-3xl font-bold text-nutri-primary mb-2">{totalPatients}</h3>
          <p className="text-gray-600">Pacientes Atendidos</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+22% vs período anterior</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card text-center"
        >
          <TrendingUp className="mx-auto mb-4 text-nutri-data" size={32} />
          <h3 className="text-3xl font-bold text-nutri-data mb-2">${averageRevenue.toLocaleString()}</h3>
          <p className="text-gray-600">Promedio Mensual</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+8% vs período anterior</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card text-center"
        >
          <Activity className="mx-auto mb-4 text-green-500" size={32} />
          <h3 className="text-3xl font-bold text-green-500 mb-2">93%</h3>
          <p className="text-gray-600">Retención</p>
          <div className="mt-2 text-sm text-green-600 font-medium">+3% vs período anterior</div>
        </motion.div>
      </div>

      {/* Revenue and Patients Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-poppins font-bold text-nutri-primary">
            Ingresos y Pacientes por Mes
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="revenue"
                name="metric"
                value="revenue"
                checked={selectedMetric === 'revenue'}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="text-nutri-primary"
              />
              <label htmlFor="revenue" className="text-sm font-medium">Ingresos</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="patients"
                name="metric"
                value="patients"
                checked={selectedMetric === 'patients'}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="text-nutri-primary"
              />
              <label htmlFor="patients" className="text-sm font-medium">Pacientes</label>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {selectedMetric === 'revenue' ? (
              <BarChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Ingresos']} />
                <Bar dataKey="revenue" fill="#E63946" />
              </BarChart>
            ) : (
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value, 'Pacientes']} />
                <Line 
                  type="monotone" 
                  dataKey="patients" 
                  stroke="#2D5B4F" 
                  strokeWidth={3}
                  dot={{ fill: '#2D5B4F', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Plan Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card"
        >
          <h3 className="text-xl font-poppins font-bold text-nutri-primary mb-6">
            Distribución de Planes
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={planDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {planDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Patient Retention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="card"
        >
          <h3 className="text-xl font-poppins font-bold text-nutri-primary mb-6">
            Tasa de Retención
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={patientRetentionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[80, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, 'Retención']} />
                <Line 
                  type="monotone" 
                  dataKey="retention" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Appointment Types Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="card"
      >
        <h3 className="text-xl font-poppins font-bold text-nutri-primary mb-6">
          Análisis por Tipo de Consulta
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Tipo de Consulta</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cantidad</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Ingresos</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Promedio por Consulta</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">% del Total</th>
              </tr>
            </thead>
            <tbody>
              {appointmentTypesData.map((type, index) => {
                const percentage = Math.round((type.revenue / appointmentTypesData.reduce((sum, item) => sum + item.revenue, 0)) * 100)
                const average = Math.round(type.revenue / type.count)
                return (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">{type.type}</td>
                    <td className="py-4 px-4 text-gray-600">{type.count}</td>
                    <td className="py-4 px-4 text-gray-600">${type.revenue.toLocaleString()}</td>
                    <td className="py-4 px-4 text-gray-600">${average}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-nutri-primary"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
          <BarChart3 className="mx-auto mb-4 text-nutri-primary" size={32} />
          <h3 className="text-lg font-semibold text-nutri-primary mb-2">Reporte Mensual</h3>
          <p className="text-gray-600 text-sm">Generar reporte detallado del mes</p>
        </div>

        <div className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
          <PieChart className="mx-auto mb-4 text-nutri-accent" size={32} />
          <h3 className="text-lg font-semibold text-nutri-accent mb-2">Análisis de Pacientes</h3>
          <p className="text-gray-600 text-sm">Estadísticas detalladas de pacientes</p>
        </div>

        <div className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
          <TrendingUp className="mx-auto mb-4 text-nutri-data" size={32} />
          <h3 className="text-lg font-semibold text-nutri-data mb-2">Proyecciones</h3>
          <p className="text-gray-600 text-sm">Análisis predictivo de crecimiento</p>
        </div>
      </motion.div>
    </div>
  )
}
