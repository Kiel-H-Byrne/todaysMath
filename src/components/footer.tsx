import { Link, makeStyles, Paper, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = makeStyles((theme) => ({
    footer: {
      borderRadius: "8px 0 0 0",
      backgroundColor: theme.palette.background.default,
      borderTop: `1px solid ${theme.palette.primary.main}`,
      position: "fixed",
      bottom: 0,
      right: 0,
      zIndex: 10,
      transition: "all 0.3s ease-in-out",
      boxShadow: "0px -2px 10px rgba(210, 210, 210, 0.20)",
      "&:hover": {
        boxShadow: "0px -4px 15px rgba(255, 217, 0, 0.20)",
      },
      padding: theme.spacing(0.5),
      justifyContent: "space-between",
      display: "flex",
    },

    link: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      fontWeight: 500,
      transition: "color 0.2s ease-in-out",
      "&:hover": {
        textDecoration: "none",
      },
    },
    text: {
      color: theme.palette.text.primary,
    },
  }));
  const currentYear = new Date().getFullYear();

  return (
    <Paper className={classes.footer} component="footer" elevation={2}>
      <Typography component="span" variant="caption" className={classes.text}>
        Built by{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://tenksolutions.com"
          color="primary"
          className={classes.link}
          aria-label="TenK Solutions website"
        >
          TenK Solutions, LLC
        </Link>{" "}
        © {currentYear} All Rights Reserved |{" "}
        <Link
          href="/tech-stack"
          color="primary"
          className={classes.link}
          // aria-label="Learn how we made this site"
        >
          How We Made this Site
        </Link>
      </Typography>
    </Paper>
  );
};

export default Footer;
