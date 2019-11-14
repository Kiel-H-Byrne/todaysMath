import React, { useEffect, useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, LinearProgress } from "@material-ui/core";

import Head from "../components/head";
import Nav from "../components/nav";
import { format } from "date-fns";

const CHAR_MAP = {
  A: { value: 1, meaning: "Allah" },
  J: { value: 1, meaning: "Justice" },
  S: { value: 1, meaning: "Self/Savior/Sovereign" },
  B: { value: 2, meaning: "Be/Born" },
  K: { value: 2, meaning: "King/Kingdom" },
  T: { value: 2, meaning: "Truth/Square" },
  C: { value: 3, meaning: "Cee" },
  L: { value: 3, meaning: "Love Hell/Right" },
  U: { value: 3, meaning: "You/Universe/U-N-I-Verse" },
  D: { value: 4, meaning: "Divine" },
  M: { value: 4, meaning: "Master" },
  V: { value: 4, meaning: "Victory" },
  E: { value: 5, meaning: "Equality" },
  N: { value: 5, meaning: "In/Now/Nation" },
  W: { value: 5, meaning: "Wisom (Woman)" },
  F: { value: 6, meaning: "Father" },
  O: { value: 6, meaning: "Cipher" },
  X: { value: 6, meaning: "Unknown" },
  G: { value: 7, meaning: "God" },
  P: { value: 7, meaning: "Power" },
  Y: { value: 7, meaning: "Why" },
  H: { value: 8, meaning: "He/Her" },
  Q: { value: 8, meaning: "Queen" },
  Z: { value: 8, meaning: "Zig-Zag-Zig" },
  I: { value: 9, meaning: "I/Islam" },
  R: { value: 9, meaning: "Rule/Ruler" }
};

const NUM_MAP = {
  1: { meaning: "Knowledge" },
  2: { meaning: "Wisdom" },
  3: { meaning: "Understanding" },
  4: { meaning: "Culture/Freedom" },
  5: { meaning: "Power/Refinement" },
  6: { meaning: "Equality" },
  7: { meaning: "God" },
  8: { meaning: "Build/Destroy" },
  9: { meaning: "Born" },
  0: { meaning: "Cipher" }
};

const getDays = date => {
  let days = date
    .getUTCDate()
    .toString()
    .split("");
  return days;
};

const useStyles = makeStyles({
  root: {
    // background:
    //   "linear-gradient(rgba(240, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('img/handEarth.jpg')"
  },
  date: { color: "#FE6B8B" },
  sentence: { display: "inline", fontSize: "3rem" },
  meaning: {
    display: "inline",
    margin: "0 .333rem",
    padding: "0 .333rem",
    fontWeight: "bolder",
    display: "inline",
    fontSize: "3.33rem",
    boxShadow: "0 .3rem .5rem .3rem rgba(212, 175, 55, .3)"
  },
  footer: {
    position: "relative",
    bottom: 0
  }
});

const Home = () => {
  // const [name, setName] = useState(""); //user name from input
  // const [score, setScore] = useState(0); //the end value of adding name values.

  const classes = useStyles();

  const today = new Date();
  const dateArray = getDays(today);
  let dateSum = dateArray.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  console.log(dateSum);
  // dateSum > 9
  //   ? dateSum.toString.split("").reduce((a, b) => a + b, 0)
  //   : dateSum;

  const reduceName = word => {
    let value = Array.from(word).reduce((nameScore, element) => {
      let curValue = CHAR_MAP[element];
      return nameScore + curValue;
    }, 0);
    return value;
  };

  const handleChange = event => {
    setName(event.target.value);
    let value = reduceName(event.target.value);
    setScore(value);
  };

  return (
    <Container className={classes.root}>
      <Head title="The Supreme Calendar" />

      <Nav />

      <Grid container direction="column" className="">
        <Grid item container direction="row">
          <Typography className={classes.sentence}>
            Today's Date is
            <span className={classes.date}>
              {format(today, "EEEE, MMMM 'the' do")}
            </span>
            ,
          </Typography>
          <Typography className={classes.sentence}>
            making today's Math
          </Typography>
          {dateArray.map((day, idx) => (
            <Typography key={idx} className={classes.meaning} display="inline">
              {NUM_MAP[day].meaning}
            </Typography>
          ))}
          {dateSum < 10 ? (
            <>
              <Typography className={classes.sentence} display="inline">
                all being born to
              </Typography>
              <Typography className={classes.meaning} display="inline">
                {NUM_MAP[dateSum].meaning}
              </Typography>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
