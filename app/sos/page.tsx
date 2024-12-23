'use client'
import React from 'react'
import dynamic from "next/dynamic";
import { useGeolocation } from '@/context/GeolocationContext';

// const DynamicMap = dynamic(() => import("@/components/map"), { ssr: false });
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function Page() {
  const { latitude, longitude } = useGeolocation();


  return (
    <div className='container mx-auto'>
      {/* <DynamicMap position={[latitude, longitude]} /> */}
      <div>
        <div>
          Your current longitude and latitude is:
          <p>{latitude !== null ? latitude : "Loading..."}</p>
          <p>{longitude !== null ? longitude : "Loading..."}</p>
        </div>
        {latitude !== null && longitude !== null && (
          <Map position={[latitude, longitude]} />
        )}
      </div>
    </div>
  );
}
