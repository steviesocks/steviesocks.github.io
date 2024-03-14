import { Anchor, Box, Button, Footer, Grommet, Heading, ResponsiveContext } from "grommet";
import { Github, Linkedin } from "grommet-icons";
import AppBar from "./AppBar";
import Bluebird from "./Bluebird";
import JustRugs from "./JustRugs";
import Kontomo from "./Kontomo";
import theme from "./theme";
import Flike from "./Flike";

function App() {
  return (
    <Grommet theme={theme} full>
      <Box>
        <Box fill>
          <AppBar>
            <Heading level={4}>Stephen Stocking</Heading>

            <Box direction="row">
              <Anchor href="https://www.linkedin.com/in/stephen-stocking/" target="_blank">
                <Button icon={<Linkedin color="white" />} />
              </Anchor>
              <Anchor href="https://github.com/steviesocks" target="blank">
                <Button icon={<Github color="white" />} />
              </Anchor>
            </Box>
          </AppBar>
          <Box direction="column" flex pad="medium">
            <Heading level={4}>Full-Stack Engineer</Heading>
            <Box align="start" justify="center">
              Stephen is currently the lead full-stack engineer at Flike, a YC-backed ('22) startup building a generative AI email
              co-pilot for sales and business communications.
            </Box>
            <Box border="top" height="0px" margin={{ vertical: "medium" }} />

            <Box flex pad="medium">
              <Flike />
              <Box border="top" height="0px" margin={{ vertical: "medium" }} />
              <Bluebird />
              <Box border="top" height="0px" margin={{ vertical: "medium" }} />
              <JustRugs />
              <Box border="top" height="0px" margin={{ vertical: "medium" }} />
              <Kontomo />
            </Box>
          </Box>
        </Box>
        <Footer></Footer>
      </Box>
    </Grommet>
  );
}

export default App;
