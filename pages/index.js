import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { format } from "date-fns";

const CHAR_MAP = {
  A: { value: 1, meaning: "Allah" },
  J: { value: 1, meaning: "Justice" },
  S: { value: 1, meaning: "Self / Savior / Sovereign" },
  B: { value: 2, meaning: "Be / Born" },
  K: { value: 2, meaning: "King / Kingdom" },
  T: { value: 2, meaning: "Truth / Square" },
  C: { value: 3, meaning: "Cee" },
  L: { value: 3, meaning: "Love Hell / Right" },
  U: { value: 3, meaning: "You / Universe / U-N-I-Verse" },
  D: { value: 4, meaning: "Divine" },
  M: { value: 4, meaning: "Master" },
  V: { value: 4, meaning: "Victory" },
  E: { value: 5, meaning: "Equality" },
  N: { value: 5, meaning: "In / Now / Nation" },
  W: { value: 5, meaning: "Wisom (Woman)" },
  F: { value: 6, meaning: "Father" },
  O: { value: 6, meaning: "Cipher" },
  X: { value: 6, meaning: "Unknown" },
  G: { value: 7, meaning: "God" },
  P: { value: 7, meaning: "Power" },
  Y: { value: 7, meaning: "Why" },
  H: { value: 8, meaning: "He / Her" },
  Q: { value: 8, meaning: "Queen" },
  Z: { value: 8, meaning: "Zig-Zag-Zig" },
  I: { value: 9, meaning: "I / Islam" },
  R: { value: 9, meaning: "Rule / Ruler" }
};

const NUM_MAP = {
  1: { meaning: "Knowledge" },
  2: { meaning: "Wisdom" },
  3: { meaning: "Understanding" },
  4: { meaning: "Culture / Freedom" },
  5: { meaning: "Power / Refinement" },
  6: { meaning: "Equality" },
  7: { meaning: "God" },
  8: { meaning: "Build/Destroy" },
  9: { meaning: "Born" },
  0: { meaning: "Cipher" }
};

const getDays = (date = new Date()) => {
  let days = date
    .getDate()
    .toString()
    .split("");
  return days;
};

const Home = () => {
  const [name, setName] = useState(""); //user name from input
  const [days, setDays] = useState([]); //array of date/day value
  const [count, setCount] = useState(0); //the end value of adding date values.
  const [score, setScore] = useState(0); //the end value of adding name values.

  useEffect(() => {
    setDays(getDays());
    if (getDays().length > 1) {
      let sum = parseInt(getDays()[0]) + parseInt(getDays()[1]);
      setCount(sum);
    }
  }, []);

  const reduceName = word => {
    let value = Array.from(word).reduce((nameScore, element) => {
      let curValue = CHAR_MAP[element];
      return nameScore + curValue;
    }, 0);
    return value;
  };

  const handleChange = event => {
    let value = reduceName(event.target.value);
    console.log(value);
    setScore(score);

    setName(reduceName(event.target.value));
    console.log(count);
  };

  //add dictionary for numbers

  let thisDate = new Date();
  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div>
        <h1>Today's Date is: {format(thisDate, "EEEE, MMMM 'the' do")} </h1>
        <h2> Making today's Math:</h2>
        {days.map((day, idx) => (
          <h3 key={idx}>{NUM_MAP[day].meaning}</h3>
        ))}
        {count > 0 ? (
          <>
            <h2>All being born to:</h2>
            <h3>{NUM_MAP[count]}</h3>
          </>
        ) : null}
        <input type="text" onChange={handleChange}></input>
        <h4>
          {name}: {score}
        </h4>
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default Home;
