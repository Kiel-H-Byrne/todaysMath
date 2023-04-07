import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Typography,
  LinearProgress,
  Input,
  Button,
} from "@material-ui/core"

import Nav from "../src/components/nav"

import { Post, postCreate, postsFetch } from "../src/db/fsdb"
import { NUM_MAP, SINGLE_DIGITS } from "../src/_CONSTANTZ"
import { getDays, nth } from "../src/_FUNCTIONS"
import theme from "../src/styles/theme"
import { nanoid } from "nanoid"
import { DocumentData } from "firebase/firestore"
import { ChakraProvider } from "@chakra-ui/react"
import { DiscussionGrid } from "../src/components/DiscussionGrid"
import CommentsSection from "../src/components/DGrid"
import { useAuth } from "../src/db/auth"

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
  dateNumber: { color: theme.palette.action.active },
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
  const [currentComment, setCurrentComment] = React.useState("")
  const [comments, setComments] = React.useState([] as DocumentData)
  const classes = useStyles()

  React.useEffect(() => {
    getPosts()
  }, [])

  const today = new Date()
  const todayString = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }) //'Saturday, May 28'
  const dateArray = getDays(today) //date split into array
  let dateSum = (dateArray.reduce(
    (a, b) => a + b,
    0,
  ) as number) as SINGLE_DIGITS // sum of dateArray elements
  const isSingleDigitSum = dateSum < 10 && dateArray.length > 1
  let sumArray: SINGLE_DIGITS[] | null =
    dateSum > 9 ? Array.from(dateSum.toString()).map((s) => parseInt(s)) : null //dateSum split into array of two numbers
  let sumSum = sumArray // sum of sumArray elements
    ? ((sumArray.reduce((a, b) => a + b, 0) as number) as SINGLE_DIGITS)
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
  const writePost = async (message: string) => {
    let postData = {}
    const { user } = useAuth()
    let uuid = nanoid()
    console.log(user)
    if (window.localStorage && window.localStorage.getItem("KBTM_UID")) {
      uuid = window.localStorage.getItem("KBTM_UID")!
    } else {
      window.localStorage.setItem("KBBTM_UID", uuid)
    }
    window.localStorage && !window.localStorage.getItem("")
    let date = new Date()
    let duid = `${date.getDate()}`
    let puid = new Date().getMilliseconds()
    let post = {} as Post
    const msgData = { message, timestamp: new Date().getTime() }
    postData = { [uuid]: msgData }
    post[puid] = msgData
    // let refId = await postsUpdate(duid, data)
    let refId = await postCreate(postData)
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setCurrentComment(event.target.value)
  }

  // const handleChange2 = (event) => {
  //   setName(event.target.value)
  //   let value = reduceWord(event.target.value)
  //   setScore(value)
  // }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    writePost(currentComment)
    setCurrentComment("")
    getPosts()
    // PostsRef.set({ uid, today, comment: comments });
  }
  return (
    <div className={classes.root}>
      <ChakraProvider>
        <Nav />
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
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
                {`${todayString.match(/\w*[^\d]/g)?.join("")}the `}
                <span className={classes.dateNumber}>
                  {`${new Date().getDate()}${nth(new Date().getDate())}`}
                </span>
              </span>
              ,&nbsp;
            </Typography>
            <Typography className={classes.sentence}>
              making today's Math:&nbsp;
            </Typography>
            {dateArray.map((day, idx) => (
              <Typography
                key={idx}
                className={classes.meaning}
                display="inline"
              >
                {NUM_MAP[day].meaning} ({day})
              </Typography>
            ))}
            {// DATE HAS TWO DIGITS? ADD THEM AND SHOW COMPONENT
            isSingleDigitSum ? (
              <React.Fragment>
                <span className={classes.sentence}>&mdash;</span>
                <Typography className={classes.sentence} display="inline">
                  all being born to&nbsp;
                </Typography>
                <Typography className={classes.meaning} display="inline">
                  {NUM_MAP[dateSum].meaning} ({dateSum})
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
                    {NUM_MAP[day].meaning} ({day})
                  </Typography>
                ))}
                <span className={classes.sentence}>&mdash;</span>
                <Typography className={classes.sentence} display="inline">
                  all being born to&nbsp;
                </Typography>
                {sumSum && (
                  <Typography className={classes.meaning} display="inline">
                    {NUM_MAP[sumSum].meaning} ({sumSum})
                  </Typography>
                )}
              </React.Fragment>
            ) : null}
          </Grid>

          <DiscussionGrid
            comments={comments}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <CommentsSection
            currentComment={currentComment}
            comments={comments}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </ChakraProvider>
    </div>
  )
}

export default Home
