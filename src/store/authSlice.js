export const createAuthSlice = (set, get) => ({
  isAuthenticated: false,
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
        let { accessToken, refreshToken } = data;

        if (accessToken && refreshToken) {
          set({ isAuthenticated: true });
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

      if (response.ok) {
        set({ isAuthenticated: false });
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
        set({ user: data });
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

  checkAuthStatus: async () => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/user/auth-status",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        return data.isAuthenticated;
      }
      return false;
    } catch (error) {
      console.log(" error:", error);
      return false;
    }
  },
});
