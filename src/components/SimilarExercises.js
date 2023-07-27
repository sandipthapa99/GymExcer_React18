import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box
            sx={{
                mt: { lg: "64px", xs: "0" },
            }}
        >
            <Typography variant="h4" mb={5}>
                Exercises that target the same muscle group
            </Typography>
            <Stack
                direction={"row"}
                sx={{
                    position: "relative",
                }}
                mb={16}
            >
                {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography variant="h3" mb={5}>
                Exercises that use the same equipment
            </Typography>
            <Stack
                direction={"row"}
                sx={{
                    p: "2px",
                    position: "relative",
                }}
            >
                {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;
