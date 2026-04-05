import React from "react";
export default function Banner() {
  return (
    <section className="relative w-full py-10 h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] xl:h-[620px]">

      <img
        src="/Images/BannerImage.png"
        alt="Kalamandir Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

    </section>
  );
}