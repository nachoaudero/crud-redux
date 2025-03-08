import { Container } from "@mui/material";
import { UsersTable } from "@/components";

export const App = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ minHeight: "100vh", bgcolor: "dimgray" }}
    >
      <UsersTable />
    </Container>
  );
};
