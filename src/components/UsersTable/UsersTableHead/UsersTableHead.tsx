import { TableHead, TableRow, TableCell } from "@mui/material";

export const UsersTableHead = () => {
  // DUMP COMPONENT
  // Este componente fue creado para mantener el orden dentro del UsersTable
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Correo</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Acciones</TableCell>
      </TableRow>
    </TableHead>
  );
};
