import "bulma/css/bulma.css";
function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div className="mt-0.75rem">
        <div className="content"></div>
        <div className="content">
          <p className="title is-20"></p>
          <div>
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
          {description}
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
