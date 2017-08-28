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
const unobtrusive = require('raw-loader!./unobtrusive.html');

export default () => (
  <Slide>
    <Heading size={2}>Adolescence</Heading>
    <Text>(jQuery epoch)</Text>
    <List>
      <Appear>
        <ListItem>Used to enrich HTML pages</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Unobtrusive JavaScript
          <CodePane lang="html" source={unobtrusive}/>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Unstructured code</ListItem>
      </Appear>
    </List>
  </Slide>
);
