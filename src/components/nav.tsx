import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import theme from "../styles/theme";

const links = [
  {
    href: "https://en.wikipedia.org/wiki/Five-Percent_Nation",
    label: "NGE \n Information",
    isExternal: true
  },
  {
    href:
      "https://en.wikipedia.org/wiki/Nation_of_Gods_and_Earths#Supreme_Mathematics",
    label: "Supreme Math \n Information",
    isExternal: true
  },
  {
    href: "https://linkedin.com/in/kielbyrne",
    label: "About Me",
    isExternal: true
  },
  {
    href: "/tech-stack",
    label: "How We Made This Site",
    isExternal: false
  }
].map(link => {
  return link;
});

const useStyles = makeStyles({
  root: {
    // background:
    //   "linear-gradient(rgba(240, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('img/handEarth.jpg')",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
      padding: ".1rem"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      padding: ".3rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
      padding: ".4rem"
    }
  },
  link: {
    color: "#067df7",
    textDecoration: "none",
    whiteSpace: "pre"
  },
  avatar: {
    margin: "3px 13px 3px 3px",
    [theme.breakpoints.down("sm")]: {
      margin: "3px"
    }
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem"
    }
  }
});

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className={classes.root} >
      <Toolbar disableGutters>
        <Grid container direction="row" spacing={1}>
          <Grid item>
            <Link href="/">
              <img
                height="53px"
                width="53px"
                src="https://i.pinimg.com/originals/76/55/0c/76550cdb7a2de95138746d536e99c7ae.png"
                alt="Nation of Gods &amp; Earths"
                title="Nation of Gods &amp; Earths"
                className={classes.avatar}
              />
            </Link>
          </Grid>
          {links.map(({ href, label, isExternal }) => (
            <Grid item key={`nav-link-${href}-${label}`}>
              <Link
                href={href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener" : ""}
                className={classes.link}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                >
                  {label}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  )
};

export default Nav;
