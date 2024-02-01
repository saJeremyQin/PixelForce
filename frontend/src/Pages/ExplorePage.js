// to be done, create search-input, bot-nav, next-trip-section components.
// axios to fetch data, react-router for page router
import React from "react";
import SearchBar from "../Components/SearchBar";
import StatusBar from "../Components/StatusBar";
import { Box } from "@mui/material";
import NextTripSection from "../Components/NextTripSecton";

const ExplorePage = () => {
    return (
        <Box 
            sx={{ 
                width: "374px",
                mx:"auto",
            }}
        >
            <StatusBar />
            <SearchBar />
            <NextTripSection />
        </Box>
    )
}

export default ExplorePage;