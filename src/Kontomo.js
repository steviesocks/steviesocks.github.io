import { Box, Button, Collapsible, Heading, Paragraph, ResponsiveContext } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import { useState } from "react";
import ListItem from "./ListItem";

const techStack = {
    frontend: "React, Redux, Material UI",
    backend: "Firebase (cloud functions and user auth), Firestore (NoSQL database)",
    apis: "Stripe, Kaltura",
};

const Kontomo = ({ size }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box flex direction={size !== "small" ? "row" : "column"}>
                    <Box flex margin={{ right: "medium" }}>
                        <Box direction="row" align="center" justify="space-between">
                            <Heading level="4" margin={{ vertical: "small", right: "medium" }}>
                                Kontomo
                            </Heading>
                        </Box>
                        <Paragraph size="medium" margin={{ bottom: "none" }}>
                            A virtual performance venue. Empowering artists to control and monetize online performances, both live
                            and recorded.
                        </Paragraph>
                        <Paragraph size="medium">
                            Built out new features for MVP React app with a "serverless" backend. Added support for
                            livestream video, built a donations feature, and refactored existing features to improve performance
                            and reliability.
                        </Paragraph>
                        <Button icon={open ? <FormUp /> : <FormDown />} label="tech stack" reverse onClick={handleOpen} />
                        <Collapsible open={open}>
                            <Box pad="small">
                                {Object.entries(techStack).map(([name, value]) => (
                                    <ListItem key={name} name={name} value={value} />
                                ))}
                            </Box>
                        </Collapsible>
                    </Box>
                    <Box flex margin={{ top: "medium" }}>
                        <div style={{ position: "relative", paddingBottom: "55.21472392638037%", height: 0 }}>
                            <iframe
                                title="Bluebird Demo"
                                src="https://www.loom.com/embed/30324f3c28614eebbc44e96bc7465e0a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                                frameborder="0"
                                allowfullscreen="true"
                                webkitallowfullscreen="true"
                                mozallowfullscreen="true"
                                oallowfullscreen="true"
                                msallowfullscreen="true"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                            ></iframe>
                        </div>
                    </Box>
                </Box>
            )}
        </ResponsiveContext.Consumer>
    );
};

export default Kontomo;
