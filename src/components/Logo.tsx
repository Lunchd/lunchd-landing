import Image from "next/image";

export default function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/Union.svg"
      alt="Lunchd Logo"
      width={130}
      height={40}
      className={className}
      priority
    />
  );
}
