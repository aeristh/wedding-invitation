"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/weddingData";

interface FloatingFlowerProps {
    src: string;
    size: number;
    style: React.CSSProperties;
    fallOffsetX?: number;
    fallDelay?: number;
    idleDuration?: number;
    idleDelay?: number;
    swing?: number;
}

interface FlowerFallAnimationProps {
    src: string;
    size: number;
    fallOffsetX: number;
    fallDelay: number;
    idleDuration: number;
    idleDelay: number;
    swing: number;
}

function FlowerFallAnimation({
    src,
    size,
    fallOffsetX,
    fallDelay,
    idleDuration,
    idleDelay,
    swing,
}: FlowerFallAnimationProps) {
    const [landed, setLanded] = useState(false);

    return (
        <motion.div
            initial={{ y: -240, x: fallOffsetX, opacity: 0, rotate: -30, scale: 0.5 }}
            animate={
                landed
                    ? {
                        y: [0, -9, 0, -4, 0],
                        x: [0, swing / 2, 0, -swing / 2, 0],
                        rotate: [0, swing, 0, -swing, 0],
                    }
                    : { y: 0, x: 0, opacity: 1, rotate: 0, scale: 1 }
            }
            transition={
                landed
                    ? { duration: idleDuration, repeat: Infinity, ease: "easeInOut", delay: idleDelay }
                    : { duration: 1.5, delay: fallDelay, ease: [0.22, 1, 0.36, 1] }
            }
            onAnimationComplete={() => {
                if (!landed) setLanded(true);
            }}
        >
            <Image src={src} alt="" width={size} height={size} className="opacity-90" />
        </motion.div>
    );
}

function FloatingFlower({
    src,
    size,
    style,
    fallOffsetX = 0,
    fallDelay = 0,
    idleDuration = 6,
    idleDelay = 0,
    swing = 6,
}: FloatingFlowerProps) {
    const [playKey, setPlayKey] = useState(0);

    return (
        <motion.div className="absolute pointer-events-none z-20" style={style} viewport={{ once: false, amount: 0.2 }} onViewportEnter={() => setPlayKey((k) => k + 1)}>
            <FlowerFallAnimation key={playKey} src={src} size={size} fallOffsetX={fallOffsetX} fallDelay={fallDelay} idleDuration={idleDuration} idleDelay={idleDelay} swing={swing} />
        </motion.div>
    );
}
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
        <div className="w-full flex flex-col items-center px-6 pt-16 pb-10 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #F8F4E9 0%, #ECF0DC 60%, #DCE3C8 100%)", }}>
            <div className="relative z-30">
                <motion.div className="absolute pointer-events-none z-20" style={{ left: "-30px", top: "-20px" }} animate={{ x: [0, 6, 0, -6, 0], y: [0, -8, 0, -4, 0], rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }} style={{ transformOrigin: "center" }}>
                        <Image src="/decorations/butterfly.png" alt="" width={30} height={30} />
                    </motion.div>
                </motion.div>

                <motion.div className="absolute pointer-events-none z-20" style={{ right: "-25px", top: "-15px" }} animate={{ x: [0, -6, 0, 6, 0], y: [0, -6, 0, -10, 0], rotate: [0, -5, 0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
                    <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.28, repeat: Infinity, repeatDelay: 0.38, ease: "easeInOut", delay: 0.1 }} style={{ transformOrigin: "center" }}>
                        <Image src="/decorations/butterfly.png" alt="" width={26} height={26} style={{ transform: "scaleX(-1)" }} />
                    </motion.div>
                </motion.div>

                <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }} className="font-script text-4xl text-[#3A4530] mb-8 text-center">
                    {loveStory.title}
                </motion.h2>
            </div>

            <div className="relative z-30 w-full max-w-[260px]">

                <motion.div initial={{ opacity: 0, y: 60, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }} className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-neutral-900">
                    <AnimatePresence>
                        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute inset-0">
                            <Image src={current.image} alt={current.title} fill className="object-cover object-center" />

                            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, #333D2A 0%, #333D2A 25%, rgba(51,61,42,0.65) 45%, rgba(51,61,42,0.25) 65%, rgba(51,61,42,0) 85%)", }} />

                            <div className="absolute bottom-0 left-0 right-0 px-6 pb-7 text-center">
                                <h3 className="font-script text-3xl text-white mb-1.5">
                                    {current.title}
                                </h3>
                                <p className="text-[11px] text-white/85 leading-relaxed">
                                    {current.description}
                                </p>
                            </div>

                            <div className="absolute bottom-3 right-0 left-0 flex justify-center gap-1.5">
                                {loveStory.items.map((_, i) => (
                                    <button key={i} onClick={() => setIndex(i)} className="transition-all" style={{ width: i === index ? "16px" : "6px", height: "6px", borderRadius: "3px", background: i === index ? "white" : "rgba(255,255,255,0.45)", }} aria-label={`Slide ${i + 1}`} />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <motion.div className="absolute pointer-events-none z-30" style={{ bottom: "-40px", right: "-40px" }} initial={{ rotate: -16 }} animate={{ rotate: [-16, -20, -16], x: [0, -2, 0], y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                    <motion.div animate={{ scaleX: [1, 0.6, 1] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut", }} style={{ transformOrigin: "center" }}>
                        <Image src="/decorations/butterfly-green.png" alt="" width={96} height={75} />
                    </motion.div>
                </motion.div>
                <FloatingFlower src="/decorations/sage-flor.png" size={16} style={{ top: "1%", left: "10%" }} fallOffsetX={-35} fallDelay={0.2} idleDuration={6} swing={6} />
                <FloatingFlower src="/decorations/pink-flor.png" size={22} style={{ top: "15%", right: "8%" }} fallOffsetX={45} fallDelay={0.7} idleDuration={7} idleDelay={1.2} swing={7} />
                <FloatingFlower src="/decorations/sage-flor.png" size={14} style={{ top: "30%", left: "3%" }} fallOffsetX={-25} fallDelay={1.1} idleDuration={6.5} idleDelay={0.4} swing={5} />
                <FloatingFlower src="/decorations/pink-flor.png" size={20} style={{ top: "45%", right: "2%" }} fallOffsetX={30} fallDelay={1.5} idleDuration={7.5} idleDelay={1.8} swing={6} />
                <FloatingFlower src="/decorations/pink-flor.png" size={18} style={{ top: "60%", left: "6%" }} fallOffsetX={30} fallDelay={0.4} idleDuration={6.8} idleDelay={0.4} swing={6} />
                <FloatingFlower src="/decorations/sage-flor.png" size={24} style={{ top: "78%", right: "10%" }} fallOffsetX={-40} fallDelay={0.9} idleDuration={7.2} idleDelay={1.0} swing={7} />
                <FloatingFlower src="/decorations/pink-flor.png" size={14} style={{ top: "93%", left: "30%" }} fallOffsetX={25} fallDelay={1.3} idleDuration={6.2} idleDelay={1.6} swing={5} />
            </div>
        </div>
    );
}