import React from 'react'
import { MapPin, Navigation, Layers } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function MapView() {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-1 relative">
                {/* Simulated map view */}
                <div className="absolute inset-0 bg-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        Map would render here
                    </div>
                    {/* Simulated route */}
                    <div className="absolute left-1/4 top-1/4 right-1/4 bottom-1/4 border-2 border-red-500 rounded-lg"></div>
                    {/* Simulated markers */}
                    <div className="absolute left-1/4 top-1/4 w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="absolute right-1/4 bottom-1/4 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
            </div>
            <div className="bg-white p-4 flex justify-around items-center">
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MapPin className="h-6 w-6" />
                    <span className="sr-only">Location</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Navigation className="h-6 w-6" />
                    <span className="sr-only">Navigation</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Layers className="h-6 w-6" />
                    <span className="sr-only">Layers</span>
                </Button>
            </div>
        </div>
    )
}