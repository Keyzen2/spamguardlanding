import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Globe, Activity, LogOut, Shield } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

export default function Sidebar() {
  const location = useLocation()
  const { signOut, user } = useAuth()

  const menuGroups = [
    {
      name: 'MENU',
      items: [
        { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/sites', icon: Globe, label: 'Sites' },
      ]
    },
    {
      name: 'SISTEMA',
      items: [
        { path: '/system', icon: Activity, label: 'Health' },
      ]
    }
  ]

  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
      {/* SIDEBAR HEADER */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link to="/dashboard" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-title-md font-bold text-white">SpamGuard</span>
        </Link>
      </div>

      {/* SIDEBAR MENU */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                {group.name}
              </h3>

              <ul className="mb-6 flex flex-col gap-1.5">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          isActive && 'bg-graydark dark:bg-meta-4'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* USER INFO */}
      <div className="mt-auto border-t border-stroke px-6 py-4 dark:border-strokedark">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            {user?.email[0].toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white truncate">{user?.email}</p>
            <p className="text-xs text-bodydark2 capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={signOut}
          className="flex items-center gap-3 w-full rounded-sm px-4 py-2 text-bodydark1 hover:bg-graydark dark:hover:bg-meta-4"
        >
          <LogOut className="h-5 w-5" />
          Cerrar sesion
        </button>
      </div>
    </aside>
  )
}
