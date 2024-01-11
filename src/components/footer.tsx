import { Container, Link, Paper, Typography } from "@material-ui/core";

const footer = () => {
  return (
    <Paper
      style={{
        backgroundColor: "black",
        marginTop: "calc(10% + 60px)",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="xl">
        <Typography component="span" variant="body2">Built by </Typography>
        <Link
          target="_blank"
          rel="noopener"
          href="https://tenksolutions.com"
          color="primary"
        >
          TenK Solutions, LLC
        </Link>
        <Typography component="span" variant="body2">{" "} © 2023 All Rights Reserved | {" "}</Typography>
        <Link href="/tech-stack" color="primary">
          How We Made this Site
        </Link>
      </Container>
    </Paper>
  );
};

export default footer;
