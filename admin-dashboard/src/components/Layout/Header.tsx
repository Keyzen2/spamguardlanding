import { Bell } from 'lucide-react'

interface HeaderProps {
  title: string
  subtitle?: string
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div>
          <h1 className="mb-0.5 text-title-md2 font-bold text-black dark:text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-body">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
              <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
