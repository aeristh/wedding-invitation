"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function HeroSection() {
    const { groom, bride, event, hero } = weddingData;

    return (
        <div className="relative w-full h-screen overflow-hidden bg-neutral-900">

            <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute inset-0">
                <Image src={hero.image} alt={`${groom.nickname} & ${bride.nickname}`} fill className="object-cover object-center" priority />
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="absolute inset-0 bg-gradient-to-b from-[#1F261A]/25 via-[#1F261A]/35 to-[#1F261A]/55" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">

                <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }} className="font-serif text-xs tracking-[0.35em] uppercase mb-6">
                    {hero.label}
                </motion.p>

                <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className="relative flex items-center justify-center mb-4" style={{ height: "110px", width: "120px" }}>
                    <span className="absolute font-serif text-8xl font-light" style={{ left: "0px", top: "0px", lineHeight: 1 }}>
                        {groom.initial}
                    </span>
                    <span className="absolute font-serif text-8xl font-light" style={{ right: "0px", bottom: "0px", lineHeight: 1 }}>
                        {bride.initial}
                    </span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 1.1, ease: "easeOut" }} style={{ lineHeight: 1.2, fontWeight: 400 }} className="font-serif text-[2.5rem] tracking-wide mb-4">
                    {groom.nickname} &amp; {bride.nickname}
                </motion.h1>

                <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1, delay: 1.6, ease: "easeOut" }} className="w-16 h-px bg-white/60 mb-4" />

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.9, ease: "easeOut" }} className="font-serif text-sm tracking-[0.4em] text-white/90">
                    {event.displayDate}
                </motion.p>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.4 }} className="absolute bottom-10 flex flex-col items-center gap-2">
                    <div className="w-6 h-10 border border-white/60 rounded-full flex items-start justify-center p-1">
                        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-2 bg-white/80 rounded-full" />
                    </div>
                    <p className="text-xs tracking-widest uppercase text-white/60">
                        {hero.scrollText}
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
