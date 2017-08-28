import React from "react";
import {
  Fill,
  Fit,
  Heading,
  Layout,
  Slide,
  CodePane,
  Text
} from "spectacle";

const jsCode = require("raw-loader!./rectangle.js");
const csCode = require("raw-loader!./rectangle.coffee");

export default () => (
  <Slide>
    <Heading size={2}>Transpilation</Heading>
    <Layout>
      <Fill>
        <Heading size={6}>CoffeeScript</Heading>
        <CodePane textSize={"50%"} lang="coffeescript" source={csCode}/>
      </Fill>
      <Fit>
        <Text margin={10}>vs.</Text>
      </Fit>
      <Fill>
        <Heading size={6}>JavaScript (ES5)</Heading>
        <CodePane textSize={"40%"} lang="javascript" source={jsCode} />
      </Fill>
    </Layout>
  </Slide>
);
