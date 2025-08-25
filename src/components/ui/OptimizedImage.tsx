import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  priority = false,
  style,
}: OptimizedImageProps) {
  // For SVG files or external images, use regular img tag
  if (src.endsWith(".svg") || src.startsWith("http")) {
    return <img src={src} alt={alt} className={className} style={style} />;
  }

  // If no width/height specified, use original image resolution with img tag
  if (!width && !height) {
    return <img src={src} alt={alt} className={className} style={style} />;
  }

  // For PNG/JPG files, use Next.js Image component
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes="100vw"
        style={style}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={style}
    />
  );
}
