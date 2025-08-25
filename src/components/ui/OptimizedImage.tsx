import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  fill = false,
  priority = false,
  ...props
}: OptimizedImageProps) {
  // For SVG files or external images, use regular img tag
  if (src.endsWith('.svg') || src.startsWith('http')) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        {...props}
      />
    )
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
        {...props}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      {...props}
    />
  )
}