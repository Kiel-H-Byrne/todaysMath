import { Container, Link, Paper, Typography } from "@material-ui/core";

const footer = () => {
  return (
    <Paper
      style={{
        borderRadius: "8px 0 0 0",
        textAlign: "right",
        backgroundColor: "black",
        marginTop: "calc(10% + 60px)",
        position: "fixed",
        padding: 4,
        bottom: 0,
        right: 0
        // width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="xl" >
        <Typography component="span" variant="caption">Built by {" "}
        <Link
          target="_blank"
          rel="noopener"
          variant="caption"
          href="https://tenksolutions.com"
          color="primary"
        >
          TenK Solutions, LLC{" "}
        </Link>
         © 2023 All Rights Reserved | {" "}
        <Link href="/tech-stack" color="primary">
          How We Made this Site
        </Link>
        </Typography>
      </Container>
    </Paper>
  );
};

export default footer;
