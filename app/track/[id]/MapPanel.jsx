"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("./DeliveryMap"), {
  ssr: false,
  loading: () => <div className="map-loading">Loading map...</div>,
});

export default function MapPanel() {
  return <DeliveryMap />;
}
