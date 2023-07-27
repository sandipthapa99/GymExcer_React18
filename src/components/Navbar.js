import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { scrollToView } from "../utils/helpers";

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
                        fontWeight: "500",
                        // borderBottom: "3px solid #f9971f",
                    }}
                >
                    Home
                </Link>
                <p
                    href="#"
                    style={{
                        textDecoration: "none",
                        color: "#343A40",
                        cursor: "pointer",
                        fontWeight: "500",
                    }}
                    onClick={() => scrollToView("exercises")}
                >
                    Exercises
                </p>
            </Stack>
        </Stack>
    );
};

export default Navbar;
