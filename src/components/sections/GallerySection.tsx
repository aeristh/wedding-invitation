"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import Lightbox from "@/components/ui/Lightbox";

export default function GallerySection() {
    const { gallery } = weddingData;
    const [selected, setSelected] = useState<string | null>(null);

    const aspectRatios = ["4/5", "1/1", "1/1", "4/5", "4/5", "1/1", "1/1", "4/5"];

    return (
        <div id="gallery" className="relative w-full flex flex-col items-center px-6 pt-24 pb-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #DCE3C8 0%, #ECF0DC 40%, #F0F3E3 60%, #F3F5E9 80%, #F7F8F0 100%)" }}>
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

                <motion.h2 initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeOut" }} className="font-script text-4xl text-[#3A4530] mb-3 text-center">
                    {gallery.title}
                </motion.h2>

                <motion.p initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="text-sm text-[#5C6650] text-center max-w-[280px] mb-8">
                    {gallery.videoCaption}
                </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeOut" }} className="relative w-full max-w-[85vw] sm:max-w-[300px] aspect-video rounded-2xl overflow-hidden shadow-md bg-neutral-900 mb-12">
                <video src={gallery.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>

            <div className="w-full max-w-[85vw] sm:max-w-[300px] text-center mb-8">
                <motion.h3 initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 1, ease: "easeOut" }} className="font-script text-3xl text-[#3A4530] mb-2">
                    {gallery.photoGalleryTitle}
                </motion.h3>
                <motion.p initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 1, delay: 0.15, ease: "easeOut" }} className="text-sm text-[#5C6650]">
                    {gallery.photoGallerySubtitle}
                </motion.p>
            </div>

            <div className="w-full max-w-[85vw] sm:max-w-[300px]" style={{ columnCount: 2, columnGap: "0.75rem" }}>
                {gallery.photos.map((photo, i) => (
                    <motion.button key={photo + i} onClick={() => setSelected(photo)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: (i % 4) * 0.1 }} className="relative block w-full mb-3 overflow-hidden rounded-xl transition-transform active:scale-95" style={{ aspectRatio: aspectRatios[i % aspectRatios.length], breakInside: "avoid", }}>
                        <Image src={photo} alt="" fill className="object-cover object-center" />
                    </motion.button>
                ))}
            </div>
            <Lightbox src={selected} onClose={() => setSelected(null)} />
        </div>
    );
}
