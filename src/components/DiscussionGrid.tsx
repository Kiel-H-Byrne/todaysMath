import {
  Grid,
  Typography,
  LinearProgress,
  Input,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../styles/theme"
import { DocumentData } from "firebase/firestore"

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
export function DiscussionGrid({
  comments,
  handleSubmit,
  handleChange,
}: {
  comments: DocumentData
  handleSubmit: (event: any) => void
  handleChange: (event: any) => void
}) {
  const classes = useStyles()
  return (
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
          <Button variant="contained" fullWidth color="primary" type="submit">
            Post
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={7}>
        {!comments && <LinearProgress />}
        {comments.length == 0 ? (
          <Typography variant="h5" align="center" gutterBottom>
            "No Comments Today"
          </Typography>
        ) : (
          <Typography variant="h5" align="center" gutterBottom>
            Comments:
          </Typography>
        )}
        {Object.values(comments).map(({ uuid, message }, i) => (
          <div key={`${uuid}-${i}`} className={classes.comments}>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={2} md={1}>
                <img
                  src={`https://adorable-avatars.broken.services/40/${uuid}.pngCopy`}
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
        ))}
      </Grid>
    </Grid>
  )
}
