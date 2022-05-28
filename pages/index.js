import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  LinearProgress,
  Input,
  Button,
} from "@material-ui/core"

import Nav from "../src/components/nav"

import { postsUpdate, postsFetch } from "../src/db/fsdb"
import { NUM_MAP } from "../src/_CONSTANTS"
import { getDays, reduceWord } from "../src/_FUNCTIONS"
import theme from "../src/styles/theme"
import { nanoid } from "nanoid"

const useStyles = makeStyles({
  root: {
    // background:
    //   "linear-gradient(rgba(240, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('img/handEarth.jpg')",
    height: "100%",
    position: "relative",
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  },
  date: { color: "#FE6B8B", fontWeight: "bolder" },
  dateNumber: { color: theme.palette.action.default },
  theMath: {
    backgroundColor: theme.palette.background.paper,
    position: "sticky",
    top: 0,
    margin: "1rem auto 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
      padding: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      padding: "1rem 3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
      padding: "1rem 3rem",
    },
  },
  sentence: { display: "inline", fontSize: "inherit", lineHeight: "1.8em" },
  meaning: {
    fontSize: "1.1em",
    display: "inline",
    margin: "0 .333em",
    padding: "0 .333em",
    fontWeight: "bolder",
    display: "inline",
    textShadow: `.3em .3em .2em ${theme.palette.primary.light}`,
  },
  input: {
    fontSize: "24px",
    fontFamily: "Just Another Hand, cursive",
  },
  avatar: {
    margin: "auto",
    borderRadius: "33%",
  },
  discussion: { padding: "1rem" },
  form: { background: "rgba(212, 175, 55, .1)", borderRadius: "3%" },
  comments: {
    fontFamily: "Cormorant Garamond, serif",
    lineHeight: "1em",
    fontSize: "1.2em",
  },
  footer: {
    position: "relative",
    bottom: 0,
  },
})

const Home = () => {
  // const [name, setName] = useState(""); //user name from input
  // const [score, setScore] = useState(0); //the end value of adding name values.
  const [currentComment, setCurrentComment] = useState("")
  const [comments, setComments] = useState([])
  const classes = useStyles()

  useEffect(() => {
    getPosts()
  }, [])

  const today = new Date()
  const todayString = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }) //'Saturday, May 28'
  const dateArray = getDays(today) //date split into array
  let dateSum = dateArray.reduce((a, b) => parseInt(a) + parseInt(b), 0) // sum of dateArray elements
  let sumArray = dateSum > 9 ? Array.from(dateSum.toString()) : null //dateSum split into array of two numbers
  let sumSum = sumArray // sum of sumArray elements
    ? sumArray.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    : null
  // console.log({ today, dateArray, dateSum, sumArray, sumSum });
  // today's date is a number.
  // if the number is greater than 9 (or has two digits), add those numbers up.
  // if the result is greater than 9, do it again. until 1 number is produced.
  // i want date, then result(s)

  // console.log(dateSum);
  // dateSum > 9
  //   ? dateSum.toString.split("").reduce((a, b) => a + b, 0)
  //   : dateSum;

  const getPosts = async () => {
    const response = await postsFetch(`${today.getDate()}`)
    if (response) {
      setComments(response)
    } else {
      setComments([])
    }
  }
  const writePost = async (message) => {
    let data = {}
    let uuid = nanoid()
    if (window.localStorage && window.localStorage.getItem("KBTM_UID")) {
      uuid = window.localStorage.getItem("KBTM_UID")
    } else {
      window.localStorage.setItem("KBBTM_UID", uuid)
    }
    window.localStorage && !window.localStorage.getItem("")
    let date = new Date()
    let duid = `${date.getDate()}`
    let puid = new Date().getMilliseconds()
    let post = {}
    post[puid] = message
    data = { uuid, message }
    let refId = await postsUpdate(duid, data)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setCurrentComment(event.target.value)
  }

  const handleChange2 = (event) => {
    setName(event.target.value)
    let value = reduceWord(event.target.value)
    setScore(value)
  }

  const handleSubmit = (event) => {
                                    event.preventDefault()
                                    writePost(currentComment)
                                    setCurrentComment("")
                                    getPosts()
                                    // PostsRef.set({ uid, today, comment: comments });
                                  }

  return (
    <div className={classes.root}>
      <Nav />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-between"
      >
        <Grid
          item
          container
          direction="row"
          className={classes.theMath}
          alignItems="center"
        >
          <Typography className={classes.sentence}>
            Today's Date is&nbsp;
            <span className={classes.date}>
              {`${todayString.match(/\w*[^\d]/g).join("")}the `}
              <span className={classes.dateNumber}>
                {todayString.match(/\d+/g)}
              </span>
            </span>
            ,&nbsp;
          </Typography>
          <Typography className={classes.sentence}>
            making today's Math:&nbsp;
          </Typography>
          {dateArray.map((day, idx) => (
            <Typography key={idx} className={classes.meaning} display="inline">
              {NUM_MAP[day].meaning}
            </Typography>
          ))}

          {// DATE HAS TWO DIGITS? ADD THEM AND SHOW COMPONENT
          dateSum < 10 && dateArray.length > 1 ? (
            <React.Fragment>
              <span className={classes.sentence}>&mdash;</span>
              <Typography className={classes.sentence} display="inline">
                all being born to&nbsp;
              </Typography>
              <Typography className={classes.meaning} display="inline">
                {NUM_MAP[dateSum].meaning}
              </Typography>
            </React.Fragment>
          ) : null}

          {// DATE HAS TWO DIGITS? ADD THEM AND SHOW COMPONENT
          sumArray ? (
            <React.Fragment>
              <Typography className={classes.sentence} display="inline">
                all being born to&nbsp;
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
                all being born to&nbsp;
              </Typography>
              <Typography className={classes.meaning} display="inline">
                {NUM_MAP[sumSum].meaning}
              </Typography>
            </React.Fragment>
          ) : null}
        </Grid>

        <Grid
          item
          container
          direction="row"
          className={classes.discussion}
          spacing={2}
        >
          <Grid item xs={12} sm={5}>
            <Typography variant="h5" align="center" gutterBottom>
              Discussion:
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
              <Input
                multiline
                fullWidth
                rows={3}
                className={classes.input}
                onChange={handleChange}
              ></Input>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
              >
                Post
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" align="center" gutterBottom>
              Comments:
            </Typography>
            {comments ? (
              Object.values(comments).map(({ uuid, message }, i) => (
                <div key={`${uuid}-${i}`} className={classes.comments}>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs={2} md={1}>
                      <img
                        src={`https://api.adorable.io/avatars/40/${uuid}.pngCopy`}
                        className={classes.avatar}
                        height="43px"
                        width="43px"
                      />
                    </Grid>
                    <Grid item xs={10} md={11}>
                      <span>{message}</span>
                    </Grid>
                  </Grid>
                </div>
              ))
            ) : (
              <LinearProgress />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;
