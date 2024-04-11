"use client"

import * as React from "react"
import { Navigation } from "lucide-react"

export function NavigationButton() {
  const openGoogleMaps = () => {
    // Replace "latitude" and "longitude" with your desired coordinates
    const latitude = 15.496777;
    const longitude = 73.827827;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={openGoogleMaps} className="bg-transparent border-0 hover:bg-white text-red font-bold py-2 px-4 rounded">
        <Navigation />
    </button>
  );
}
