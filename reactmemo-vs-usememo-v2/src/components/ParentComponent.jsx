import { useEffect, useState } from "react";
import { Button } from '@mui/material';
import {constants} from "../utils";
import Counts from "./Counts";

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
        return setWine(CHARDONAY);
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
    <div>
      <h3>
        Without React.memo() or useMemo()
      </h3>
      <h1>
        Select a cheese and we will tell you which wine goes best!
      </h1>
      <div>
        <Button
          onClick={() => setCheeseType(MOZARRELA)}
        >
          MOZARELLA
        </Button>
        <Button
          onClick={() => setCheeseType(CHEDDAR)}
        >
          CHEDDAR
        </Button>
        <Button
          onClick={() => setCheeseType(PARMESAN)}
        >
          Parmesan
        </Button>
      </div>
      {cheeseType && (
        <p>
          For {cheeseType}, <span>{wine}</span>{" "}goes best.
        </p>
      )}
      <Counts/>
    </div>
  )
}