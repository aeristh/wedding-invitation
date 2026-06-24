"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Music, Music2 } from "lucide-react";

export interface MusicPlayerHandle {
    play: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerHandle>((_, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            audioRef.current?.play();
            setIsPlaying(true);
        },
    }));

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <button onClick={toggleMusic} aria-label="Toggle music" className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:text-white shadow-2xl transition-colors">
                {isPlaying ? <Music2 size={18} /> : <Music size={18} />}
            </button>
            <audio ref={audioRef} src="/music.mp3" loop />
        </>
    );
});

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;