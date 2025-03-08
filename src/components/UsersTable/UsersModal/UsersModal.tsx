import { useUserForm } from "@/hooks";
import { UserWithId } from "@/types";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// Estilos del modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

// Interface de las props que recibe el modal
interface IUsersModal {
  modal: boolean; // Recibe si el modal esta abierto o cerrado (true or false)
  closeModal: () => void; // Funcion que cierra el modal
  title: string; // Si el modal se abre para agregar un usuario el titulo es "Agregar usuario" y si se abre para editar un usuario el titulo es "Editar usuario"
  user?: UserWithId | null; // Esta prop puede venir como no puede venir, sirve para autocompletar el formulario en caso que se quiera editar un usuario
}

export const UsersModal = ({ modal, closeModal, title, user }: IUsersModal) => {
  // Llamamos al hook useUserForm
  // Le enviamos como parametro el closeModal y el usuario
  // Retornamos del hook los valores del formulario, los errores y la funcion handleSubmit
  const { values, errors, handleSubmit } = useUserForm(closeModal, user);

  return (
    <Modal
      open={modal}
      onClose={closeModal}
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
          align="center"
        >
          {title}
        </Typography>
        <Stack
          spacing={2}
          component={"form"}
          sx={{ padding: "16px", minWidth: "25vw" }}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            type="text"
            label="Nombre"
            size="small"
            defaultValue={values?.name}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            name="email"
            type="text"
            label="Email"
            size="small"
            defaultValue={values?.email}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            name="github"
            type="text"
            label="Github"
            size="small"
            defaultValue={values?.github}
            error={!!errors.github}
            helperText={errors.github}
          />
          <Button
            type="submit"
            variant="outlined"
            size="small"
          >
            {title}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
