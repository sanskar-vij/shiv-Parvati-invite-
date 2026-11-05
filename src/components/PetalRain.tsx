import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'rose' | 'jasmine' | 'gold';
}

export const PetalRain: React.FC<{ isEnabled: boolean }> = ({ isEnabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = {
      rose: ['#FF758F', '#FF4D6D', '#E5383B', '#FFB3C1', '#C9184A'],
      jasmine: ['#FFE9EC', '#FFD9E0', '#FDEBC8', '#FFF0D6'],
      gold: ['#C9A227', '#B8860B', '#D4AF37'],
    };

    const petalCount = Math.min(35, Math.floor(width / 35));
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const typeChoice = Math.random();
      const type: 'rose' | 'jasmine' | 'gold' =
        typeChoice < 0.6 ? 'rose' : typeChoice < 0.85 ? 'jasmine' : 'gold';
      const colorPalette = colors[type];
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.8 + 0.6,
        speedX: (Math.random() - 0.5) * 0.7,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.4,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        type,
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      if (p.type === 'rose') {
        // Heart/petal teardrop shape
        ctx.fillStyle = p.color;
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size, -p.size * 0.7, -p.size * 0.7, p.size, 0, p.size * 1.2);
        ctx.bezierCurveTo(p.size * 0.7, p.size, p.size, -p.size * 0.7, 0, 0);
        ctx.fill();
      } else if (p.type === 'jasmine') {
        // Small 4-lobed blush jasmine flower (visible on white)
        ctx.fillStyle = p.color;
        ctx.strokeStyle = 'rgba(180, 120, 90, 0.55)';
        ctx.lineWidth = 0.8;
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2);
          ctx.beginPath();
          ctx.ellipse(0, p.size * 0.4, p.size * 0.2, p.size * 0.45, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.fillStyle = '#C9871F';
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.15, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Celestial 4-pointed golden sparkle
        ctx.fillStyle = p.color;
        const s = p.size * 0.45;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.fill();
        // Central bright star core
        ctx.fillStyle = '#FFFDF5';
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.28, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    let tick = 0;
    const render = () => {
      tick += 0.01;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(tick + p.y * 0.01) * 0.4;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.85 }}
    />
  );
};
