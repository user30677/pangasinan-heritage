interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
}

export default function Image({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
}: ImageProps) {
  const imageSrc =
    process.env.NODE_ENV === "production"
      ? `/pangasinan-heritage${src}`
      : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
    />
  );
}