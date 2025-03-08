import { EditIcon, DeleteIcon } from "@/icons";
import { UserId, UserWithId } from "@/types";
import { useState } from "react";
import { UsersModal } from "../UsersModal";
import { useAppSelector, useUser } from "@/hooks";
import {
  TableBody,
  TableRow,
  TableCell,
  Stack,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";

export const UsersTableBody = () => {
  // Estado que maneja si se ve o no se ve el modal
  const [modal, setModal] = useState(false);

  // Estado que maneja la seleccion de usuario
  const [selectedUser, setSelectedUser] = useState<UserWithId | null>(null);

  // Usamos el hook que nos trae los usuarios del estado global
  const users = useAppSelector((state) => state.users);

  //Usamos el hook useUser que tiene
  const { removeUser } = useUser();

  // Aplicamos el metodo removeUser del hook useUser para eliminar un usuario
  const handleRemove = (id: UserId) => {
    removeUser(id);
  };

  // Funcion que abre el modal y guarda el usuario seleccionado
  const openModal = (user: UserWithId) => {
    setSelectedUser(user);
    setModal(true);
  };

  // Funcion que cierra el modal y borra del estado el usuario que habia seleccionado
  const closeModal = () => {
    setSelectedUser(null);
    setModal(false);
  };

  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>
            <Stack
              spacing={2}
              direction="row"
              alignItems={"center"}
            >
              <Avatar
                alt={user.name}
                src={`https://unavatar.io/github/${user.github}`}
              />
              <Typography>{user.name}</Typography>
            </Stack>
          </TableCell>
          <TableCell>
            <Typography>{user.email}</Typography>
          </TableCell>
          <TableCell>
            <Stack
              spacing={2}
              direction="row"
              alignItems={"center"}
            >
              <IconButton
                color="primary"
                onClick={() => openModal(user)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleRemove(user.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </TableCell>
          <UsersModal
            modal={modal}
            closeModal={closeModal}
            title="Editar Usuario"
            user={selectedUser}
          />
        </TableRow>
      ))}
    </TableBody>
  );
};
