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

export const slideES2016 = () => (
  <Slide>
    <Heading size={2}>ES2016</Heading>
    <List>
      <ListItem><Code>['a', 'b', 'c'].includes('a')</Code></ListItem>
      <ListItem><Code>a ** b === Math.pow(a, b)</Code></ListItem>
    </List>
  </Slide>
);
