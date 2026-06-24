"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LightboxProps {
    src: string | null;
    onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
    return (
        <AnimatePresence>
            {src && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6" onClick={onClose}>
                    <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="relative w-full max-w-[340px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <Image src={src} alt="" fill className="object-cover object-center" />
                    </motion.div>

                    <button onClick={onClose} className="absolute top-6 right-6 text-white/80 hover:text-white" aria-label="Close">
                        <X size={28} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}