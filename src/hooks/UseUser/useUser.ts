import { User, UserId, UserWithId } from "@/types";
import { useAppDispatch } from "..";
import { addNewUser, deleteUserById, editUserById } from "@/redux";

// Este hook es el encargado de ejecutar los dispatch de las funciones que tiene el slice de usuarios
export const useUser = () => {
  // nos traemos el appDispatch del hook useRedux que creamos anteriormente
  const dispatch = useAppDispatch();

  // Funcion que ejecuta el reducer para eliminar un usuario
  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  // Funcion que ejecuta el reducer para agregar un usuario
  const addUser = ({ name, email, github }: User) => {
    dispatch(addNewUser({ name, email, github }));
  };

  // Funcion que ejecuta el reducer para agregar un usuario
  const editUser = (user: UserWithId) => {
    dispatch(editUserById(user));
  };

  return { removeUser, addUser, editUser };
};
