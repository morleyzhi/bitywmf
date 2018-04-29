import React from "react";
import Link from "next/link";
import styled from "styled-components";

import langs from "langs";

const El = styled.nav`
  display: block;
  width: 700px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom 25px;
`;

const Button = styled.a`
  display: inline-block;
  float: left;
  margin-right: 15px;
  padding: 3px 20px;

  cursor: pointer;

  font: 11px/20px Arial, Helvetica, sans-serif;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;

  ${({ theme, ...props }) => `
    ${
      props.isSelected
        ? `
    background: linear-gradient(${props.button[0]}, ${props.button[1]});
    text-shadow: 0 1px 0 ${props.shadow};
    border-top: 1px solid ${props.highlight};
    box-shadow: 0 1px 0 ${props.shadow};
    `
        : `
    background: linear-gradient(${theme.button[0]}, ${theme.button[1]});
    text-shadow: 0 1px 0 ${theme.shadow};
    border-top: 1px solid ${theme.highlight};
    box-shadow: 0 1px 0 ${theme.shadow};
    `
    }

    &:hover {
      background: linear-gradient(${props.hover[0]}, ${props.hover[1]});
      text-shadow: 0 1px 0 ${props.shadow};
      border-top: 1px solid ${props.highlight};
      box-shadow: 0 1px 0 ${props.shadow};
      }
  `};
`;

const Nav = ({ lang }) => (
  <El>
    {Object.keys(langs)
      .sort()
      .map((l) => {
        const { label, slug, colors } = langs[l];

        return (
          <Link key={`link-${lang}`} href={`/${slug}`} passHref>
            <Button {...colors} isSelected={lang === l}>
              {label}
            </Button>
          </Link>
        );
      })}
  </El>
);

Nav.defaultProps = {
  lang: "english",
};

export default Nav;
