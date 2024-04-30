import { Anchor, Box, Button, Collapsible, Heading, Paragraph, ResponsiveContext } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import { useState } from "react";
import ListItem from "./ListItem";

const techStack = {
  frontend: "React, Typescript, TanStack Query, Redux, Tailwinds, NextUI",
  backend: "Next.js, PostgreSQL, Prisma, Google Cloud Functions",
  apis: "OpenAI, Gmail, Outreach, Salesloft, Salesforce, Slack",
  "ci/cd": "GCP, Kubernetes Engine",
};

const Flike = ({ size }) => {
  const [open, setOpen] = useState(true);

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
                Flike
              </Heading>
              <Anchor href="https://www.flike.app/" target="_blank">
                flike.app
              </Anchor>
            </Box>
            <Paragraph size="medium" margin={{ bottom: "none" }}>
              Led frontend development including a React web app and Chrome extension. Next.js/Postgres
              backend, deployment on GCP, tests with Jest.
            </Paragraph>
            <Paragraph size="medium" margin={{ bottom: "none" }}>
              Leveraging a variety of data collection integrations and the OpenAI api to generate personalized and relevant
              messages in the user's voice.
            </Paragraph>
            <Paragraph size="medium">
              Built integrations with Gmail, Outreach, LinkedIn, Salesforce, and Salesloft.
            </Paragraph>
            <Button
              style={{ maxWidth: "432px" }}
              icon={open ? <FormUp /> : <FormDown />}
              label="tech stack"
              reverse
              onClick={handleOpen}
            />
            <Collapsible open={open}>
              <Box pad="small" style={{ maxWidth: "432px" }}>
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
                src="https://www.loom.com/embed/f60e3647def0487eb21e1bc4d758ac96?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
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

export default Flike;
