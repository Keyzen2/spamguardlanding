import type { Site } from '../../types'
import { Link } from 'react-router-dom'

interface TableOneProps {
  sites: Site[]
}

export default function TableOne({ sites }: TableOneProps) {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Sites Registrados
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Site ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Analizados
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Spam
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Estado
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Acciones
            </h5>
          </div>
        </div>

        {sites.map((site, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === sites.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={site.site_id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white sm:block">
                {site.site_id}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {site.total_analyzed.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-1">{site.total_spam_blocked.toLocaleString()}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                site.status === 'active'
                  ? 'bg-success text-success'
                  : 'bg-warning text-warning'
              }`}>
                {site.status}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <Link
                to={`/sites/${site.site_id}`}
                className="text-primary hover:underline"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
