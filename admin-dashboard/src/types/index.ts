export interface AdminUser {
  id: string
  email: string
  role: 'viewer' | 'admin' | 'superadmin'
}

export interface OverviewStats {
  total_sites: number
  active_sites: number
  total_requests_today: number
  spam_blocked_today: number
  accuracy: number
  revenue_monthly: number
}

export interface Site {
  site_id: string
  api_key: string
  total_analyzed: number
  total_spam_blocked: number
  total_ham_approved: number
  created_at: string
  last_activity: string | null
  status: 'active' | 'inactive' | 'suspended'
}

export interface Alert {
  type: 'warning' | 'error' | 'info'
  message: string
  site_id?: string
  created_at: string
}
