"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function LocationSection() {
    const { event } = weddingData;

    return (
        <div className="relative w-full flex flex-col items-center bg-[#F8F4E9] px-0 py-20">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="w-full h-[260px] mb-12">
                <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(event.resepsi.address)}&output=embed`} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Acara" />
            </motion.div>

            <div className="w-full flex flex-col items-center px-8 gap-14">

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="w-full max-w-[300px] flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-5 w-full">
                        <div className="flex-1 h-px bg-[#C9CFB4]/60" />
                        <h2 className="font-script text-3xl text-[#3A4530]">Akad Nikah</h2>
                        <div className="flex-1 h-px bg-[#C9CFB4]/60" />
                    </div>

                    <p className="text-sm text-[#3A4530] font-medium mb-1">{event.akad.date}</p>

                    <div className="flex items-center gap-1.5 text-sm text-[#5C6650] mb-2">
                        <Clock size={14} />
                        <span>{event.akad.time}</span>
                    </div>

                    <div className="flex items-start gap-1.5 text-sm text-[#5C6650] mb-6 max-w-[280px]">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#7C8567]" />
                        <span>{event.akad.location}, {event.akad.address}</span>
                    </div>

                    <a href={event.akad.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#C9CFB4] rounded-full px-6 py-2.5 text-xs uppercase tracking-wider text-[#3A4530] hover:bg-[#45523A]/5 transition-colors">
                        See Location
                        <ExternalLink size={12} />
                    </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="w-full max-w-[300px] flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-5 w-full">
                        <div className="flex-1 h-px bg-[#C9CFB4]/60" />
                        <h2 className="font-script text-3xl text-[#3A4530]">Resepsi</h2>
                        <div className="flex-1 h-px bg-[#C9CFB4]/60" />
                    </div>

                    <p className="text-sm text-[#3A4530] font-medium mb-1">{event.resepsi.date}</p>

                    <div className="flex items-center gap-1.5 text-sm text-[#5C6650] mb-2">
                        <Clock size={14} />
                        <span>{event.resepsi.time}</span>
                    </div>

                    <div className="flex items-start gap-1.5 text-sm text-[#5C6650] mb-6 max-w-[280px]">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#7C8567]" />
                        <span>{event.resepsi.location}, {event.resepsi.address}</span>
                    </div>

                    <a href={event.resepsi.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#C9CFB4] rounded-full px-6 py-2.5 text-xs uppercase tracking-wider text-[#3A4530] hover:bg-[#45523A]/5 transition-colors">
                        See Location
                        <ExternalLink size={12} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}