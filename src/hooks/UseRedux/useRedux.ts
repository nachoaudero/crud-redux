import { AppDispatch, RootState } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// Este hook es una MUY BUENA practica no estar llamado siempre al "react-redux"
// Esto sirve para que si en un futuro queremos cambiar de gestor de estado global no tengamos que modificar toda la app
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
