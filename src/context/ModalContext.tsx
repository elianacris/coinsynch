import { createContext, ReactNode, useState } from "react";

const defaultState = {
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
  // page: "",
};

interface ContextProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext(defaultState);

function ModalProvider({ children }: ContextProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  // const [page, setPage] = useState<string>();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const openModalChangePassword = (page: string) => {
  //   setPage(page);
  //   handleOpenModal();
  // };

  // const openModal = (route) => {
  //   openModalChangePassword(route);
  // };

  return (
    <ModalContext.Provider
      value={{
        // page,
        open,
        handleClose,
        handleOpen,
        // openModalChangePassword,
        // openModal,
        // setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
