import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const useStyles = makeStyles((theme) => ({
  themeToggle: {
    color: theme.palette.secondary.dark,
    transition: "all 0.3s ease-in-out",
    margin: theme.spacing(0, 1),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      transform: "rotate(30deg)",
    },
  },
  icon: {
    fontSize: "1.5rem",
  },
}));

const ThemeToggle: React.FC = () => {
  const classes = useStyles();
  const { mode, toggleTheme } = useTheme();

  return (
    <Tooltip
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      arrow
    >
      <IconButton
        className={classes.themeToggle}
        onClick={toggleTheme}
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        {mode === "dark" ? (
          <FiSun color={classes.themeToggle} />
        ) : (
          <FiMoon color={classes.themeToggle} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
