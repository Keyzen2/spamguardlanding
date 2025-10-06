import { supabase } from './supabase'
import type { OverviewStats, Site, Alert } from '../types'

const API_URL = import.meta.env.VITE_API_URL || 'https://spamguard.up.railway.app'

async function getAuthHeader() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session?.access_token) {
    throw new Error('Not authenticated')
  }
  return {
    'Authorization': `Bearer ${session.access_token}`,
    'Content-Type': 'application/json'
  }
}

export const adminApi = {
  async getOverview(): Promise<OverviewStats> {
    const headers = await getAuthHeader()
    const response = await fetch(`${API_URL}/admin/overview`, { headers })
    if (!response.ok) throw new Error('Failed to fetch overview')
    return response.json()
  },

  async getSites(): Promise<Site[]> {
    const headers = await getAuthHeader()
    const response = await fetch(`${API_URL}/admin/sites`, { headers })
    if (!response.ok) throw new Error('Failed to fetch sites')
    return response.json()
  },

  async getAlerts(): Promise<Alert[]> {
    const headers = await getAuthHeader()
    const response = await fetch(`${API_URL}/admin/alerts`, { headers })
    if (!response.ok) throw new Error('Failed to fetch alerts')
    return response.json()
  },

  async getSystemHealth() {
    const headers = await getAuthHeader()
    const response = await fetch(`${API_URL}/admin/system-health`, { headers })
    if (!response.ok) throw new Error('Failed to fetch system health')
    return response.json()
  }
}
