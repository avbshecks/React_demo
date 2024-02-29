import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUps() {
  // const navigation = useNavigation();
  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://react-demo-1b015-default-rtdb.firebaseio.com/meetups.json/",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetUps;
