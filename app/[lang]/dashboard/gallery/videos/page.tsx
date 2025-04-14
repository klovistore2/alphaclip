"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function Try() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Image optimisée avec Cloudinary */}
      <CldImage
        alt="Logo"
        src="cld-sample-5" // <-- ID public Cloudinary (vérifie bien dans Media Library)
        width={400}
        height={400}
      />

      {/* Fallback avec <Image /> et URL Cloudinary directe */}
      <Image
        src="https://res.cloudinary.com/dwgtpzjpw/image/upload/v1744578633/cld-sample-5.jpg"
        alt="fallback"
        width={400}
        height={400}
      />
    </div>
  );
}