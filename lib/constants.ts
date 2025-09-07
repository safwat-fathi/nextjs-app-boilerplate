// Cookie names
export const COOKIE_NAMES = {
  TOKEN: "token",
  THEME: "theme",
  USER_PREFERENCES: "user_preferences",
  LANGUAGE: "language",
  SESSION_ID: "session_id",
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  USER_DATA: "userData",
  THEME_PREFERENCE: "themePreference",
  LANGUAGE_PREFERENCE: "languagePreference",
} as const;

// Route constants
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
} as const;

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Common error messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: "You are not authorized to perform this action",
  FORBIDDEN: "Access to this resource is forbidden",
  NOT_FOUND: "The requested resource was not found",
  INTERNAL_ERROR: "An unexpected error occurred",
} as const;

// Theme constants
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

// Locale constants
export const LOCALES = {
  EN: "en",
  AR: "ar",
} as const;
