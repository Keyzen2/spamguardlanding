import { supabase } from './supabase'
import type { OverviewStats, Site, Alert } from '../types'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

class APIError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message)
    this.name = 'APIError'
  }
}

async function getAuthHeader() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()

    if (error) {
      throw new APIError('Failed to get session', 401, 'SESSION_ERROR')
    }

    if (!session?.access_token) {
      throw new APIError('No active session found', 401, 'NO_SESSION')
    }

    // Check if token is expired
    if (session.expires_at && Date.now() / 1000 > session.expires_at) {
      throw new APIError('Session expired', 401, 'TOKEN_EXPIRED')
    }

    return {
      'Authorization': `Bearer ${session.access_token}`,
      'Content-Type': 'application/json'
    }
  } catch (error) {
    if (error instanceof APIError) throw error
    throw new APIError('Authentication failed', 401, 'AUTH_FAILED')
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`
    let errorCode = 'HTTP_ERROR'

    try {
      const errorData = await response.json()
      errorMessage = errorData.message || errorData.error || errorMessage
      errorCode = errorData.code || errorCode
    } catch {
      // If JSON parsing fails, use the default error message
    }

    throw new APIError(errorMessage, response.status, errorCode)
  }

  try {
    return await response.json()
  } catch {
    throw new APIError('Invalid JSON response', 500, 'INVALID_JSON')
  }
}

export const adminApi = {
  async getOverview(): Promise<OverviewStats> {
    try {
      const headers = await getAuthHeader()
      const response = await fetch(`${API_URL}/admin/overview`, {
        headers,
        signal: AbortSignal.timeout(10000) // 10 second timeout
      })
      return await handleResponse<OverviewStats>(response)
    } catch (error) {
      if (error instanceof APIError) throw error
      throw new APIError('Failed to fetch overview data', 500, 'FETCH_OVERVIEW_FAILED')
    }
  },

  async getSites(): Promise<Site[]> {
    try {
      const headers = await getAuthHeader()
      const response = await fetch(`${API_URL}/admin/sites`, {
        headers,
        signal: AbortSignal.timeout(10000)
      })
      return await handleResponse<Site[]>(response)
    } catch (error) {
      if (error instanceof APIError) throw error
      throw new APIError('Failed to fetch sites data', 500, 'FETCH_SITES_FAILED')
    }
  },

  async getAlerts(): Promise<Alert[]> {
    try {
      const headers = await getAuthHeader()
      const response = await fetch(`${API_URL}/admin/alerts`, {
        headers,
        signal: AbortSignal.timeout(10000)
      })
      return await handleResponse<Alert[]>(response)
    } catch (error) {
      if (error instanceof APIError) throw error
      throw new APIError('Failed to fetch alerts data', 500, 'FETCH_ALERTS_FAILED')
    }
  },

  async getSystemHealth() {
    try {
      const headers = await getAuthHeader()
      const response = await fetch(`${API_URL}/admin/system-health`, {
        headers,
        signal: AbortSignal.timeout(10000)
      })
      return await handleResponse(response)
    } catch (error) {
      if (error instanceof APIError) throw error
      throw new APIError('Failed to fetch system health', 500, 'FETCH_HEALTH_FAILED')
    }
  }
}

export { APIError }
