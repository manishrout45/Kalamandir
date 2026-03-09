"use client";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-20 left-0 w-full z-40 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">

      <div className="relative flex w-full overflow-hidden">

        {/* Marquee 1 */}
        <div className="flex animate-marquee whitespace-nowrap py-2 text-xs sm:text-sm md:text-base font-medium">

          <span className="mx-6 sm:mx-8">
            ✨ FLAT 30% OFF on Sarees – Limited Time Offer!
          </span>

          <span className="mx-6 sm:mx-8">
            💖 Buy 2 Get 1 Free on Selected Lehenga Collection
          </span>

          <span className="mx-6 sm:mx-8">
            🚚 Free Shipping on Orders Above ₹1999
          </span>

          <span className="mx-6 sm:mx-8">
            🔥 Mega Festive Sale Live Now!
          </span>

        </div>

        {/* Marquee 2 */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-2 text-xs sm:text-sm md:text-base font-medium">

          <span className="mx-6 sm:mx-8">
            ✨ FLAT 30% OFF on Sarees – Limited Time Offer!
          </span>

          <span className="mx-6 sm:mx-8">
            💖 Buy 2 Get 1 Free on Selected Lehenga Collection
          </span>

          <span className="mx-6 sm:mx-8">
            🚚 Free Shipping on Orders Above ₹1999
          </span>

          <span className="mx-6 sm:mx-8">
            🔥 Mega Festive Sale Live Now!
          </span>

        </div>

      </div>

    </div>
  );
}