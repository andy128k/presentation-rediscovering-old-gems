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

const plan1 = `
three categories: stdlib (polyfills), syntax (babel), language ( :( proxy ))



Symbol

{prop}, {[calc]: val}, {method() {}}

modules

class, methods, static methods, getter/setter

class as expression: return class {}, class extends func(base1, base2) {}

Map, Set

iterators (for-of), generators

Promise

Proxy/Reflection

various new built-in methods...
`;


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
    <List>
      <ListItem>Symbol type</ListItem>
      <ListItem>Symbol type</ListItem>
    </List>
  </Slide>
);
