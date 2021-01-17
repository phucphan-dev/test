let accessToken = window.localStorage.getItem("accessToken");
let refreshToken = window.localStorage.getItem("refreshToken");

/**
 * Listen for changes from other tabs
 */
window.addEventListener("storage", (event) => {
  if (event.key === "accessToken") {
    accessToken = event.newValue;
  }
});

export const getAccessToken = (): string | null => accessToken;

export const setAccessToken = (token: string): void => {
  accessToken = token;
  window.localStorage.setItem("accessToken", token);
};
export const getRefreshToken = (): string | null => refreshToken;

export const setRefreshToken = (token: string): void => {
  refreshToken = token;
  window.localStorage.setItem("refreshToken", token);
};

export const removeAccessToken = (): void => {
  accessToken = null;
  window.localStorage.removeItem("accessToken");
};
