import { ReactNode } from "react";
import NoiseFilter from "@/components/NoiseFilter";
import FullscreenMenu from "@/components/MenuButton";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative w-hull h-svh bg-[#50929C]">
      {/* NoiseFilter */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <NoiseFilter />
      </div>
      <FullscreenMenu />
      {children}
    </div>
  );
}
