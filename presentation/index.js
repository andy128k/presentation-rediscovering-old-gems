import React from "react";
import createTheme from "spectacle/lib/themes/default";
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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import slideDarkEra from "./dark_era";
import slideCoffeeScript from "./coffeescript";
import { slideES2015_1, slideES2015_2, slideES2015_3, slideES2015_4, slideES2015_5, slideES2015_6 } from "./es2015";
import { slideBabel } from "./babel";
import { slideES2016 } from "./es2016";
import { slideES2017 } from "./es2017";
import { slideNext } from "./next";

// Import theme
const theme = createTheme({
  primary: "#678",
  secondary: "#def"
});

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
// require("../themes/formidable/index.css");
// Best way to include fonts rite
// require("../fonts/worksans.css");
// require("../fonts/biorhyme.css");
// require("../fonts/silkscreen.css");

const logoJS = require("../assets/UniversalJS.svg");

preloader({ logoJS });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        theme={theme}
        transition={["fade", "slide"]}
      >
        <Slide>
          <Heading caps>
            Rediscovering old gems
          </Heading>
          <Image width="25%" src={logoJS} />
          <Text textFont="monospace" margin="auto auto 5em auto">
            28 August 2017
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>Genesis</Heading>
          <List>
            <ListItem>Was created in 10 days in May 1995</ListItem>
            <ListItem>Influenced by Scheme</ListItem>
            <ListItem>OOP model is borrowed from Self</ListItem>
            <ListItem>Syntax is C/Java-like</ListItem>
          </List>
        </Slide>
        {slideDarkEra()}
        {slideCoffeeScript()}
        {slideES2015_1()}
        {slideES2015_2()}
        {slideES2015_3()}
        {slideES2015_4()}
        {slideES2015_5()}
        {slideES2015_6()}
        {slideBabel()}
        {slideES2016()}
        {slideES2017()}
        {slideNext()}
        <Slide>
          <Heading>Thank you</Heading>
          <Link>https://github.com/andy128k/presentation-rediscovering-old-gems</Link>
        </Slide>
      </Deck>
    );
  }
}
