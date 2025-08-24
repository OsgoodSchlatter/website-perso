// src/LandingPage.tsx
import React from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    Music,
    Atom,
    Umbrella,
    Dumbbell,
} from "lucide-react"; // icons

type LifeAspect = {
    name: string;
    icon: React.ReactNode;
    color: string;
};

const aspects: LifeAspect[] = [
    { name: "Work", icon: <Briefcase size={40} />, color: "bg-blue-500" },
    { name: "Hobby", icon: <Music size={40} />, color: "bg-pink-500" },
    { name: "Science", icon: <Atom size={40} />, color: "bg-green-500" },
    { name: "Holidays", icon: <Umbrella size={40} />, color: "bg-yellow-500" },
    { name: "Sport", icon: <Dumbbell size={40} />, color: "bg-red-500" },
];

const FloatingIcon: React.FC<{ aspect: LifeAspect; index: number }> = ({
    aspect,
    index,
}) => {
    const floatAnimation = {
        y: ["0%", "10%", "0%"],
        x: ["0%", index % 2 === 0 ? "5%" : "-5%", "0%"],
        transition: {
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <motion.div
            animate={floatAnimation as any}
            className={`flex flex-col items-center p-4 rounded-2xl text-white shadow-lg cursor-pointer ${aspect.color}`}
            whileHover={{ scale: 1.15 }}
        >
            {aspect.icon}
            <span className="mt-2 font-semibold">{aspect.name}</span>
        </motion.div>
    );
};

const LandingPage: React.FC = () => {
    return (
        <div className="relative h-screen w-full bg-gradient-to-br from-purple-800 to-indigo-900 overflow-hidden flex items-center justify-center">
            <div className="absolute top-4 text-center w-full">
                <h1 className="text-white text-4xl font-bold">Life Dashboard</h1>
                <p className="text-white opacity-80">Explore different aspects of your life</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 z-10">
                {aspects.map((aspect, index) => (
                    <FloatingIcon key={index} aspect={aspect} index={index} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;