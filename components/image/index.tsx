'use client';

import NextImage, { type ImageProps } from 'next/image';
import React, { type FC, useState } from 'react';

type Props = ImageProps & {
  alt: string;
  fallbackSrc?: string;
};

const defaultFallbackImage =
  'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NzAgLTgwKSI+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNpcmNsZSBjeD0iNTc5IiBjeT0iOTIiIHI9IjIiPjwvY2lyY2xlPjxwb2x5Z29uIHBvaW50cz0iNTkwLjkwOCw4NiA1OTAuMzE1LDg4IDU5NSw4OCA1OTUsMTAzIDU4NS44NzEsMTAzIDU4NS4yNzgsMTA1IDU5NywxMDUgNTk3LDg2ICAgIj48L3BvbHlnb24+PHBhdGggZD0iTTU4Ni4xNjcsMTAySDU4OGg2di0yLjg1N2MtMS45OTctMi43NzYtMi45NTQtNi42NTctNC44ODMtNy4wOThMNTg2LjE2NywxMDJ6Ij48L3BhdGg+PHBhdGggZD0iTTU4OC4wNDEsODEuNzE2TDU4Ni43NzEsODZINTczdjE5aDguMTQzbC0xLjEwMiwzLjcxNmwxLjkxOCwwLjU2OGw4LTI3TDU4OC4wNDEsODEuNzE2eiBNNTgzLjMxLDk3LjY4MiAgICBjLTAuNjY4LTAuODYxLTEuMzQtMS4zOTYtMi4wNi0xLjM5NmMtMS45NTUsMC0yLjY3NCw0LjE1Ny01LjI1LDQuOTk5VjEwMmgyLjI1aDMuNzgxbC0wLjI5NiwxSDU3NVY4OGgxMS4xOEw1ODMuMzEsOTcuNjgyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+';

/**
 * A versatile image component that extends Next.js's Image component to include fallback functionality.
 * If the primary image fails to load, it will attempt to use a fallback image.
 * If no fallback image is provided, a default SVG image will be used.
 *
 * @param src - The source URL of the image.
 * @param alt - The alt text for the image.
 * @param width - The width of the image.
 * @param height - The height of the image.
 * @param fallbackSrc - Optional URL for the fallback image if the primary image fails.
 * @param className - Optional CSS class name to apply to the image.
 * @param rest - Additional props to pass to the NextImage component.
 * @returns A NextImage component with fallback capabilities.
 */
export const Image: FC<Props> = ({ src, fallbackSrc, className, ...rest }: Props) => {
  const [imgFail, setImgFail] = useState(false);
  const [oldSrc, setOldSrc] = useState(src);

  if (oldSrc !== src) {
    setImgFail(false);
    setOldSrc(src);
  }

  if (!fallbackSrc && imgFail) {
    return <NextImage {...rest} src={defaultFallbackImage} />;
  }

  return (
    <NextImage
      {...rest}
      src={imgFail ? (fallbackSrc ? fallbackSrc : defaultFallbackImage) : src}
      className={className}
      onError={() => setImgFail(true)}
    />
  );
};
