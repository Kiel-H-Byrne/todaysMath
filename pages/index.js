import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

const CHARMAP = {
  A: { value: 1, meaning: "Allah" },
  J: { value: 1, meaning: "" },
  S: { value: 1, meaning: "Supreme / Sovereign" },
  B: { value: 2, meaning: "" },
  K: { value: 2, meaning: "" },
  T: { value: 2, meaning: "Truth / Square" },
  C: { value: 3, meaning: "Cee" },
  L: { value: 3, meaning: "" },
  U: { value: 3, meaning: "" },
  D: { value: 4, meaning: "" },
  M: { value: 4, meaning: "" },
  V: { value: 4, meaning: "" },
  E: { value: 5, meaning: "" },
  N: { value: 5, meaning: "" },
  W: { value: 5, meaning: "" },
  F: { value: 6, meaning: "" },
  O: { value: 6, meaning: "Cypher" },
  X: { value: 6, meaning: "" },
  G: { value: 7, meaning: "" },
  P: { value: 7, meaning: "" },
  Y: { value: 7, meaning: "" },
  H: { value: 8, meaning: "" },
  Q: { value: 8, meaning: "" },
  Z: { value: 8, meaning: "Zig-Zag-Zig" },
  I: { value: 9, meaning: "" },
  R: { value: 9, meaning: "Ruler" }
};

const NUMMAP = {
  1: { meaning: "" },
  2: { meaning: "" }
};

const Home = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   async function getDate() {
  //     const res = await fetch('/api/date');
  //     const newDate = await res.json();
  //     setDate(newDate);
  //   }
  //   getDate();
  // }, []);

  const handleChange = event => {
    let wordScore = Array.from(event.target.value).reduce(
      (nameScore, element) => {
        let curValue = CHARMAP[element];
        return nameScore + curValue;
      },
      0
    );
    console.log(wordScore);
    setCount(count);

    let finalScore = Array.from(String(wordScore), Number).reduce(
      (score, element) => {
        return score > 10 ? score + element : score;
      }
    );
    setName(event.target.value);
    console.log(name);
  };

  //add dictionary for numbers

  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div>
        <input type="text" onChange={handleChange}></input>
        <h4>
          {name}: {count}
        </h4>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home;
