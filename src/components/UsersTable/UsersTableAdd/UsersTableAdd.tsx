import { AddIcon } from "@/icons";
import { useState } from "react";
import { UsersModal } from "../UsersModal";
import { Badge, IconButton } from "@mui/material";

interface IUserAdd {
  length: number;
}

export const UsersTableAdd = ({ length }: IUserAdd) => {
  // Estado que maneja si se ve o no se ve el modal
  const [modal, setModal] = useState(false);

  // Funcion que abre el modal
  const openModal = () => setModal(true);

  // Funcion que cierra el modal
  const closeModal = () => setModal(false);

  return (
    <Badge
      component={"div"}
      badgeContent={length}
      color="primary"
      sx={{ margin: "16px" }}
    >
      <IconButton
        color="primary"
        onClick={openModal}
      >
        <AddIcon />
      </IconButton>
      <UsersModal
        modal={modal}
        closeModal={closeModal}
        title="Agregar Usuario"
      />
    </Badge>
  );
};
