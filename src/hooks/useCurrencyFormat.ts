import { useCallback } from 'react'

function useCurrencyFormat(): (value: number | undefined, options?: Intl.NumberFormatOptions | undefined) => string {
  return useCallback(
    (value: number | undefined, options?: Intl.NumberFormatOptions) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        ...options,
      }).format(value || 0),
    [],
  )
}

export default useCurrencyFormat
