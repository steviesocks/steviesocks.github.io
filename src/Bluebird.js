import { Anchor, Box, Button, Collapsible, Heading, Paragraph, ResponsiveContext } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import { useState } from "react";
import ListItem from "./ListItem";

const techStack = {
    frontend: "React, Redux, Typescript, Material UI",
    backend: "Python, Flask, PostgreSQL",
    apis: "Zoom, Amplitude, Google Cloud, Google Speech-To-Text, Salesforce, Slack",
    "ci/cd": "CircleCI, AWS Elastic Kubernetes, Terraform",
};

const Bluebird = ({ size }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <ResponsiveContext.Consumer>
            {size => (
            <Box flex direction={size !== "small" ? "row" : "column"}>
                <Box flex margin={{ right: "medium" }}>
                    <Box direction="row" align="center" justify="space-between">
                        <Heading level="4" margin={{ vertical: "small", right: "medium" }}>
                            Bluebird
                        </Heading>
                        <Anchor href="https://app.getbluebird.ai" target="_blank">
                            app.getbluebird.ai
                        </Anchor>
                    </Box>
                    <Paragraph size="medium" margin={{ bottom: "none" }}>
                        Conversation intelligence with an eye toward streamlining onboarding and continuous coaching for sales
                        teams.
                    </Paragraph>
                    <Paragraph size="medium">
                        Fully owned building the React frontend app, working on all features. On backend, built out additional API
                        endpoints, modified existing endpoints, and built out database to serve new features.
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
                            src="https://www.loom.com/embed/90e8b30e11de429d90771bf921df6a0c?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
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

export default Bluebird;
