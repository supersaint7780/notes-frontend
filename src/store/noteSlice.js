export const createNoteSlice = (set) => ({
  notes: [],
  getAllNotes: async () => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/notes/all",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        const notes = data;
        set({ notes });
      }
    } catch (error) {
      console.log("Error fetching notes: ", error);
    }
  },
  createNote: async ({ title, content }) => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/notes/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ title, content }),
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        const note = data;
        set((state) => ({ notes: [...state.notes, note] }));
        return true;
      }
      return false;
    } catch (error) {
      console.log("Note Creation Error: ", error);
    }
  },
  deleteNote: async (id) => {
    try {
      const response = await fetch(
        `https://notes-backend-ck0s.onrender.com/api/v1/notes/delete/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        set((state) => ({
          notes: state.notes.filter((note) => note._id !== id),
        }));
      }
    } catch (error) {
      console.log("Error:", error);
    }
  },
  pinNote: async (id) => {
    try {
      const response = await fetch(
        `https://notes-backend-ck0s.onrender.com/api/v1/notes/pin/${id}`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        const updatedNote = data;
        set((state) => ({
          notes: state.notes.map((note) => {
            if (note._id === id) {
              return updatedNote;
            } else {
              return note;
            }
          }),
        }));
      }
    } catch (error) {
      console.log("Unable to pin note:", error);
    }
  },
});
