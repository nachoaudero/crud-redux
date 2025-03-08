import { User, UserWithId } from "@/types";
import { useEffect, useState } from "react";
import { useUser } from "..";

// Valores por defecto.
const defaultValues = { name: "", email: "", github: "" };

// Este hook recibe como parametro:
// closeModal que es una funcion que retorna un void, su funcion es cerrar el modal cuando se hace el submit del formulario.
// user que puede venir como no venir, es un parametro opcional.
export const useUserForm = (
  closeModal: () => void,
  user?: UserWithId | null
) => {
  // Estado local que maneja los valores del formulario.
  const [values, setValues] = useState<User>(defaultValues);

  // Estado local que maneja los errores del formulario.
  const [errors, setErrors] = useState(defaultValues);

  // Trae el addUser y el editUser del hook useUser, este hook lo que hacia era ejecutar los dispatch al estado global.
  const { addUser, editUser } = useUser();

  // Este useEffect se ejecuta cada vez que user cambia de valor.
  useEffect(() => {
    // Corroboramos si user es null o no.
    if (user) {
      // Si user no es null le asignamos los valores de user al estado local.
      setValues({
        name: user.name,
        email: user.email,
        github: user.github,
      });
      // Borramos los errores si es que habian.
      setErrors(defaultValues);
    } else {
      // Si user es null asignamos los valores por defecto al estado local.
      setValues(defaultValues);
    }
  }, [user]);

  // Funcion que valida los datos del formulario, se ejecuta solo cuando el usuario le da submit al formulario.
  const validate = (valuesToCheck: User) => {
    let tempErrors = { name: "", email: "", github: "" };
    let isValid = true;

    if (!valuesToCheck.name.trim()) {
      tempErrors.name = "El nombre es obligatorio.";
      isValid = false;
    }
    if (!valuesToCheck.email.trim()) {
      tempErrors.email = "El email es obligatorio.";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valuesToCheck.email)) {
      tempErrors.email = "El email no es válido.";
      isValid = false;
    }
    if (!valuesToCheck.github.trim()) {
      tempErrors.github = "El GitHub es obligatorio.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Traemos los datos del formulario.
    const formData = new FormData(event.currentTarget);

    // Creamos un objeto con los datos del formulario.
    const newValues: User = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      github: formData.get("github") as string,
    };

    // Validamos los datos, si hay algun dato erroneo salimos de la funcion.
    if (!validate(newValues)) return;

    // Si el parametro user es igual a null entonces el modal se abrio para agregar un usuario.
    if (!user) {
      // Llamamos al metodo del hook useUser que hace el dispatch para agregar un usuario.
      addUser(newValues);
    }

    // Si el parametro user no es null entonces el modal se abrio para editar un usuario.
    if (user) {
      // Creamos un nuevo usuario con los datos del formulario (newValues) y le agregamos el id del usuario que queremos editar.
      const newUser: UserWithId = { ...newValues, id: user.id };
      // Lllamamos al metodo del hook useUser que hace el dispatch para editar un usuario.
      editUser(newUser);
    }

    // Hacemos uso de la funcion que cierra el modal.
    closeModal();
  };

  return { values, errors, handleSubmit };
};
