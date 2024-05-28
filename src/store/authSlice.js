import Cookies from "js-cookie";

export const createAuthSlice = (set, get) => ({
  user: null,

  login: async ({ email, password }) => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        let { data } = await response.json();
        let { user, accessToken, refreshToken } = data;

        if (accessToken && refreshToken) {
          set({ user });
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
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/logout",
        {
          credentials: "include",
        }
      );

      if(response.ok) {
        set({ user: null });
        return true;
      }
      return false;

    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  },

  signup: async ({ firstName, lastName, email, username, password }) => {
    const fullName = firstName + lastName;
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ fullName, email, username, password }),
        }
      );

      if (response.ok) {
        const { data } = await response.json();
        set({ user: data.user });
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
        "https://notes-backend-ck0s.onrender.com/api/v1/user/refresh-token",
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const { data } = await response.json();
        return data.accessToken;
      }
      return null;
    } catch (error) {
      console.error("Token refresh error:", error);
      return null;
    }
  },

  checkAuth: async () => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/current-user",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        set({ user: data.user });
        return true;
      }
      return false;
    } catch (error) {
      console.log("Authentication error:", error);
      return false;
    }
  },
});
