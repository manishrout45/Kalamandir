"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full py-10 h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] xl:h-[620px]">

      <Image
        src="/Images/BannerImage.png"
        alt="Kalamandir Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover w-full h-full"
      />

    </section>
  );
}