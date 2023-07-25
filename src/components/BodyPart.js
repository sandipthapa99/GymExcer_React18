import { Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems={"center"}
            justifyContent={"center"}
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "47px",
            }}
        >
            <img
                src={Logo}
                alt="dumbbell"
                style={{
                    width: "40px",
                    height: "40px",
                }}
            />
            <Typography fontSize={"24px"} fontWeight={"bold"} color={"#3A1212"} textTransform={"capitalize"}>
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;