import MeetupItem from "./MeetupItem";
import "../meetups/MeetupList.css";

function MeetupList(props) {
  return (
    <ul className="meet-list">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          location={meetup.location}
          description={meetup.description}
          date={meetup.date}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
