import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter((prev) => ++prev)}>+</button>
    </>
  );
};

export default Home;
