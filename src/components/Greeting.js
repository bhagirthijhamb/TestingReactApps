import { useState } from "react";
import Output from "./Output";
import Async from "./Async";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {/* <p>It's good to see you</p> */}
      {/* {!changedText && <p>It's good to see you</p>} */}
      {!changedText && <Output>It's good to see you</Output>}
      {/* {changedText && <p>Changed!</p>} */}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
      <Async />
    </div>
  );
};

export default Greeting;
