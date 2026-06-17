"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/sections/HeroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CoupleSection from "@/components/sections/CoupleSection";
import StorySection from "@/components/sections/StorySection";
import GallerySection from "@/components/sections/GallerySection";
import DateSection from "@/components/sections/DateSection";
import RsvpSection from "@/components/sections/RsvpSection";
// import RsvpStatSection from "@/components/sections/RsvpStatSection";
import LocationSection from "@/components/sections/LocationSection";
import GiftSection from "@/components/sections/GiftSection";
import WishesSection from "@/components/sections/WishesSection";
import FooterSection from "@/components/sections/FooterSection";
// import BottomNav from "@/components/ui/BottomNav";
import CoverScreen from "@/components/sections/CoverScreen";
import { weddingData } from "@/data/weddingData";

function HomeContent() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || weddingData.cover.defaultGuest;

  if (!isOpen) {
    return <CoverScreen guestName={guestName} onOpen={() => setIsOpen(true)} />;
  }

  return (
    <div className="bg-neutral-900 flex justify-center min-h-screen">
      <main className="relative w-[390px] max-w-full shadow-2xl">
        <HeroSection />
        <QuoteSection />
        <CoupleSection />
        <StorySection />
        <GallerySection />
        <DateSection />
        {/* <RsvpStatSection /> */}
        <RsvpSection />
        <LocationSection />
        <GiftSection />
        <WishesSection />
        <FooterSection />
        {/* <BottomNav /> */}
      </main>

    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}