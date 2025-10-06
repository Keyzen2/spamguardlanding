import { useEffect, useState } from 'react'
import TableOne from '../components/Tables/TableOne'
import { adminApi } from '../lib/api'
import type { Site } from '../types'

export default function Sites() {
  const [sites, setSites] = useState<Site[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSites()
  }, [])

  const loadSites = async () => {
    try {
      const data = await adminApi.getSites()
      setSites(data)
    } catch (error) {
      console.error('Error loading sites:', error)
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

  return (
    <div className="flex flex-col gap-10">
      <TableOne sites={sites} />
    </div>
  )
    }
