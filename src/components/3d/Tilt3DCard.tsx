import React, { useState, useRef, MouseEvent, TouchEvent } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (e.g. 15)
  perspective?: number; // Perspective distance in px (e.g. 1000)
  scale?: number; // Scale on hover (e.g. 1.03)
  speed?: number; // Transition speed in ms
  glare?: boolean; // Enable specular light sheen overlay
  glowColor?: string; // Color of dynamic subtle border glow
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  maxTilt = 14,
  perspective = 1000,
  scale = 1.025,
  glare = true,
  glowColor = 'rgba(213, 28, 41, 0.25)',
  onClick,
  style = {},
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate normalized coords (-1 to 1)
    const normalizedX = (mouseX / width) * 2 - 1;
    const normalizedY = (mouseY / height) * 2 - 1;

    // RotateX is inverted relative to Y coordinate
    const rotX = -normalizedY * maxTilt;
    const rotY = normalizedX * maxTilt;

    setTilt({ x: rotX, y: rotY });

    // Glare position in percentages
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;

    setGlarePosition({
      x: glareX,
      y: glareY,
      opacity: 0.35,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = touch.clientX - rect.left;
    const mouseY = touch.clientY - rect.top;

    const normalizedX = (mouseX / rect.width) * 2 - 1;
    const normalizedY = (mouseY / rect.height) * 2 - 1;

    setTilt({
      x: -normalizedY * (maxTilt * 0.7),
      y: normalizedX * (maxTilt * 0.7),
    });
  };

  const transformStyle = isHovered
    ? `perspective(${perspective}px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      onClick={onClick}
      className={`relative transition-transform duration-200 ease-out preserve-3d cursor-pointer ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        boxShadow: isHovered
          ? `0 20px 40px -15px ${glowColor}, 0 0 25px -5px ${glowColor}`
          : '0 4px 20px rgba(0, 0, 0, 0.05)',
        ...style,
      }}
    >
      {/* Specular Glare Overlay */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.08) 45%, transparent 80%)`,
            opacity: glarePosition.opacity,
          }}
        />
      )}

      {/* Children content with preserve-3d */}
      <div className="relative z-10 h-full w-full preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
};
