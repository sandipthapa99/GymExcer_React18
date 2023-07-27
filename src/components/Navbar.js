import React from "react";
import Logo from "../assets/images/Logo.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"none"}
            sx={{
                gap: {
                    sm: "122px",
                    xs: "40px",
                },
                mt: { sm: "32px", xs: "20px" },
            }}
            px={"20px"}
        >
            <Link to={"/"}>
                <img
                    src={Logo}
                    alt="Logo"
                    style={{
                        height: "50px",
                        width: "80px",
                        margin: "0 20px",
                    }}
                />
            </Link>
            <Stack direction={"row"} gap={"40px"} fontSize={"20px"} alignItems={"center"}>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#343A40",
                        // borderBottom: "3px solid #f9971f",
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises"
                    style={{
                        textDecoration: "none",
                        color: "#343A40",
                    }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;
