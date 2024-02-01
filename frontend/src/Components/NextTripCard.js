import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NextTripCard = ({ trip }) => {
  const { name, image, rented_props_count } = trip;

  return (
    <Card
      style={{
        width: '100%',
        height: '100%',
        boxShadow: '0px 24px 96px rgba(66, 94, 66, 0.15)',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between'
      }}
    >
      <img
        alt={name}
        height="160" // Adjust the height accordingly
        src={image}
        style={{
          width: '100%',
          height:'100%',
          objectFit: 'cover',
        }}
      />
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          style={{
            color: '#1A1E25',
            fontSize: '16px',
            fontFamily: 'SF Pro Display',
            fontWeight: 600,
            lineHeight: '16px',
            letterSpacing: '0.32px',
            wordWrap: 'break-word',
          }}
        >
          {name}
        </Typography>
        <Typography
          style={{
            color: '#7D7F88',
            fontSize: '13px',
            fontFamily: 'SF Pro Display',
            fontWeight: 400,
            lineHeight: '13px',
            letterSpacing: '0.26px',
            wordWrap: 'break-word',
            paddingTop: '6px',
          }}
        >
          {rented_props_count} rented props
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NextTripCard;
