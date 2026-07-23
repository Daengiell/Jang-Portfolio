import React, { useEffect, useRef, useState } from 'react';
import { Rotate3d, Sparkles, RefreshCw } from 'lucide-react';

interface Interactive3DCubeProps {
  isDarkMode: boolean;
  className?: string;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  label?: string;
  color?: string;
}

export const Interactive3DCube: React.FC<Interactive3DCubeProps> = ({
  isDarkMode,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ rx: 0.2, ry: 0.3, rz: 0.1 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const mousePos = useRef({ x: 0, y: 0 });

  // Define 3D vertices with developer skill labels
  const baseVertices: Point3D[] = [
    { x: -100, y: -100, z: -100, label: 'WordPress', color: '#E63946' },
    { x: 100, y: -100, z: -100, label: 'PHP 8+', color: '#D51C29' },
    { x: 100, y: 100, z: -100, label: 'MySQL', color: '#A41521' },
    { x: -100, y: 100, z: -100, label: 'JavaScript', color: '#F4EDED' },
    { x: -100, y: -100, z: 100, label: 'React.js', color: '#61DAFB' },
    { x: 100, y: -100, z: 100, label: 'REST APIs', color: '#E63946' },
    { x: 100, y: 100, z: 100, label: 'Tailwind CSS', color: '#38BDF8' },
    { x: -100, y: 100, z: 100, label: 'Git & Linux', color: '#10B981' },
    // Inner core vertices
    { x: 0, y: -140, z: 0, label: 'Full Stack', color: '#E63946' },
    { x: 0, y: 140, z: 0, label: 'Security', color: '#A41521' },
    { x: 140, y: 0, z: 0, label: 'Custom Systems', color: '#D51C29' },
    { x: -140, y: 0, z: 0, label: 'Optimization', color: '#F4EDED' },
  ];

  // Cube edges connecting indices
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // Back face
    [4, 5], [5, 6], [6, 7], [7, 4], // Front face
    [0, 4], [1, 5], [2, 6], [3, 7], // Connecting edges
    // Core connections
    [8, 0], [8, 1], [8, 4], [8, 5],
    [9, 2], [9, 3], [9, 6], [9, 7],
    [10, 1], [10, 2], [10, 5], [10, 6],
    [11, 0], [11, 3], [11, 4], [11, 7],
  ];

  const rotRef = useRef(rotation);
  rotRef.current = rotation;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = 400;

      // Auto rotation
      if (autoRotate && !isDragging) {
        rotRef.current = {
          rx: rotRef.current.rx + 0.005,
          ry: rotRef.current.ry + 0.008,
          rz: rotRef.current.rz + 0.003,
        };
      }

      const { rx, ry, rz } = rotRef.current;

      // Precalculate trig values
      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      const cosZ = Math.cos(rz), sinZ = Math.sin(rz);

      // Rotate and project points
      const projectedPoints: { x: number; y: number; z: number; orig: Point3D }[] = [];

      baseVertices.forEach((p) => {
        // Rotate around X
        let y1 = p.y * cosX - p.z * sinX;
        let z1 = p.y * sinX + p.z * cosX;
        let x1 = p.x;

        // Rotate around Y
        let x2 = x1 * cosY + z1 * sinY;
        let z2 = -x1 * sinY + z1 * cosY;
        let y2 = y1;

        // Rotate around Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        // Perspective Projection
        const scaleFactor = focalLength / (focalLength + z3 + 300);
        const projX = centerX + x3 * scaleFactor;
        const projY = centerY + y3 * scaleFactor;

        projectedPoints.push({
          x: projX,
          y: projY,
          z: z3,
          orig: p,
        });
      });

      // Scale context for DPR
      ctx.save();
      ctx.scale(dpr, dpr);

      // Draw Edges
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        const p1 = projectedPoints[i];
        const p2 = projectedPoints[j];

        // Depth-based alpha
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.15, Math.min(0.85, (avgZ + 250) / 500));

        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        const primaryRed = isDarkMode ? 'rgba(213, 28, 41,' : 'rgba(230, 57, 70,';
        gradient.addColorStop(0, `${primaryRed}${alpha})`);
        gradient.addColorStop(1, isDarkMode ? `rgba(78, 73, 74, ${alpha * 0.5})` : `rgba(232, 232, 232, ${alpha * 0.5})`);

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Sort points by depth (Z-index back to front)
      const sorted = [...projectedPoints].sort((a, b) => b.z - a.z);

      let foundHover: string | null = null;

      // Draw Vertices and Labels
      sorted.forEach((p) => {
        const depthAlpha = Math.max(0.3, Math.min(1, (p.z + 250) / 450));
        const radius = Math.max(4, Math.min(10, 6 * (300 / (300 + p.z))));

        // Check hover distance
        const dx = mousePos.current.x - p.x;
        const dy = mousePos.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isHovered = dist < radius + 14;

        if (isHovered && p.orig.label) {
          foundHover = p.orig.label;
        }

        // Vertex Glow Ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, isHovered ? radius * 2 : radius * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? (isDarkMode ? 'rgba(213, 28, 41, 0.4)' : 'rgba(230, 57, 70, 0.4)')
          : (isDarkMode ? 'rgba(164, 21, 33, 0.2)' : 'rgba(255, 214, 219, 0.4)');
        ctx.fill();

        // Core Node Circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? (isDarkMode ? '#D51C29' : '#E63946')
          : (p.orig.color || (isDarkMode ? '#F4EDED' : '#1A1A1A'));
        ctx.shadowColor = isDarkMode ? '#D51C29' : '#E63946';
        ctx.shadowBlur = isHovered ? 15 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw Text Label floating in 3D
        if (p.orig.label) {
          ctx.font = `${isHovered ? 'bold 12px' : '10px'} 'JetBrains Mono', monospace`;
          ctx.fillStyle = isHovered
            ? (isDarkMode ? '#FFFFFF' : '#1A1A1A')
            : (isDarkMode ? `rgba(244, 237, 237, ${depthAlpha})` : `rgba(30, 30, 30, ${depthAlpha})`);
          ctx.textAlign = 'center';
          ctx.fillText(p.orig.label, p.x, p.y - radius - 6);
        }
      });

      setHoveredNode(foundHover);
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [autoRotate, isDarkMode, isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    mousePos.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDragging) {
      const dx = x - mousePos.current.x;
      const dy = y - mousePos.current.y;

      setRotation((prev) => ({
        rx: prev.rx + dy * 0.008,
        ry: prev.ry + dx * 0.008,
        rz: prev.rz,
      }));
    }

    mousePos.current = { x, y };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`relative w-full h-80 sm:h-96 rounded-3xl glass-card overflow-hidden border shadow-2xl ${className}`}>
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className={`px-3 py-1.5 rounded-full text-xs font-bold font-mono border flex items-center gap-1.5 pointer-events-auto ${
          isDarkMode
            ? 'bg-[#111111]/80 border-[#4E494A] text-[#D51C29]'
            : 'bg-[#FFFFFF]/80 border-[#E8E8E8] text-[#E63946]'
        }`}>
          <Rotate3d className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Interactive 3D Tech Cube</span>
        </div>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-full border transition-all cursor-pointer pointer-events-auto ${
            autoRotate
              ? (isDarkMode ? 'bg-[#A41521] text-white border-[#D51C29]' : 'bg-[#E63946] text-white border-[#E63946]')
              : (isDarkMode ? 'bg-[#2A2324] text-[#A35B62] border-[#4E494A]' : 'bg-[#FFFFFF] text-[#5F6368] border-[#E8E8E8]')
          }`}
          title={autoRotate ? 'Pause Auto Rotation' : 'Enable Auto Rotation'}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Bottom Node Inspector Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono pointer-events-none">
        <span className={`px-3 py-1 rounded-lg border ${
          isDarkMode ? 'bg-[#111111]/80 border-[#4E494A] text-[#A35B62]' : 'bg-[#FFFFFF]/80 border-[#E8E8E8] text-[#5F6368]'
        }`}>
          Drag cursor to rotate in 3D
        </span>

        {hoveredNode ? (
          <span className={`px-3 py-1 rounded-lg border font-bold animate-pulse ${
            isDarkMode ? 'bg-[#A41521]/30 border-[#D51C29] text-[#F4EDED]' : 'bg-[#FFD6DB] border-[#E63946] text-[#1A1A1A]'
          }`}>
            <Sparkles className="w-3 h-3 inline mr-1" />
            {hoveredNode}
          </span>
        ) : (
          <span className={`px-3 py-1 rounded-lg border ${
            isDarkMode ? 'bg-[#111111]/80 border-[#4E494A] text-[#D51C29]' : 'bg-[#FFFFFF]/80 border-[#E8E8E8] text-[#E63946]'
          }`}>
            Hover vertices to inspect
          </span>
        )}
      </div>
    </div>
  );
};
