import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const locationInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      location: enteredLocation,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.form}>
          <label htmlFor="title">Meetup Title:</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.form}>
          <label htmlFor="image">Meetup Image:</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.form}>
          <label htmlFor="location">Meetup Location:</label>
          <input type="text" required id="location" ref={locationInputRef} />
        </div>
        <div className={classes.form}>
          <label htmlFor="description">Descriptionn:</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
