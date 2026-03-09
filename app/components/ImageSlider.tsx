"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full aspect-video bg-slate-100 overflow-hidden group/slider select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Image
        key={current}
        src={images[current]}
        alt={`${title} ${current + 1}`}
        fill
        className="object-cover object-top"
        draggable={false}
      />

      {images.length > 1 && (
        <>
          {/* 左右ボタン：PCはhover時、SPは常時表示 */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity"
            aria-label="前の画像"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity"
            aria-label="次の画像"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* ドットインジケーター */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "bg-white w-4" : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
