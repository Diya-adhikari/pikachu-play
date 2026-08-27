import { useEffect } from 'react';

export default function SplashCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.position = 'absolute';
    cursor.style.border = '2px solid yellow';
    cursor.style.borderRadius = '50%';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.pointerEvents = 'none';
    cursor.style.transition = 'transform 0.1s ease';
    document.body.appendChild(cursor);

    function move(e) {
      cursor.style.left = e.pageX - 10 + 'px';
      cursor.style.top = e.pageY - 10 + 'px';
      cursor.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cursor.style.transform = 'scale(1)';
      }, 100);
    }

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // nothing to render, effect handles DOM
}
