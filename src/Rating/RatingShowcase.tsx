import { Star, Box } from "lucide-react";
import Rating from "./Rating";
import { useState } from "react";
import ShowcaseCard from "../UI/ShowcaseCard";

export default function RatingShowcase() {
  const [ratingValue1, setRatingValue1] = useState(1);
  const [ratingValue2, setRatingValue2] = useState(6);
  const [ratingValue3, setRatingValue3] = useState(2);

  return (
    <div className="flex flex-col gap-8">
      <h3 className="font-bold text-3xl">Rating Element showscase page</h3>
      <ShowcaseCard>
        <p>Could have any color</p>
        <Rating
          fillColor="#4a89ff"
          maxValue={5}
          value={ratingValue1}
          onChange={setRatingValue1}
          icon={<Star />}
        />
      </ShowcaseCard>

      <ShowcaseCard>
        <p>Different max value</p>
        <Rating
          fillColor="#cc00fa"
          maxValue={10}
          value={ratingValue2}
          onChange={setRatingValue2}
          icon={<Star />}
        />
      </ShowcaseCard>

      <ShowcaseCard>
        <p>Different icon</p>
        <Rating
          fillColor="#cc00fa"
          maxValue={5}
          value={ratingValue3}
          onChange={setRatingValue3}
          icon={<Box />}
        />
      </ShowcaseCard>
    </div>
  );
}
