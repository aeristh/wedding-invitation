"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { weddingData } from "@/data/weddingData";

interface CoverScreenProps {
    guestName: string;
    onOpen: () => void;
}

export default function CoverScreen({ guestName, onOpen }: CoverScreenProps) {
    const { groom, bride, hero, cover } = weddingData;

    return (
        <div className="h-dvh bg-neutral-900 flex items-center justify-center">
            <div className="relative w-full sm:w-[390px] h-full overflow-hidden shadow-2xl flex flex-col justify-between px-8 py-20 text-white">

                <Image src="/cover.jpg" alt={`${groom.nickname} & ${bride.nickname}`} fill className="object-cover object-center" priority />

                <div className="absolute inset-0 bg-gradient-to-b from-[#1F261A]/55 via-[#1F261A]/30 to-[#1F261A]/65" />

                <div className="absolute inset-4 border border-[#F8F4E9]/35 pointer-events-none" />

                <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-center z-10">
                    <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-white/80">
                        {hero.label}
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4 }} className="flex flex-col items-center justify-center z-10 my-auto">
                    <div className="flex items-baseline justify-center font-serif text-[90px] leading-none tracking-tighter text-white">
                        <span>{groom.initial}</span>
                        <span className="font-script text-[45px] text-white/70 mx-2 self-center font-light">
                            &amp;
                        </span>
                        <span>{bride.initial}</span>
                    </div>

                    <p className="font-serif text-xs tracking-[0.25em] uppercase text-white/85 mt-4">
                        {groom.nickname} &amp; {bride.nickname}
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="flex flex-col items-center text-center gap-3 z-10">
                    <div className="space-y-1">
                        <p className="font-serif text-[11px] tracking-wider text-white/70 italic">
                            {cover.greeting}
                        </p>
                        <p className="font-serif text-lg font-medium text-white tracking-wide">
                            {guestName}
                        </p>
                    </div>

                    <p className="text-[11px] text-white/75 leading-relaxed max-w-[260px] font-sans tracking-wide mb-2">
                        {cover.message}
                    </p>

                    <button onClick={onOpen} className="flex items-center gap-2.5 bg-[#F8F4E9] text-[#3A4530] px-7 py-3 rounded-none text-xs font-serif uppercase tracking-[0.2em] hover:bg-[#F8F4E9]/90 transition-colors shadow-sm">
                        <Mail size={13} className="opacity-90" />
                        {cover.buttonText}
                    </button>
                </motion.div>

            </div>
        </div>
    );
}
