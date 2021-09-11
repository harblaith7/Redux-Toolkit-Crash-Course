import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../feature/reservationSlice";
import customerReducer from "../feature/customerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
