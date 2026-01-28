import midnightLibrary from "../assets/images/midnight_library.jpg";
import atomicHabits from "../assets/images/Atomic_Habits.jpg";
import greatGatsby from "../assets/images/great_gatsby.jpg";
import dune from "../assets/images/dune.jpg";
import educated from "../assets/images/educated.jpg";
import silentPatient from "../assets/images/silent_patient.jpg";
import braidingSweetgrass from "../assets/images/braiding sweetgrass.jpg";
import projectHailMary from "../assets/images/project hail mary.jpg";

export const MOOD_CATEGORIES = [
  "All Moods",
  "Cozy",
  "Adventure",
  "Mystery",
  "Inspirational",
  "Thought-Provoking"
];

export const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 14.99,
    image: midnightLibrary,
    category: "Fiction",
    moods: ["Cozy", "Feel-Good", "Inspirational", "Quick Reads"],
    rating: 4.5,
    description: "A dazzling novel about all the choices that go into a life well lived."
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.99,
    image: atomicHabits,
    category: "Self-Help",
    moods: ["Focus", "Inspirational", "Quick Reads"],
    rating: 4.7,
    description: "Transform your life with tiny changes that deliver remarkable results."
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    image: greatGatsby,
    category: "Classic",
    moods: ["Romantic", "Heartbreak", "Dark Academia"],
    rating: 4.3,
    description: "A timeless American novel of wealth, love, and the American Dream."
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    price: 18.99,
    image: dune,
    category: "Sci-Fi",
    moods: ["Fantasy Escape", "Adventure", "Thought-Provoking"],
    rating: 4.6,
    description: "An epic science fiction masterpiece of politics, religion, and ecology."
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    price: 17.99,
    image: educated,
    category: "Memoir",
    moods: ["Inspirational", "Thought-Provoking", "Dark Academia"],
    rating: 4.8,
    description: "A stunning memoir about a young woman who leaves her survivalist family."
  },
  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 15.99,
    image: silentPatient,
    category: "Thriller",
    moods: ["Mystery", "Dark Academia", "Heartbreak"],
    rating: 4.4,
    description: "A woman who shoots her husband five times and never speaks again."
  },
  {
    id: 7,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 19.99,
    image: projectHailMary,
    category: "Sci-Fi",
    moods: ["Adventure", "Feel-Good", "Fantasy Escape", "Quick Reads"],
    rating: 4.7,
    description: "A man wakes up in space with no memory and must save humanity."
  },
  {
    id: 8,
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    price: 18.99,
    image: braidingSweetgrass,
    category: "Nature",
    moods: ["Cozy", "Thought-Provoking", "Inspirational"],
    rating: 4.6,
    description: "Reflections on how plants teach us about gratitude and reciprocity."
  }
];
