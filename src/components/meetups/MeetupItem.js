import Card from "../ui/Card";
import "../ui/Card.css";

function MeetupItem(props) {
  return (
    <li>
      <Card>
        <div>
          <img className="card-image" src={props.image} alt={props.title} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{props.title}</h3>
          <span>{props.date}</span>
          <address>{props.location}</address>
          <p className="card-description">{props.description}</p>
        </div>
        <div>
          <button>To favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
