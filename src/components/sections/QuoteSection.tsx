"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

const particles = [
    { left: "10%", top: "15%", size: 8, duration: 6, delay: 0 },
    { left: "80%", top: "10%", size: 6, duration: 7, delay: 0.5 },
    { left: "30%", top: "30%", size: 5, duration: 5, delay: 1 },
    { left: "70%", top: "40%", size: 7, duration: 8, delay: 0.3 },
    { left: "15%", top: "60%", size: 6, duration: 6.5, delay: 1.5 },
    { left: "90%", top: "70%", size: 8, duration: 7.5, delay: 0.8 },
    { left: "50%", top: "80%", size: 5, duration: 6, delay: 0.2 },
    { left: "40%", top: "55%", size: 4, duration: 5.5, delay: 1.2 },
];

export default function QuoteSection() {
    const { quote } = weddingData;

    return (
        <div className="relative w-full flex items-center justify-center px-12 py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #E9EAEC 0%, #D4D7DA 50%, #C2C6CA 100%)", }}>
            {particles.map((p, i) => (
                <motion.div key={i} className="absolute rounded-full bg-white pointer-events-none" style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: 0.7, filter: "blur(1px)", }} animate={{ y: [0, -16, 0], opacity: [0.4, 0.9, 0.4], }} transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay, }} />
            ))}

            <div className="relative z-10 max-w-[300px] flex flex-col items-center text-center gap-6">

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="font-serif italic text-sm leading-relaxed text-[#3A3633]">
                    &ldquo;{quote.text}&rdquo;
                </motion.p>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="font-serif text-xs font-semibold tracking-[0.2em] text-[#5C5651]">
                    ({quote.source})
                </motion.p>

            </div>
        </div>
    );
}