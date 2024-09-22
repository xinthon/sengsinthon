import React from "react";

export default function WithSwoosh() {
  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-100 origin-bottom-right scale-75 bg-transparent bg-[url('https://storage.googleapis.com/candycode/bg.png')] bg-[length:100%_100%] bg-no-repeat pl-[256px] pt-[96px] leading-none sm:scale-100">
      <a
        href="https://www.linkedin.com/in/seng-sinthon-285905256"
        target="_blank"
        rel="noopener noreferrer"
        className="group pointer-events-auto relative inline-flex w-full flex-col items-center justify-center gap-[4px] p-[16px]"
      >
        <span className="whitespace-nowrap font-simple text-[11px] uppercase tracking-[0.125em] text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white"></span>
      </a>
    </div>
  );
}
