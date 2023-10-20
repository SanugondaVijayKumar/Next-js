import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    address: "Some Address 5,12345 SomeCity",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    address: "Some Address 10,12345 SomeCity",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
