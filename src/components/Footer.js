import React from "react";
import Logo from "../assets/images/Logo-2.png";
import { Box, Stack } from "@mui/material";

const Footer = () => {
    return (
        <Box mt={"80px"}>
            <Stack gap={"4px"} alignItems={"center"} px={"40px"} p={"24px 0"}>
                <img
                    src={Logo}
                    alt="logo"
                    width={"200px"}
                    height={"40px"}
                    style={{
                        mixBlendMode: "multiply",
                        filter: "contrast(1)",
                    }}
                />
                <p>
                    Developed with ❤️ by{" "}
                    <a
                        href={"https://github.com/sandipthapa99"}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "#f9971f",
                            textDecoration: "none",
                        }}
                    >
                        @sandipthapa99
                    </a>
                </p>
            </Stack>
        </Box>
    );
};

export default Footer;
