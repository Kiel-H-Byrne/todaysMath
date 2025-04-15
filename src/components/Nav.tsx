import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Theme,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import React, { useState } from "react";
import IconWrapper from "./IconWrapper";

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
  {
    href: "/tech-stack",
    label: "Tech Stack",
    isExternal: false,
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "0 auto",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: `0 ${theme.spacing(2)}px`,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: "50%",
    transition: "transform 0.3s ease-in-out",
    margin: theme.spacing(0, 2, 0, 0),
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 40,
      margin: theme.spacing(0, 1, 0, 0),
    },
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    margin: theme.spacing(0, 1),
  },
  button: {
    borderRadius: 8,
    padding: theme.spacing(1, 2),
    fontWeight: 600,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.5, 1.5),
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  drawer: {
    width: 250,
  },
  drawerPaper: {
    width: 250,
    backgroundColor: theme.palette.background.default,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  closeButton: {
    color: theme.palette.background.default,
  },
  drawerItem: {
    margin: theme.spacing(1, 0),
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const renderMobileDrawer = () => (
    <Drawer
      className={classes.drawer}
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.drawerHeader}>
        <IconButton
          onClick={toggleDrawer(false)}
          className={classes.closeButton}
          aria-label="Close menu"
        >
          <IconWrapper name="FiX" />
        </IconButton>
      </Box>
      <List>
        <ListItem button component="a" href="/" onClick={toggleDrawer(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        {links.map(({ href, label, isExternal }) => (
          <ListItem
            button
            key={`drawer-${href}`}
            component="a"
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : ""}
            onClick={toggleDrawer(false)}
            className={classes.drawerItem}
          >
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoContainer}>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              style={{ color: "#000" }}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <IconWrapper name="FiMenu" />
            </IconButton>
          </Box>

          <Link href="/">
            <img
              src="https://i.pinimg.com/originals/76/55/0c/76550cdb7a2de95138746d536e99c7ae.png"
              alt="Nation of Gods & Earths"
              title="Nation of Gods & Earths"
              className={classes.logo}
            />
          </Link>
        </Box>

        <Box display={{ xs: "none", sm: "block" }} className={classes.navLinks}>
          {links.map(({ href, label, isExternal }) => (
            <Link
              key={`nav-link-${href}`}
              href={href}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
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
          ))}
        </Box>
      </Toolbar>
      {renderMobileDrawer()}
    </AppBar>
  );
};

export default Nav;
