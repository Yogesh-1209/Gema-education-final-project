import { useEffect, useState } from 'react'
import { workshopService } from '@/services/workshop/workshop.service'
import type { Workshop } from '@/services/workshop/types'

const LOAD_ERROR_MESSAGE = 'Unable to load workshops. Please try again later.'

interface UseWorkshopsResult {
  workshops: Workshop[]
  isLoading: boolean
  error: string | null
  hasWorkshops: boolean
}

export function useWorkshops(): UseWorkshopsResult {
  const [workshops, setWorkshops] = useState<Workshop[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    workshopService
      .getWorkshops()
      .then((data) => {
        if (cancelled) return
        setWorkshops(data)
        setError(null)
      })
      .catch(() => {
        if (cancelled) return
        setWorkshops([])
        setError(LOAD_ERROR_MESSAGE)
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return {
    workshops,
    isLoading,
    error,
    hasWorkshops: workshops.length > 0,
  }
}
