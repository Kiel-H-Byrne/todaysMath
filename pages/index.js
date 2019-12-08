import React, { useEffect, useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  LinearProgress,
  Input,
  Button
} from "@material-ui/core";
import { format } from "date-fns";
import ReactGA from "react-ga";

import Nav from "./../components/nav";

ReactGA.initialize("UA-12892693-12");
if (process.browser) {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
    .getDate()
    .toString()
    .split("");
  return days;
};

const useStyles = makeStyles({
  root: {
    // background:
    //   "linear-gradient(rgba(240, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('img/handEarth.jpg')",
    height: "100%"
  },
  date: { color: "#FE6B8B", fontWeight: "bolder" },
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
  input: {
    fontSize: "24px",
    fontFamily: "cursive, fantasy, oblique"
  },
  footer: {
    position: "relative",
    bottom: 0
  }
});

const Home = () => {
  // const [name, setName] = useState(""); //user name from input
  // const [score, setScore] = useState(0); //the end value of adding name values.
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);
  const classes = useStyles();

  const today = new Date();
  const dateArray = getDays(today); //date split into array of two numbers
  let dateSum = dateArray.reduce((a, b) => parseInt(a) + parseInt(b), 0); // sum of dateArray elements
  let sumArray = dateSum > 9 ? Array.from(dateSum.toString()) : null; //dateSum split into array of two numbers
  let sumSum = sumArray // sum of sumArray elements
    ? sumArray.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    : null;

  // console.log(...[today, dateArray, dateSum, sumArray, sumSum]);

  // console.log(dateSum);
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
    event.preventDefault();
    setCurrentComment(event.target.value);
  };

  const handleChange2 = event => {
    setName(event.target.value);
    let value = reduceName(event.target.value);
    setScore(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let uid = new Date().getMilliseconds();
    {
      comments[uid] = currentComment;
    }
    setComments(comments);
    setCurrentComment("");
  };

  return (
    <div className={classes.root}>
      <Nav />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-between"
        className="test2"
      >
        <Grid
          item
          container
          direction="row"
          style={{ margin: "1rem auto", padding: "1rem 3rem" }}
        >
          <Typography className={classes.sentence}>
            Today's Date is{" "}
            <span className={classes.date}>
              {format(today, "EEEE, MMMM 'the' do")}
            </span>
            ,
          </Typography>
          <Typography className={classes.sentence}>
            making today's Math{" "}
          </Typography>
          {dateArray.map((day, idx) => (
            <Typography key={idx} className={classes.meaning} display="inline">
              {NUM_MAP[day].meaning}
            </Typography>
          ))}
          <span className={classes.sentence}>&mdash;</span>
          {dateSum < 10 ? (
            <React.Fragment>
              <Typography className={classes.sentence} display="inline">
                all being born to{" "}
              </Typography>
              <Typography className={classes.meaning} display="inline">
                {NUM_MAP[dateSum].meaning}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography className={classes.sentence} display="inline">
                all being born to{" "}
              </Typography>
              {sumArray.map((day, idx) => (
                <Typography
                  key={idx}
                  className={classes.meaning}
                  display="inline"
                >
                  {NUM_MAP[day].meaning}
                </Typography>
              ))}
              <span className={classes.sentence}>&mdash;</span>
              <Typography className={classes.sentence} display="inline">
                all being born to{" "}
              </Typography>
              <Typography className={classes.meaning} display="inline">
                {NUM_MAP[sumSum].meaning}
              </Typography>
            </React.Fragment>
          )}
        </Grid>

        <Grid
          item
          container
          direction="row-reverse"
          style={{ margin: "1em auto", padding: "1rem" }}
        >
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" align="center">
              Comments:
              {comments.map(comment => (
                <li>{comment}</li>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h5" align="center">
              Discussion:
            </Typography>
            <form onSubmit={handleSubmit}>
              <Input
                multiline
                fullWidth
                rows={7}
                className={classes.input}
                onChange={handleChange}
              ></Input>
              <Button variant="text" fullWidth color="secondary" type="submit">
                Post
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
