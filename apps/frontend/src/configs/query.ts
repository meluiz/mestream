import { QueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { toast } from 'sonner'

import { Duration } from 'luxon'

let displayedNetworkFailureError = false

export default new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Duration.fromObject({ minutes: 1 }).toMillis(),
      retry(failureCount) {
        if (failureCount >= 3) {
          if (displayedNetworkFailureError === false) {
            displayedNetworkFailureError = true

            toast.error(
              'The application is taking too long to respond. Please try again later.',
              {
                onDismiss() {
                  displayedNetworkFailureError = false
                },
              },
            )
          }

          return false
        }

        return true
      },
    },
    mutations: {
      onError(error) {
        if (error instanceof HTTPError) {
          if ('message' in error) {
            toast.error(error.message)
          } else {
            toast.error('Failure to process request')
          }
        }
      },
    },
  },
})
