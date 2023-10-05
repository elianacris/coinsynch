import { createContext, ReactNode, useState } from 'react'
const defaultState = {
  isLoading: false,
  handleLoadingOn: () => {},
  handleLoadingOff: () => {},
}

interface ContextProviderProps {
  children: ReactNode
}

export const LoadingContext = createContext(defaultState)

function LoadingProvider({ children }: ContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLoadingOn = () => {
    setIsLoading(true)
  }

  const handleLoadingOff = () => {
    setIsLoading(false)
  }
  return (
    <LoadingContext.Provider
      value={{
        handleLoadingOn,
        handleLoadingOff,
        isLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
