import React from "react";
import {
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
  CodePane
} from "spectacle";

import sweet_syntax_1 from "raw-loader!./sweet_syntax.js.1.txt";
import sweet_syntax_2 from "raw-loader!./sweet_syntax.js.2.txt";
import sweet_syntax_3 from "raw-loader!./sweet_syntax.js.3.txt";
import sweet_syntax_4 from "raw-loader!./sweet_syntax.js.4.txt";
import sweet_syntax_5 from "raw-loader!./sweet_syntax.js.5.txt";

export const slideES2015_1 = () => (
  <Slide>
    <Heading size={2}>EcmaScript&nbsp;2015</Heading>
    <Heading size={6}>Sweet syntax</Heading>
    <CodePane textSize={"40%"} lang="javascript" source={sweet_syntax_1} />
  </Slide>
);

export const slideES2015_2 = () => (
  <Slide>
    <Heading size={2}>EcmaScript&nbsp;2015</Heading>
    <Heading size={6}>Sweet syntax</Heading>
    <CodePane textSize={"50%"} lang="javascript" source={sweet_syntax_2} />
  </Slide>
);

export const slideES2015_3 = () => (
  <Slide>
    <Heading size={2}>EcmaScript&nbsp;2015</Heading>
    <Heading size={6}>Sweet syntax</Heading>
    <CodePane textSize={"50%"} lang="javascript" source={sweet_syntax_3} />
  </Slide>
);

export const slideES2015_4 = () => (
  <Slide>
    <Heading size={2}>EcmaScript&nbsp;2015</Heading>
    <Heading size={6}>Sweet syntax</Heading>
    <CodePane textSize={"40%"} lang="javascript" source={sweet_syntax_4} />
  </Slide>
);

export const slideES2015_5 = () => (
  <Slide>
    <Heading size={2}>EcmaScript&nbsp;2015</Heading>
    <Heading size={6}>Sweet syntax</Heading>
    <CodePane textSize={"50%"} lang="javascript" source={sweet_syntax_5} />
  </Slide>
);

export const slideES2015_6 = () => (
  <Slide>
    <Heading size={2}>EcmaScript&nbsp;2015</Heading>
    <List>
      <ListItem>Modules</ListItem>
      <ListItem>New types: Symbol, Set, Map, WeakMap...</ListItem>
      <ListItem>Proxy</ListItem>
      <ListItem>Various new built-in methods</ListItem>
      <ListItem>...</ListItem>
    </List>
  </Slide>
);
