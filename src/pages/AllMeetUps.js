import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_Data = [
  {
    id: "1",
    title: "React Meetup",
    description: "Join us for a meetup focused on React.js development.",
    location: "New York",
    date: "2022-10-01",
    image: "https://example.com/react-meetup.jpg",
  },
  {
    id: "2",
    title: "Advanced React Workshop",
    description:
      "A hands-on workshop to dive deep into advanced React concepts.",
    location: "San Francisco",
    date: "2022-11-15",
    image: "https://example.com/react-workshop.jpg",
  },
  {
    id: "3",
    title: "React Conference 2023",
    description:
      "The largest conference dedicated to React.js and its ecosystem.",
    location: "London",
    date: "2023-03-25",
    image: "https://example.com/react-conference.jpg",
  },
];

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-demo-1b015-default-rtdb.firebaseio.com/meetups.json/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All MeetUps page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUps;
