export const createNoteSlice = (set) => ({
  notes: [],
  getAllNotes: async () => {
    try {
      const response = await fetch(
        "https://notes-backend-ck0s.onrender.com/api/v1/notes/all"
      );
      if (response.ok) {
        const notes = await response.json();
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
          body: JSON.stringify({ title, content }),
        }
      );
      if (response.ok) {
        const note = await response.json();
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
});
