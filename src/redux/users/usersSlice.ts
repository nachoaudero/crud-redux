import { User, UserId, UserWithId } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Si quieres que la aplicacion tenga 3 usuarios descomenta la linea de abajo y comenta la otra.
// const initialState: UserWithId[] = [
//   {
//     id: "1",
//     name: "Nacho",
//     email: "nachhoaudero@gmail.com",
//     github: "nachoaudero",
//   },
//   {
//     id: "2",
//     name: "lucas",
//     email: "lucas@gmail.com",
//     github: "lucas",
//   },
//   {
//     id: "3",
//     name: "marcos",
//     email: "marcos@gmail.com",
//     github: "marcos",
//   },
// ];

// Si queres que la aplicacion no tenga ningun usuario descomenta la linea de abajo y comenta la otra.
const initialState: UserWithId[] = [];

// Creacion del slice de redux toolkit.
const usersSlice = createSlice({
  // Nombre del slice.
  name: "users",
  // Estado incial.
  initialState,
  // Todos los reducers que tendra nuenstro slice.
  reducers: {
    // Elimina usuario por id.
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      // Filtra el estado y lo retorna sin el usuario que tiene id que viene por paylod
      return state.filter((user) => user.id !== action.payload);
    },
    // Agrega usuario nuevo.
    addNewUser: (state, action: PayloadAction<User>) => {
      // Creamos el id.
      const id = crypto.randomUUID();
      // Retornamos el estado anterior y le sumamos el id creado y los datos que nos vienen desde el payload.
      return [...state, { id, ...action.payload }];
    },
    // Edita un usuario por id.
    editUserById: (state, action: PayloadAction<UserWithId>) => {
      // Retorna el mismo estado pero con los nuevos datos del usuario que editamos.
      return state.forEach((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
          user.email = action.payload.email;
          user.github = action.payload.github;
        }
      });
    },
  },
});

// Exporta por defecto el reducer del slice.
export default usersSlice.reducer;
// Exportamos las acciones del slice.
export const { deleteUserById, addNewUser, editUserById } = usersSlice.actions;
