import Link from "next/link";

export default function MoreButton() {
  return (
    <div className="relative inline-flex group">
      <div
        className="flash_button absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl"
      ></div>
      <Link
        passHref
        href="https://keisho.tech/"
        className="
            text-sm sm:text-base relative inline-flex items-center justify-center
            w-36 sm:w-44 md:w-56 
            h-10 sm:h-11 md:h-12 
            font-bold text-gray-900 border-2 border-gray-900 transition-all duration-200 
            bg-transparent hover:border-gray-800 rounded-full"
      >
        Show More
      </Link>
    </div>
  );
}
