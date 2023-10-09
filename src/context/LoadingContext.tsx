import {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  Dispatch,
} from "react";
const defaultState = {
  isLoading: false,
  handleLoadingOn: () => {},
  handleLoadingOff: () => {},
  setIsLoading: Dispatch<SetStateAction<boolean>>,
};

interface ContextProviderProps {
  children: ReactNode;
}

export const LoadingContext = createContext(defaultState);

function LoadingProvider({ children }: ContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoadingOn = () => {
    setIsLoading(true);
  };

  const handleLoadingOff = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        handleLoadingOn,
        handleLoadingOff,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
