import { useEffect, useState } from "react";
//import constants from "../utils";
const {
  MOZARRELA,
  CHEDDAR,
  PARMESAN,
  CABERNET,
  CHARDONAY,
  MERLOT
} = constants;

export default function ParentComponent() {
  const [ cheeseType, setCheeseType ] = useState("");
  const [ wine, setWine ] = useState("");
  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case MOZARRELA:
        return setWine(CABERNET);
      case CHEDDAR:
        return setWine(CHARDONAY);
      case PARMESAN:
        return setWine(MERLOT);
      default:
      CHARDONAY;
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      whichWineGoesBest();
    }
    return () => (mounted = false);
  }, [cheeseType]);

  return (
    <div
      className="flex flex-col justify-center items-center"
    >
      <h3
        className="text-center dark:text-gray-400 mt-10"
      >
        Without React.memo() or useMemo()
      </h3>
      <h1>
        Select a cheese and we will tell you which wine goes best!
      </h1>
      <div>
        <Button/>
        <Button/>
        <Button/>
      </div>
      {cheeseType && (
        <p>
          For {cheeseType}, <span>{wine}</span>{" "}goes best.
        </p>
      )}
    </div>
  )
}