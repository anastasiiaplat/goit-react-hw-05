import { getImg } from "../../services/getImg";


const ActorCard = ({ actor }) => {
  return (
    <div>
      <div>
        <p>{actor.name}</p>
        <p>
          Character:{" "}
          <span>
            <i>
              <b>{actor.character || "Character"}</b>
            </i>
          </span>
        </p>
      </div>
      <div>
        <img
          src={getImg(actor.profile_path)}
          width="120"
          alt={actor.name}
        />
      </div>
    </div>
  );
};

export default ActorCard;