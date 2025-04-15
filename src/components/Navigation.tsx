import { AppBar, Button, Grid, Toolbar, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  {
    href: "https://en.wikipedia.org/wiki/Five-Percent_Nation",
    label: "NGE Information",
    isExternal: true,
  },
  {
    href: "/about",
    label: "Supreme Math: Explained",
    isExternal: false,
  },
].map((link) => {
  return link;
});

const Navigation = () => {
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
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
      color:
        theme.palette.type === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.dark,
      textDecoration: "none",
      whiteSpace: "pre",
    },
    avatar: {
      margin: "3px 13px 3px 3px",
      [theme.breakpoints.down("sm")]: {
        margin: "3px",
      },
      borderRadius: "50%",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    button: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.1em",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.2rem",
      },
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
      },
    },
    themeToggleContainer: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
    },
  });

  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Toolbar disableGutters>
        <Grid container direction="row" spacing={1} alignItems="center">
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
          <Grid item className={classes.themeToggleContainer}>
            <ThemeToggle />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
