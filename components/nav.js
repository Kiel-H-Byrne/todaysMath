import React from "react";
import Link from "next/link";
import { Button, Toolbar, AppBar } from "@material-ui/core";
const links = [
  {
    href: "//en.wikipedia.org/wiki/Five-Percent_Nation",
    label: "NGE Information"
  },
  {
    href:
      "//genius.com/Nation-of-gods-and-earths-supreme-mathematics-annotated",
    label: "Supreme Math Information"
  },
  {
    href: "//linkedin.com/in/kielbyrne",
    label: "About Me"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Link href="/">
        <a>
          <img
            height="53px"
            width="53px"
            src="https://i.pinimg.com/originals/76/55/0c/76550cdb7a2de95138746d536e99c7ae.png"
            alt="Nation of Gods &amp; Earths"
            title="Nation of Gods &amp; Earths"
            className="test2"
          />
        </a>
      </Link>

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
