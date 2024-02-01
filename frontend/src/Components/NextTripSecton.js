import React, { useState, useEffect} from "react";
import axios from 'axios';
import { Box, Typography, Grid } from "@mui/material";
import NextTripCard from "./NextTripCard";


const NextTripSection = () => {
    const [nextTrips, setNextTrips] = useState();
    const [error, setError] = useState();
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/trips');
                setNextTrips(response.data);
            } catch (error) {
                console.log(error.message);
                setError(error)
            }
        };
        fetchData();
    },[]);

    if (error) {
        return <div>CORS issue: {error.message}</div>;
    }
    if (!nextTrips) {
        return <div>Loading...</div>;
    }

    return (
        <Box>
            <Typography
                variant="h6" 
                style={{
                    width: '100%',
                    color: '#1A1E25',
                    fontSize: '18px',
                    fontFamily: 'SF Pro Display',
                    fontWeight: 600,
                    lineHeight: '23.40px',
                    letterSpacing: '0.23px',
                    wordWrap: 'break-word',
                }}
            >
                Find your next trip
            </Typography>
            <Grid container spacing={4}>
            {
                Array.isArray(nextTrips) && nextTrips.length > 0 && nextTrips.slice(0, 2).map((trip, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
                    <NextTripCard trip={trip} />
                </Grid>
            ))}
            </Grid>
        </Box>

    )
}

export default NextTripSection;