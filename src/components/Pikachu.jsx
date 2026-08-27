import { useEffect, useRef } from 'react';

export default function Pikachu({ muted = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    fetch('/frames/frames.json')
      .then(res => res.json())
      .then(data => {
        const sprite = new Image();
        sprite.src = '/frames/' + data.char.file;

        let frameIndex = data.char.idle[0];
        const idleStart = data.char.idle[0];
        const idleEnd = data.char.idle[1];
        const giggleStart = data.char.giggle[0];
        const giggleEnd = data.char.giggle[1];
        const walkStart = data.char.walk[0];
        const walkEnd = data.char.walk[1];

        const cols = data.char.cols;
        const cellW = data.char.cell[0];
        const cellH = data.char.cell[1];

        let posX = 100, posY = 200;
        let targetX = 100, targetY = 200;

        function drawFrame(index) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const sx = (index % cols) * cellW;
          const sy = Math.floor(index / cols) * cellH;

          // Glow aura
          ctx.beginPath();
          ctx.arc(posX + 100, posY + 100, 120, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 200, 0, 0.3)';
          ctx.fill();

          // Draw Pikachu frame
          ctx.drawImage(sprite, sx, sy, cellW, cellH, posX, posY, 200, 200);
        }

        // Smooth follow loop
    function followMouse() {
  posX += (targetX - posX) * 0.1;
  posY += (targetY - posY) * 0.1;

  // Keep Pikachu in idle frame (no head spin)
  frameIndex = idleStart;

  drawFrame(frameIndex);
  requestAnimationFrame(followMouse);
}


        // Mouse tracking
        window.addEventListener('mousemove', (e) => {
          targetX = e.clientX - 100; // offset so Pikachu centers on cursor
          targetY = e.clientY - 100;
        });

        // Giggle on click
        function handleClick() {
          let giggleFrame = giggleStart;
          const giggleInterval = setInterval(() => {
            drawFrame(giggleFrame);
            giggleFrame++;
            if (giggleFrame > giggleEnd) {
              clearInterval(giggleInterval);
              frameIndex = idleStart;
            }
          }, 150);

          if (!muted) {
            const audio = new Audio('/frames/giggle.mp3');
            audio.volume = 0.8;
            audio.play().catch(err => {
              console.error("Audio playback failed:", err);
            });
          }
        }

        canvas.addEventListener('click', handleClick);

        sprite.onload = () => {
          followMouse();
        };

        function resize() {
          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
          drawFrame(frameIndex);
        }
        resize();
        window.addEventListener('resize', resize);

        // Cleanup
        return () => {
          canvas.removeEventListener('click', handleClick);
          window.removeEventListener('resize', resize);
          window.removeEventListener('mousemove', () => {});
        };
      });
  }, [muted]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '400px', position: 'relative', zIndex: 10 }}
    />
  );
}
