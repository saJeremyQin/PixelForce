import React from "react";
// import { Typography } from "@mui/material";
import SignalIcon from '../assets/Mobile Signal.svg'
import WifiIcon from '../assets/Wifi.svg'
import BatteryIcon from '../assets/Battery.svg'

const StatusBar = () => {
    return (
        <div className="w-full h-44 flex justify-between flex-row items-center">
            {/* Time */}
            <span  style={{ color:'#0F172A' }}className="font-inter text-base font-semibold leading-16 inline mt-4 ml-8 mb-3">
                9:41
            </span>
            {/* Signal, Wifi, Battery */}
            <div className="flex mr-4">
                <img src={SignalIcon} alt="signalIcon" className="pr-2"/>
                <img src={WifiIcon} alt="wifiIcon" className="pr-2"/>
                <img src={BatteryIcon} alt="batteryIcon"/>
            </div>
        </div>
    )
}

export default StatusBar;