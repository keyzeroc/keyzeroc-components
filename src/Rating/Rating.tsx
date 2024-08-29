import { cloneElement } from "react";

interface RatingProps {
  value: number;
  maxValue?: number;
  onChange: (newValue: number) => void;
  icon: React.ReactElement;
  fillColor?: string;
  step?: number; // TODO: write implementation
}

/**
 * @param value (required) Number - initial value of the rating
 * @param maxValue (optional) Number - max value of the rating, default - 5
 * @param onChange (required) Function - to be called when rating changes
 * @param fillColor (optional) - String - hex color to fill the icon with, default - #fcba03
 * @param icon (required) - ReactElement - any icon could be provided but it needs to have a fill attribute, otherwise the colored fill won't work
 * @param step (optional) - Number of step f.e. 0.1, default - 1
 * @returns JSX.Element
 */
export default function Rating({
  value,
  maxValue = 5,
  onChange,
  fillColor = "#fcba03",
  icon,
}: // step = 1,
RatingProps) {
  const icons = new Array(maxValue).fill(icon);
  const filledIcon = cloneElement(icon, { fill: fillColor }, null);

  const onIconClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newValue: number
  ) => {
    // TODO: write implementation for a step
    const { offsetX } = event.nativeEvent;
    const { width } = event.currentTarget.getBoundingClientRect();
    console.log({ offsetX, width });
    onChange(newValue);
  };

  return (
    <div>
      <div className="flex gap-1">
        {icons.map((icon, index) => (
          <button
            key={"icon:" + index}
            className="hover:scale-110"
            // onClick={() => onChange(index + 1)}
            onClick={(e) => onIconClick(e, index + 1)}
          >
            {index + 1 <= value ? filledIcon : icon}
          </button>
        ))}
      </div>
    </div>
  );
}
