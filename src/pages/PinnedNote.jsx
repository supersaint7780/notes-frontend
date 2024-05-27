import NoteList from "../components/NoteList";

const notes = [
  {
    id: 1,
    title: "Grocery List",
    content: "Milk, Bread, Eggs, Butter",
    isPinned: false,
  },
  {
    id: 2,
    title: "Meeting Notes",
    content: "Discuss project milestones and deadlines",
    isPinned: true,
  },
  {
    id: 3,
    title: "Workout Routine",
    content: "Monday: Chest, Tuesday: Back, Wednesday: Legs",
    isPinned: false,
  },
  {
    id: 4,
    title: "Holiday Plans",
    content: "Visit family, go hiking, relax at the beach",
    isPinned: true,
  },
  {
    id: 5,
    title: "Book List",
    content: "1984, Brave New World, Fahrenheit 451",
    isPinned: false,
  },
  {
    id: 6,
    title: "To-Do List",
    content: "Finish report, call plumber, buy groceries",
    isPinned: true,
  },
  {
    id: 7,
    title: "Birthday Reminder",
    content: "Mom's birthday on June 1st",
    isPinned: false,
  },
  {
    id: 8,
    title: "Shopping List",
    content: "Laptop, Headphones, Phone case",
    isPinned: false,
  },
  {
    id: 9,
    title: "Recipe: Pancakes",
    content: "Flour, Eggs, Milk, Sugar, Baking powder",
    isPinned: true,
  },
  {
    id: 10,
    title: "Ideas for Blog",
    content: "JavaScript tips, CSS tricks, HTML5 features",
    isPinned: false,
  },
  {
    id: 11,
    title: "Travel Itinerary",
    content: "Day 1: Sightseeing, Day 2: Museum, Day 3: Beach",
    isPinned: true,
  },
  {
    id: 12,
    title: "Conference Schedule",
    content: "Keynote at 9 AM, Networking at 1 PM, Workshops at 3 PM",
    isPinned: false,
  },
  {
    id: 13,
    title: "Project Tasks",
    content: "Design mockup, Implement API, Test application",
    isPinned: false,
  },
  {
    id: 14,
    title: "Gift Ideas",
    content: "Watch, Perfume, Book",
    isPinned: true,
  },
  {
    id: 15,
    title: "Music Playlist",
    content: "Song 1, Song 2, Song 3",
    isPinned: false,
  },
  {
    id: 16,
    title: "Dinner Menu",
    content: "Starter: Soup, Main: Steak, Dessert: Ice cream",
    isPinned: false,
  },
  {
    id: 17,
    title: "Lecture Notes",
    content: "Introduction to Algorithms, Data Structures",
    isPinned: true,
  },
  {
    id: 18,
    title: "Chores",
    content: "Clean the house, Wash dishes, Do laundry",
    isPinned: false,
  },
  {
    id: 19,
    title: "Meeting Agenda",
    content: "Discuss Q2 targets, Review performance, Plan next steps",
    isPinned: true,
  },
  {
    id: 20,
    title: "Event Planning",
    content: "Venue booking, Invitations, Catering",
    isPinned: false,
  },
];

const pinnedNotes = notes.filter((note) => note.isPinned);

export default function PinnedNotes() {
  return <NoteList notes={pinnedNotes} />;
}
