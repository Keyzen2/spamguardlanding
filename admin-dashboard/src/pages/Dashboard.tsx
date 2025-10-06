import { useEffect, useState } from 'react'
import { Globe, Shield, TrendingUp, Users } from 'lucide-react'
import CardDataStats from '../components/Cards/CardDataStats'
import { adminApi } from '../lib/api'
import type { OverviewStats, Alert } from '../types'

export default function Dashboard() {
  const [stats, setStats] = useState<OverviewStats | null>(null)
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [statsData, alertsData] = await Promise.all([
        adminApi.getOverview(),
        adminApi.getAlerts()
      ])
      setStats(statsData)
      setAlerts(alertsData)
    } catch (error) {
      console.error('Error loading dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="rounded-sm border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <p className="text-center text-body">Error cargando datos</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Total Sites"
          total={stats.total_sites.toString()}
          icon={Globe}
        />
        <CardDataStats
          title="Sites Activos"
          total={stats.active_sites.toString()}
          icon={Users}
          levelUp
          rate="12%"
        />
        <CardDataStats
          title="Requests Hoy"
          total={stats.total_requests_today.toLocaleString()}
          icon={TrendingUp}
        />
        <CardDataStats
          title="Spam Bloqueado"
          total={stats.spam_blocked_today.toLocaleString()}
          icon={Shield}
          levelUp
          rate="8%"
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-black dark:text-white">
                  Metricas Generales
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-sm border border-stroke bg-gray p-4 dark:border-strokedark dark:bg-meta-4">
                <div className="text-sm text-body">Accuracy del Modelo</div>
                <div className="mt-2 text-3xl font-bold text-black dark:text-white">
                  {(stats.accuracy * 100).toFixed(1)}%
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-gray p-4 dark:border-strokedark dark:bg-meta-4">
                <div className="text-sm text-body">Revenue Mensual</div>
                <div className="mt-2 text-3xl font-bold text-black dark:text-white">
                  ${stats.revenue_monthly}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Alertas Recientes
            </h4>

            <div className="space-y-3">
              {alerts.length === 0 ? (
                <p className="text-center text-body py-8">No hay alertas</p>
              ) : (
                alerts.slice(0, 5).map((alert, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 rounded-sm border-l-4 px-4 py-3 ${
                      alert.type === 'error'
                        ? 'border-meta-1 bg-meta-1 bg-opacity-10'
                        : alert.type === 'warning'
                        ? 'border-warning bg-warning bg-opacity-10'
                        : 'border-meta-5 bg-meta-5 bg-opacity-10'
                    }`}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-black dark:text-white">
                        {alert.message}
                      </p>
                      {alert.site_id && (
                        <p className="text-xs text-body mt-1">
                          Site: {alert.site_id}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
