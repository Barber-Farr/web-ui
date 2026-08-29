import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export const BrandLogo = ({ className = "", priority = false }: BrandLogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/barber-farr-logo.png"
        alt="Barber Farr — Classic Cuts and Technical Trims"
        fill
        priority={priority}
        sizes="(max-width: 639px) 96px, 112px"
        quality={65}
        className="object-contain dark:hidden"
      />

      <Image
        src="/images/barber-farr-logo-white-text-v2.png"
        alt="Barber Farr — Classic Cuts and Technical Trims"
        fill
        priority={priority}
        sizes="(max-width: 639px) 96px, 112px"
        quality={65}
        className="hidden object-contain dark:block"
      />
    </div>
  );
};
