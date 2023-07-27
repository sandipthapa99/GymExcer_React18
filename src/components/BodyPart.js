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
                borderTop: bodyPart === item ? "4px solid #f9971f" : "",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "47px",
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
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
            <Typography fontSize={"20px"} fontWeight={"600"} color={"#495057"} textTransform={"capitalize"}>
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
