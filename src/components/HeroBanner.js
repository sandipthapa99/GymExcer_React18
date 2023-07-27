import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner3.jpg";

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },
            }}
            position={"relative"}
            p={"20px"}
        >
            <Typography color="#f9971f" fontWeight={"500"} fontSize={"24px"}>
                Fitness Club
            </Typography>
            <Typography
                fontWeight={600}
                sx={{
                    fontSize: { lg: "40px", xs: "24px" },
                }}
                mb={"23px"}
                lineHeight={1.55}
            >
                Eat, Sleep, Gym <br /> and Repeat
            </Typography>
            <Typography fontSize="20px" lineHeight={"35px"} mb={2} color={"#495057"}>
                Check out the most effective exercises
            </Typography>
            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{
                    backgroundColor: "#373A40",
                    padding: "10px 20px",
                    textTransform: "capitalize",
                }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                fontSize={"200px"}
                color={"#343A40"}
                sx={{
                    opacity: 0.1,
                    display: { lg: "block", xs: "none" },
                }}
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="hero-img" className="hero-banner-img" />
        </Box>
    );
};

export default HeroBanner;
