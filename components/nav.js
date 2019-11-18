import React from "react";
import Link from "next/link";
import { Button, Toolbar, AppBar } from "@material-ui/core";
const links = [
  {
    href: "https://en.wikipedia.org/wiki/Five-Percent_Nation",
    label: "NGE Info"
  },
  {
    href:
      "https://genius.com/Nation-of-gods-and-earths-supreme-mathematics-annotated",
    label: "Genius"
  },
  {
    href: "https://kielbyrne.com",
    label: "About"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <li>
        <Link href="/">
          <a>
            <Button variant="text">Home</Button>
          </a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <Link key={key} href={href}>
          <a target="_blank">
            <Button variant="text" color="primary">
              {label}
            </Button>
          </a>
        </Link>
      ))}

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
          // background: rgba(240, 0, 0, 0.1);
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </Toolbar>
  </AppBar>
);

export default Nav;
