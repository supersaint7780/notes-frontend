import { useEffect } from "react";
import NoteList from "../components/NoteList";
import { useBoundStore } from "../store/useBoundStore";

export default function AllNotes() {
  const { notes, getAllNotes } = useBoundStore();

  useEffect(() => {
    getAllNotes();
  }, []);
  return <NoteList notes={notes} />;
}
