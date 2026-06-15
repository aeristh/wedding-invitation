"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function StorySection() {
    const { loveStory } = weddingData;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % loveStory.items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [loveStory.items.length]);

    const current = loveStory.items[index];

    return (
        <div className="w-full bg-[#FBF9F6] flex flex-col items-center px-6 py-20">

            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-script text-4xl text-[#2C2A29] mb-8 text-center">
                {loveStory.title}
            </motion.h2>

            <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-neutral-900">
                <AnimatePresence>
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute inset-0">
                        <Image src={current.image} alt={current.title} fill className="object-cover object-center" />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/70 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 text-center">
                            <h3 className="font-script text-3xl text-[#7B2D42] mb-2">
                                {current.title}
                            </h3>
                            <p className="text-[11px] text-[#5C5651] leading-relaxed">
                                {current.description}
                            </p>
                        </div>

                        <div className="absolute bottom-3 right-4 text-xs text-[#9C958B] font-medium">
                            {index + 1}/{loveStory.items.length}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
