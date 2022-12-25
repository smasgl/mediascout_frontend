export const envVariables = {
  AVATAR_GENERATION_URL: import.meta.env.VITE_AVATAR_GENERATION_URL as string,
  BASE_URL: import.meta.env.VITE_BASE_URL as string,
  
  API_AUTH_LOGIN_URL: import.meta.env.VITE_API_AUTH_LOGIN_URL as string,
  API_AUTH_LOGOUT_URL: import.meta.env.VITE_API_AUTH_LOGOUT_URL as string,
  API_USER_GET_URL: import.meta.env.VITE_API_USER_GET_URL as string,
  API_USER_ADD_URL: import.meta.env.VITE_API_USER_ADD_URL as string,

  PER_ADD_USER: import.meta.env.VITE_PER_ADD_USER as string,
}
