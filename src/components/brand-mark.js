import Image from "next/image";

export default function BrandMark({ compact = false }) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden shadow-sm ${
        compact ? "size-11 rounded-md" : "size-[72px] rounded-xl"
      }`}
      aria-hidden="true"
    >
      <Image
        className="size-full object-cover"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.ico`}
        alt=""
        width={2048}
        height={2048}
        sizes={compact ? "44px" : "72px"}
      />
    </span>
  );
}
