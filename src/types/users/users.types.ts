// Separamos el tipo del id para que si en un futuro queremos cambiar de string a number
// lo cambiariamos directamente de este tipo y no tendiramos que ir cambiando uno a uno
export type UserId = string;

// Tipo del usuario sin id
export interface User {
  name: string;
  email: string;
  github: string;
}

// Tipo del usuario con id
export interface UserWithId extends User {
  id: UserId;
}
