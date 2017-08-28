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
  CodePane
} from "spectacle";

export const slideBabel = () => (
  <Slide>
    <Heading size={2}>Babel (formerly 6to5)</Heading>
    <List>
      <Appear>
        <ListItem>New classes, methods, functions</ListItem>
      </Appear>
      <Appear>
        <ListItem>Syntax</ListItem>
      </Appear>
      <Appear>
        <ListItem>Core changes (Proxy)</ListItem>
      </Appear>
    </List>
  </Slide>
);
