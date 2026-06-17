"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { weddingData } from "@/data/weddingData";

function AnimatedQuote({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { duration: 2, delay, ease: "easeOut" }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function QuoteSection() {
    const { quote } = weddingData;

    return (
        <div className="relative w-full flex items-center justify-center px-10 py-14 overflow-hidden bg-[#F8F4E9]">

            <motion.div className="absolute pointer-events-none" style={{ left: "8%", top: "50%" }} animate={{ x: [0, 6, 0, -6, 0], y: [0, -8, 0, -4, 0], rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }} style={{ transformOrigin: "center" }}>
                    <Image src="/decorations/butterfly.png" alt="" width={36} height={36} style={{ transform: "scaleX(-1)" }} />
                </motion.div>
            </motion.div>

            <motion.div className="absolute pointer-events-none" style={{ right: "10%", top: "12%" }} animate={{ x: [0, -8, 0, 8, 0], y: [0, -6, 0, -10, 0], rotate: [0, -6, 0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 0.35, ease: "easeInOut", delay: 0.1 }} style={{ transformOrigin: "center" }}>
                    <Image src="/decorations/butterfly.png" alt="" width={28} height={28} />
                </motion.div>
            </motion.div>

            <motion.div className="absolute pointer-events-none" style={{ left: "52%", top: "8%" }} animate={{ x: [0, 5, 0, -5, 0], y: [0, -5, 0, 5, 0], rotate: [0, 4, 0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.28, repeat: Infinity, repeatDelay: 0.45, ease: "easeInOut", delay: 0.2 }} style={{ transformOrigin: "center" }}>
                    <Image src="/decorations/butterfly.png" alt="" width={32} height={32} />
                </motion.div>
            </motion.div>

            <div className="relative z-10 max-w-[300px] flex flex-col items-center text-center gap-6" style={{ isolation: "isolate" }}>
                <AnimatedQuote delay={0.1} className="w-full flex items-center gap-3">
                    <div className="flex-1 h-px bg-[#C9CFB4]/70" />
                    <span className="text-[#9BA384] text-lg">✦</span>
                    <div className="flex-1 h-px bg-[#C9CFB4]/70" />
                </AnimatedQuote>

                <AnimatedQuote delay={0.3} className="w-full">
                    <p className="font-serif text-sm leading-[1.9] text-[#3A4530] text-justify tracking-wide">
                        &ldquo;{quote.text}&rdquo;
                    </p>
                </AnimatedQuote>

                <AnimatedQuote delay={0.8}>
                    <p className="font-serif text-xs font-semibold tracking-[0.25em] text-[#7C8567]">
                        ({quote.source})
                    </p>
                </AnimatedQuote>

                <AnimatedQuote delay={1} className="w-full flex items-center gap-3">
                    <div className="flex-1 h-px bg-[#C9CFB4]/70" />
                    <span className="text-[#9BA384] text-lg">✦</span>
                    <div className="flex-1 h-px bg-[#C9CFB4]/70" />
                </AnimatedQuote>
            </div>
        </div>
    );
}
