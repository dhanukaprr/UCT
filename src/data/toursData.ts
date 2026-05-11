export type Tour = {
  id: string;
  category: string;
  title: string;
  duration: string;
  description: string;
  itinerary: { day: string; location?: string; description?: string }[];
};

export const tourCategoriesData = [
  { id: "beach", name: "Beach Tours", description: "Sri Lanka's coast dazzles with golden beaches, turquoise waters, vibrant coral reefs, and bustling fishing villages." },
  { id: "cultural", name: "Cultural Tours", description: "Step into a land where every smile tells a story, every temple whispers history, and every meal is a celebration." },
  { id: "adventure", name: "Adventure Tours", description: "Experience thrilling adventure tours in Sri Lanka with hikes, wildlife safaris, water sports, and mountain treks." },
  { id: "wildlife", name: "Wildlife Tours", description: "Discover Sri Lanka's rich biodiversity through lush rainforests, serene national parks, and vibrant wildlife." },
  { id: "hill-country", name: "Hill Country Tours", description: "Experience the beauty of Sri Lanka's hill country with scenic train rides, lush tea estates, and charming towns." },
  { id: "honeymoon", name: "Honeymoon Tours", description: "Celebrate love with romantic honeymoon tours featuring stunning beaches, serene hill stations, and luxury resorts." },
  { id: "golf", name: "Golf Tours", description: "Test your limits on world-class 18-hole golf courses amidst breathtaking scenery." },
];

export const allTours: Tour[] = [
  {
    id: "eastern-blue-bliss",
    category: "beach",
    title: "Eastern Blue Bliss",
    duration: "11 Nights & 12 Days",
    description: "Tucked away from the usual tourist trails, the North Eastern coast of Sri Lanka is a hidden paradise waiting to be discovered.",
    itinerary: [
      { day: "Day 01", location: "Arrival", description: "Explore the fish market or head out on a boat ride. Rest in Negombo." },
      { day: "Day 02", location: "Habarana", description: "Visit the cultural triangle and the Sigiriya Rock for a spectacular sunset." },
      { day: "Day 03 & 04", location: "Trincomalee", description: "Diving into vibrant marine life of Pigeon Island, visit Swami Rock and Koneswaram Temple." },
      { day: "Day 05 & 06", location: "Pasikudah", description: "Enjoy the shallow, calm waters and long stretches of soft, golden sand." },
      { day: "Day 07 & 08", location: "Arugam Bay", description: "Surfer's paradise with world-class waves and palm-fringed beaches." },
      { day: "Day 09", location: "Yala", description: "Evening Safari at Yala National Park in search of leopards." },
      { day: "Day 10", location: "Galle", description: "Explore Galle Fort and its cozy cafes and boutique hotels." },
      { day: "Day 11", location: "Colombo", description: "Stop by Kosgoda Turtle Hatchery. Last minute shopping in Colombo." },
      { day: "Day 12", location: "Departure", description: "Transfer to airport." },
    ]
  },
  {
    id: "scenic-beauty",
    category: "cultural",
    title: "Scenic Beauty of Sri Lanka",
    duration: "08 Nights & 09 Days",
    description: "Experience the best of Sri Lanka on this 9-day cultural and scenic tour. Perfect for anyone wanting to truly experience the heart of Sri Lanka.",
    itinerary: [
      { day: "Day 01", location: "Arrival", description: "Arrival in Negombo & Rest" },
      { day: "Day 02", location: "Dambulla & Sigiriya", description: "Visit ancient sites like Dambulla's cave temple and the famous Sigiriya rock." },
      { day: "Day 03", location: "Hiriwadunna Trek", description: "Hiriwadunna Trek & Polonnaruwa exploration." },
      { day: "Day 04", location: "Anuradhapura", description: "Anuradhapura & Ritigala Monastery." },
      { day: "Day 05", location: "Kandy", description: "Kandy: Temples and Traditions." },
      { day: "Day 06", location: "Kandy", description: "Kandy's Historic Temples." },
      { day: "Day 07", location: "Nuwara Eliya", description: "Nuwara Eliya & Train Ride." },
      { day: "Day 08", location: "Colombo", description: "Colombo: Shopping and Leisure." },
      { day: "Day 09", location: "Departure", description: "Departure from BIA." },
    ]
  },
  {
    id: "beyond-boundaries",
    category: "adventure",
    title: "Beyond Boundaries",
    duration: "14 Nights & 15 Days",
    description: "Designed for seasoned thrill-seekers, pushing physical and mental limits in remote, untamed landscapes.",
    itinerary: [
      { day: "Day 01-03", location: "Kandy", description: "Hike the five peaks of the Hanthana Mountain Range." },
      { day: "Day 04-05", location: "Hatton", description: "White water rafting and rope jumping at Laxapana Waterfalls." },
      { day: "Day 06", location: "Nuwara Eliya", description: "Trek into the wild at Horton Plains National Park." },
      { day: "Day 07-08", location: "Ella", description: "Hike Mini Adam's Peak at sunrise and Zip Line." },
      { day: "Day 09", location: "Yala", description: "Safari drive at Yala National Park." },
      { day: "Day 10-11", location: "Mirissa", description: "Boat ride at dawn in search of Dolphins." },
      { day: "Day 12-13", location: "Hikkaduwa", description: "Surfing, Snorkelling, Kayaking." },
      { day: "Day 14-15", location: "Colombo", description: "City exploration and departure." }
    ]
  }
];
