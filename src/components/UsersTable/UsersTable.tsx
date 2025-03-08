import { UsersTableAdd } from "./UsersTableAdd";
import { useAppSelector } from "@/hooks";
import { UsersTableHead } from "./UsersTableHead";
import { UsersTableBody } from "./UsersTableBody";
import {
  Container,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";

export const UsersTable = () => {
  // Traemos el usuario desde el estado global
  const users = useAppSelector((state) => state.users);

  return (
    <Container sx={{ paddingTop: "32px" }}>
      <TableContainer component={Paper}>
        <UsersTableAdd length={users.length} />
        {users.length !== 0 ? (
          <Table stickyHeader={true}>
            <UsersTableHead />
            <UsersTableBody />
          </Table>
        ) : (
          <Typography
            align="center"
            sx={{ margin: "8px", fontWeight: "bold" }}
            variant="h5"
            color="error"
          >
            No hay usuarios.
          </Typography>
        )}
      </TableContainer>
    </Container>
  );
};
