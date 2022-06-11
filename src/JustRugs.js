import { Anchor, Box, Button, Collapsible, Heading, NameValueList, NameValuePair, Paragraph, ResponsiveContext } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import { useState } from "react";

const techStack = {
    frontend: "React",
    backend: "NodeJS, PostgreSQL",
    apis: "web3.js - Ethereum Javascript API, Metamask, WalletConnect, Infura",
};

const JustRugs = ({ size }) => {
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
                                Just Rugs
                            </Heading>
                            <Anchor href="https://justrugs.xyz" target="_blank">
                                justrugs.xyz
                            </Anchor>
                        </Box>
                        <Paragraph size="medium" margin={{ bottom: "none" }}>
                            Full-stack NFT project. Added functionality to an existing static website and built out complete
                            backend.
                        </Paragraph>
                        <Paragraph size="medium">
                            Integrated APIs to connect client to multiple digital wallet services. Built NodeJS server and
                            PostgreSQL database with public endpoints to serve resources to NFT marketplaces.
                        </Paragraph>
                        <Button icon={open ? <FormUp /> : <FormDown />} label="tech stack" reverse onClick={handleOpen} />
                        <Collapsible open={open}>
                            <NameValueList layout="grid" pad="small" pairProps={{ direction: "column" }}>
                                {Object.entries(techStack).map(([name, value]) => (
                                    <NameValuePair key={name} name={name}>
                                        {value}
                                    </NameValuePair>
                                ))}
                            </NameValueList>
                        </Collapsible>
                    </Box>
                    <Box flex margin={{ top: "medium" }}>
                        <div style={{ position: "relative", paddingBottom: "55.21472392638037%", height: 0 }}>
                            <iframe
                                title="Bluebird Demo"
                                src="https://www.loom.com/embed/9815d4434b3846c295f8cd9755338188?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
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

export default JustRugs;
