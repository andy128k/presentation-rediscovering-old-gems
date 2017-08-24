// Import React
import React from "react";

// Import Spectacle Core tags
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

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
// require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const bg = require("../assets/bg_skyline.svg");
const logoJS = require("../assets/UniversalJS.svg");
const logo = require("../assets/logo-seattlejsconference.svg");
const logoAlexa = require("../assets/logo-alexa.svg");
const logoImdb = require("../assets/logo-IMDb.svg");
const logoFormidable = require("../assets/logo-formidable.svg");
const logoMicrosoft = require("../assets/logo-microsoft.svg");
const logoZillow = require("../assets/logo-zillow.svg");
const logoGalvanize = require("../assets/logo-galvanize.svg");
const logoAppSheet = require("../assets/logo-appsheet.svg");
const logoGoDaddy = require("../assets/logo-godaddy.svg");
const logoNpm = require("../assets/logo-npm.svg");
const logoSitepen = require("../assets/logo-sitepen.svg");
const logoIndeed = require("../assets/logo-indeed.png");
const logoOpenDoor = require("../assets/logo-opendoor.svg");
const logoSheCodesNow = require("../assets/logo-shecodesnow.png");
const logoSendGrid = require("../assets/logo-sendgrid.svg");
const logoTwitter = require("../assets/logo-twitter.svg");
const logoUnbounce = require("../assets/logo-unbounce.png");

const plan = `
CoffeeScript 2010
influenced by Ruby, Python


ES2015 (ES6)


three categories: stdlib (polyfills), syntax (babel), language ( :( proxy ))



Symbol

Const, let

arrow functions

default params, rest/spread params

{prop}, {[calc]: val}, {method() {}}

const {value} = obj, const [item, ...rest] = arr

modules

class, methods, static methods, getter/setter

class as expression: return class {}, class extends func(base1, base2) {}

Map, Set

iterators (for-of), generators

Promise

Proxy/Reflection

various new built-in methods...


ES2016 (ES7)

power operator


ES2017

async



NEXT

object rest/spread
class properties
`;

const images = {
  bg,
  logoJS,
  logo,
  logoAlexa,
  logoImdb,
  logoFormidable,
  logoMicrosoft,
  logoZillow,
  logoGalvanize,
  logoAppSheet,
  logoGoDaddy,
  logoNpm,
  logoSitepen,
  logoIndeed,
  logoOpenDoor,
  logoSheCodesNow,
  logoSendGrid,
  logoTwitter,
  logoUnbounce
};
preloader(images);

const slide2 = () => (
  <Slide>
    <CodePane textSize={"100%"} lang="javascript" source={"import 'react'\nconsole.log('awesome!')"}/>
  </Slide>
);

const theme = createTheme({
  // primary: "#006bff",
  primary: "#678",
  secondary: "#2e2e2c"
}, {
  primary: "sans-serif",
  secondary: "sans-serif"
});

export default class Presentation extends React.Component {
  renderSponsorHeading(text) {
    return (
      <Heading
        caps
        size={6}
        style={{ letterSpacing: "0.05em" }}
      >
        {text}
      </Heading>
    );
  }

  render() {
    const skylineBg = {
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "105% auto"
    };

    const sponsor = {
      display: "block",
      marginBottom: "1.5em"
    };

    const wifiSlide = (
      <Slide style={skylineBg}>
        <Heading size={3}>WiFi</Heading>
        <Layout>
          <Fill>
            <Text textFont="monospace">Network</Text>
            <Text>Foundry</Text>
          </Fill>
          <Fill>
            <Text textFont="monospace">Password</Text>
            <Text>foundry98103</Text>
          </Fill>
        </Layout>
        <Text style={{ marginBottom: 0 }}>
          <Link href="https://twitter.com/seattlejs">
            <Image
              height="1.5em"
              src={logoTwitter}
              style={{ verticalAlign: "middle" }}
            />
            @SeattleJS
          </Link>
        </Text>
        <Text style={{ marginTop: 0, marginBottom: "3em" }}>
          <Link href="https://twitter.com/hashtag/SeattleJSConf?src=hash">
            <Image
              height="1.5em"
              src={logoTwitter}
              style={{ verticalAlign: "middle" }}
            />
            #SeattleJSConf
          </Link>
        </Text>
      </Slide>
    );

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
        {slide2()}
        <Slide>
          <CodePane>
            {plan}
          </CodePane>
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Diamond Sponsor")}
          <Image width="90%" src={logoMicrosoft} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Platinum Sponsor")}
          <Image width="90%" src={logoAlexa} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Gold Sponsor")}
          <Image width="50%" src={logoImdb} />
        </Slide>
        {wifiSlide}
        <Slide bgColor="white">
          {this.renderSponsorHeading("Silver Sponsors")}
          <Layout>
            <Fill>
              <Image style={sponsor} width="90%" src={logoZillow} />
              <Image style={sponsor} width="90%" src={logoGalvanize} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="90%" src={logoAppSheet} />
              <Image style={sponsor} width="90%" src={logoGoDaddy} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Community Sponsors")}
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Image style={sponsor} width="60%" src={logoNpm} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="95%" src={logoSendGrid} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="75%" src={logoIndeed} />
            </Fill>
          </Layout>
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Image style={sponsor} width="80%" src={logoSitepen} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="90%" src={logoOpenDoor} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="60%" src={logoSheCodesNow} />
            </Fill>
          </Layout>
          <Layout>
            <Fill />
            <Fill>
              <Image style={sponsor} width="80%" src={logoUnbounce} />
            </Fill>
            <Fill />
          </Layout>
        </Slide>
        {wifiSlide}
      </Deck>
    );
  }
}
