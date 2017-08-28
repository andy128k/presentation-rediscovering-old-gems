import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Code,
} from "spectacle";

const code = `
function twoFetchesOneCatch() {
  return fetch(url1).then(response1 => {
    return fetch(url2, response1).then(response2 => {
      return {response1, response2};
    });
  }).catch(error => {
    console.error(error);
    return null;
  });
}

async function twoFetchesOneCatch() {
  try {
    const response1 = await fetch(url1);
    const response2 = await fetch(url2, response1);
    return {response1, response2};
  } catch (error) {
    console.error(error);
    return null;
  }
}
`;

export const slideES2017 = () => (
  <Slide>
    <Heading size={2}>ES2017</Heading>
    <CodePane textSize={"50%"} lang="javascript">
      {code}
    </CodePane>
  </Slide>
);
