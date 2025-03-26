"use client"

import Image from 'next/image';

export default function SplashScreen() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#F4F3E1]">
            <div className="logo mb-4">
                <Image src="/KeishoTech.png" alt="Logo" width={64} height={64} className="animate-bounce"/>
            </div>
            <div className="animate-pulse text-center">
              <div className="text-gray-500 text-lg">Loading...</div>
              <div className="text-gray-500 text-sm">※スマホでの使用を想定しています</div>
            </div>
        </div>
    );
}