import { useState } from "react";
import { Spinner } from "react-bootstrap";

type LazyImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
};

export function LazyImage({
  src,
  alt,
  className,
  width,
  height,
}: LazyImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="position-relative d-inline-block">
      {loading && (
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75">
          <Spinner animation="border" variant="secondary" />
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
