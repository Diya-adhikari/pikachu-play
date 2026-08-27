import { useEffect, useRef } from 'react';

const LIFE = 0.62;          // seconds a burst lasts
const CRACKLE = 0.055;      // seconds between re-jitters
const BOLTS = 13;

function boltPath(x0, y0, x1, y1, depth, spread) {
  let pts = [[x0, y0], [x1, y1]];
  for (let d = 0; d < depth; d++) {
    const next = [pts[0]];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i];
      const [bx, by] = pts[i + 1];
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      const nx = -(by - ay);
      const ny = bx - ax;
      const len = Math.hypot(nx, ny);
      const jitter = (Math.random() - 0.5) * spread * len;
      next.push([mx + (nx / len) * jitter, my + (ny / len) * jitter]);
      next.push([bx, by]);
    }
    pts = next;
  }
  return pts;
}

export default function Lightning() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function drawBolt() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 2;
      for (let i = 0; i < BOLTS; i++) {
        const path = boltPath(
          canvas.width / 2, canvas.height / 2,
          Math.random() * canvas.width, Math.random() * canvas.height,
          5, 0.3
        );
        ctx.beginPath();
        ctx.moveTo(path[0][0], path[0][1]);
        for (let j = 1; j < path.length; j++) {
          ctx.lineTo(path[j][0], path[j][1]);
        }
        ctx.stroke();
      }
    }

    const interval = setInterval(drawBolt, CRACKLE * 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="background-effect"
    />
  );
}
