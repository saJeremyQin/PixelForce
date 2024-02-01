import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';  // Correct import name

const LeadingContent = () => {
  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate('/explore')
  }

  return (
    <div className="w-full h-full pb-4 pl-4 pr-4 bg-white flex flex-col justify-start items-start gap-8">
      {/* Heading and Subheading */}
      <div className="flex flex-col justify-start items-center gap-2">
        <div className="w-343 text-center text-dark-primary text-48 font-'SF Pro Display' font-bold leading-32">
          New Place, New Home!
        </div>
        <div className="w-343 text-center text-gray-primary text-16 font-'SF Pro Display' font-regular leading-24">
          Are you ready to uproot and start over in a new area? Placoo will help
          you on your journey!
        </div>
      </div>
      {/* Actions */}
      <div className="w-full flex-col justify-center items-center gap-4">
        <Button
          variant="contained"
          onClick={toLoginPage}
          style={{
            width: "96%", 
            height: "50px", 
            marginLeft:"8px",
            paddingTop: "13px",
            paddingBottom: "13px",
            borderRadius: "30px",
            background: "linear-gradient(136deg, #917AFD 0%, #6246EA 100%)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Log in
        </Button>
        <Button
          variant="contained"
          style={{
            width: "96%", 
            height: "50px",
            // padding: "8px 16px",
            marginLeft:"8px",
            marginTop:"16px",
            paddingTop: "13px",
            paddingLeft:"4px",
            borderRadius: "24px",
            backgroundColor: "white",
            border: "1px solid #E3E3E7",
            color: "#475569",
            fontWeight: 500,
          }}
        >
          Sign up
        </Button>
      </div>
    
    </div>
  );
};

export default LeadingContent;
