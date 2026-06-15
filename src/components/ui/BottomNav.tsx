"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Images, CalendarHeart, MapPin, MessageCircleHeart, Music, Music2 } from "lucide-react";

const navItems = [
    { id: "couple", label: "Couple", icon: Heart },
    { id: "gallery", label: "Gallery", icon: Images },
    { id: "date", label: "Date", icon: CalendarHeart },
    { id: "location", label: "Location", icon: MapPin },
    { id: "wishes", label: "Wishes", icon: MessageCircleHeart },
];

export default function BottomNav() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeId, setActiveId] = useState("");
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setActiveId(id);
        }
    };

    return (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-[390px] max-w-full px-3 pb-3 flex items-center gap-2">
            <div className="flex flex-1 items-center justify-between rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-2 py-2 shadow-2xl">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeId === item.id;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            aria-label={item.label}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${isActive
                                ? "bg-white text-neutral-900"
                                : "text-white/70 hover:text-white"
                                }`} >
                            <Icon size={16} strokeWidth={1.5} />
                            {isActive && (
                                <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} transition={{ duration: 0.25 }} className="text-xs font-medium whitespace-nowrap overflow-hidden">
                                    {item.label}
                                </motion.span>
                            )}
                        </a>
                    );
                })}
            </div>

            <button onClick={toggleMusic} className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 hover:text-white shadow-2xl shrink-0" aria-label="Toggle music">
                {isPlaying ? <Music2 size={16} /> : <Music size={16} />}
            </button>

            <audio ref={audioRef} src="/music.mp3" loop />
        </nav>
    );
}