import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography
} from "@material-ui/core";
import { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <Container style={{ paddingBlock: 24 }}>
        <Card
          elevation={3}
        >
          <CardContent>
            <Typography variant="h2">About Supreme Mathematics</Typography>
            <Typography variant="body1" component={"p"} gutterBottom>
              Listen to Lord Jamar explain the meaning and significance of
              Supreme Mathematics.
            </Typography>
            <CardMedia
              height="500"
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              component={"iframe"}
              src="https://www.youtube-nocookie.com/embed/e1PrAOtxDBc?start=321&amp;end=1320;rel=0&amp;showinfo=0"
            ></CardMedia>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
