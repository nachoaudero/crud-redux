import { store } from "@/redux";

// Tipamos los datos de redux
// Buena practica MUY IMPORTANTE
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
