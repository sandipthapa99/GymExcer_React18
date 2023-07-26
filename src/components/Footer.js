import React from "react";
import Logo from "../assets/images/Logo-1.png";
import { Box, Stack } from "@mui/material";

const Footer = () => {
    return (
        <Box mt={"80px"} bgcolor={"#fff3f4"}>
            <Stack gap={"40px"} alignItems={"center"} px={"40px"} p={"24px 0"}>
                <img src={Logo} alt="logo" width={"200px"} height={"40px"} />
            </Stack>
        </Box>
    );
};

export default Footer;
