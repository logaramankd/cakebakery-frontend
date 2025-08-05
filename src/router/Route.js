import { lazy } from "react";

export const register = lazy(() => import('../pages/Auth/Register'))
export const login = lazy(() => import('../pages/Auth/Login'))