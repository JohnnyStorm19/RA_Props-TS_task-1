import { TStars } from "../../models";
import { Star } from "../Star/Star";

export function Stars({ count }: TStars) {
  if (!Number.isInteger(count) || count < 1 || count > 5) {
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
}
