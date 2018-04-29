import React from "react";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";

import langs from "langs";

import Nav from "components/Nav";
import Audio from "components/Audio";

const El = styled.div`
  min-height: 100vh;
  padding-top: 25px;
  padding-bottom: 65px;

  transition: background 500ms ease;

  ${({ theme }) => `
    background: linear-gradient(${theme.background[0]}, ${theme.background[1]});
  `};
`;

const Text = styled.h1`
  position: relative;
  font: 135px/125px "Delius Swash Caps", Georgia, serif;
  margin: 0;
  padding: 0;
  line-height: 125px;
  letter-spacing: -3px;
  cursor: default;
  color: #fff;
  width: ${(props) => (props.lang === "german" ? "900px" : "700px")};
  padding-left: ${(props) => (props.lang === "german" ? "100px" : 0)};
  height: 500px;
  margin: 0 auto;
  text-shadow: 0 2px 0 ${({ theme }) => theme.shadow};
`;

const App = ({ lang }) => (
  <ThemeProvider
    theme={{
      ...langs[lang].colors,
      lang,
    }}
  >
    <El>
      <Head>
        <title>{langs[lang].text}</title>
      </Head>
      <Text lang={lang}>
        {langs[lang].text}
        <Audio lang={lang} />
      </Text>
      <Nav lang={lang} />
    </El>
  </ThemeProvider>
);

App.defaultProps = {
  lang: "english",
};

export default App;
