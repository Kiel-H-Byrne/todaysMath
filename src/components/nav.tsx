import React from "react"
import Link from "next/link"
import { GridList, Grid, Button, Toolbar, AppBar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import theme from "../styles/theme"

const links = [
  {
    href: "https://en.wikipedia.org/wiki/Five-Percent_Nation",
    label: "NGE \n Information",
    key: "",
  },
  {
    href:
      "https://genius.com/Nation-of-gods-and-earths-supreme-mathematics-annotated",
    label: "Supreme Math \n Information",
    key: "",
  },
  // {
  //   href: "https://linkedin.com/in/kielbyrne",
  //   label: "About Me"
  // }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const useStyles = makeStyles({
  root: {
    background: theme.palette.grey[50],
    //   "linear-gradient(rgba(240, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('img/handEarth.jpg')",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
      padding: ".1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      padding: ".3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
      padding: ".4rem",
    },
  },
  link: {
    color: "#067df7",
    textDecoration: "none",
    whiteSpace: "pre",
  },
  avatar: {
    margin: "3px 13px 3px 3px",
    [theme.breakpoints.down("sm")]: {
      margin: "3px",
    },
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  },
})

const Nav = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default" className={classes.root}>
      <Toolbar disableGutters>
        <Grid container direction="row">
          <Grid item>
            <Link href="/">
              <a>
                <img
                  height="53px"
                  width="53px"
                  src="https://i.pinimg.com/originals/76/55/0c/76550cdb7a2de95138746d536e99c7ae.png"
                  alt="Nation of Gods &amp; Earths"
                  title="Nation of Gods &amp; Earths"
                  className={classes.avatar}
                />
              </a>
            </Link>
          </Grid>
          {links.map(({ key, href, label }) => (
            <Grid item key={key}>
              <Link href={href}>
                <a target="_blank" rel="noopener" className={classes.link}>
                  <Button
                    variant="text"
                    color="secondary"
                    className={classes.button}
                  >
                    {label}
                  </Button>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
