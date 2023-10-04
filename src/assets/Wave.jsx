import { Box } from "@chakra-ui/react";
import React from "react";

function Wave(props) {
    return (
        <Box {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width={"100%"}>
                <path
                    fill="currentColor"
                    fill-opacity="1"
                    d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,106.7C672,128,768,224,864,224C960,224,1056,128,1152,96C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </Box>
    );
}

export default Wave;