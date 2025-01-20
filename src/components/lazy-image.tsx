import { useState } from "react";

export function LazyImage({
    src,
    alt,
    className,
    width,
    height,
  }: {
    src: string;
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
  }) {
    const [loading, setLoading] = useState(true);
  
    return (
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-600" />
          </div>
        )}
  
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </div>
    );
  }