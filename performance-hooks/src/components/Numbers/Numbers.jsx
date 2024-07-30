import { memo } from "react";

//QUESTION:- Memoized callback function
const Numbers = memo(({ nums, addRandom }) => {
  console.log("Numbers rendered");

  return (
    <>
      <ul>
        {nums.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
      <button
        onClick={addRandom}
      >
        Add random
      </button>
    </>
  )
});

export default Numbers;