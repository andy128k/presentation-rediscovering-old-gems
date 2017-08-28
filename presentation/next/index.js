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

const code_obj_rest_spread = `let {x, ...rest} = {x: 10, y: 20, z: 30};
console.log(x);         // 10
console.log(rest);      // {y: 20, z: 30}
`;

const code_async_gen = `for await (const line of readLines(filePath)) {
  console.log(line);
}
`;

export const slideNext = () => (
  <Slide>
    <Heading size={2}>ES201?</Heading>
    <List>
      <ListItem>
        Object rest/spread
        <CodePane textSize={"50%"} lang="javascript" source={code_obj_rest_spread} />
      </ListItem>
      <ListItem>
        Async generators
        <CodePane textSize={"50%"} lang="javascript" source={code_async_gen} />
      </ListItem>
      <ListItem>
        Over different 40 proposals
      </ListItem>
    </List>
  </Slide>
);
