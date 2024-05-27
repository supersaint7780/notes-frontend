import Cookies from "js-cookie";

export const createAuthSlice = (set, get) => ({
  user: null,
  token: null,

  login: async (email, password) => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const { user, accessToken, refreshToken } = await response.json();

        accessToken = accessToken || Cookies.get("accessToken");
        refreshToken = refreshToken || Cookies.get("refreshToken");

        if (accessToken && refreshToken) {
          set({ user });
          set({ token: accessToken });
        }

        return true;
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  },

  logout: async () => {
    try {
      await fetch("https://notes-backend-ck0s.onrender.com/api/v1/user/logout");

      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      set({ user: null, token: null });
    } catch (error) {
      console.error("Logout error:", error);
    }
  },

  signup: async (firstName, lastName, email, username, password) => {
    const fullName = firstName + lastName;
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, username, password }),
        }
      );

      if (response.ok) {
        const user = await response.json();
        set({ user });
        return true;
      }

      return false;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  },

  refreshToken: async () => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/refresh-token"
      );

      if (response.ok) {
        const data = await response.json();
        set({ token: data.accessToken });
        return data.accessToken;
      }
      return null;
    } catch (error) {
      console.error("Token refresh error:", error);
      return null;
    }
  },

  checkAuth: async () => {
    const refreshToken = Cookies.get("refresh-token");
    if (refreshToken) {
      const accessToken = await get().refreshToken();
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/current-user"
      );
      const user = await response.json();
      if (accessToken) {
        set({ token: accessToken });
        set({ user: user });
      }
    }
  },
});