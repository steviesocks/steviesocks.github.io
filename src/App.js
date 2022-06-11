import { Anchor, Box, Button, Footer, Grommet, Heading, ResponsiveContext } from "grommet";
import { Github, Linkedin } from "grommet-icons";
import AppBar from "./AppBar";
import Bluebird from "./Bluebird";
import JustRugs from "./JustRugs";
import theme from "./theme";

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
                        <Heading level={4}>Full-Stack Web Developer</Heading>
                        <Box align="center" justify="center">
                            Stephen is currently the lead full-stack engineer at Bluebird, a venture- and angel-backed early-stage
                            startup founded by Marcus Ratzlaff and Andrew Chou, both early employees at Amplitude. Bluebird offers
                            automated call recording, real-time guidance, and conversation intelligence for sales teams looking to
                            reduce their onboarding time and continuously coach for better performance. Stephen built the initial
                            frontend app and subsequently took on additional responsibilities in building out the API and database
                            and maintaining the deployment infrastructure.
                        </Box>
                        <Box border="top" height="0px" margin={{ vertical: "medium" }} />

                        <Box flex pad="medium">
                            <Bluebird />
                            <Box border="top" height="0px" margin={{ vertical: "medium" }} />
                            <JustRugs />
                        </Box>
                    </Box>
                </Box>
                <Footer></Footer>
            </Box>
        </Grommet>
    );
}

export default App;
