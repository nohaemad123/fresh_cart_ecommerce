import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStarHalfStroke,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductRating({ rating }) {
  function getStarIcon(position) {
    if (rating > position) {
      return solidStar;
    } else if (rating > position - 0.5) {
      return faStarHalfStroke;
    } else {
      return regularStar;
    }
  }
  return (
    <>
      <div className="stars text-yellow-300">
        {[1, 2, 3, 4, 5].map((position) => (
          <FontAwesomeIcon key={position} icon={getStarIcon(position)} />
        ))}
      </div>
    </>
  );
}
