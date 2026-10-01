import { useEffect, useRef } from 'react';

/* ══════════════════════════════════════════════
   Vagalumes — Canvas particle system
   Pequenas partículas laranja/âmbar flutuantes
   que pulsam e se movem suavemente pelo site.
   ══════════════════════════════════════════════ */

const COUNT      = 55;    // número de vagalumes
const MIN_R      = 1.2;   // raio mínimo em px
const MAX_R      = 2.8;   // raio máximo em px
const MIN_SPEED  = 0.12;  // velocidade mínima
const MAX_SPEED  = 0.38;  // velocidade máxima
const PULSE_MIN  = 0.008; // velocidade de pulso (opacidade)
const PULSE_MAX  = 0.018;

/* Paleta laranja/âmbar */
const COLORS = [
  'rgba(255, 110,  20,',  // laranja vivo
  'rgba(255, 145,  40,',  // laranja médio
  'rgba(255, 180,  60,',  // âmbar
  'rgba(255, 200,  80,',  // âmbar claro
  'rgba(255,  90,   0,',  // laranja fundo
];

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function createFirefly(w, h) {
  const angle = Math.random() * Math.PI * 2;
  const speed = rand(MIN_SPEED, MAX_SPEED);
  return {
    x:       Math.random() * w,
    y:       Math.random() * h,
    r:       rand(MIN_R, MAX_R),
    vx:      Math.cos(angle) * speed,
    vy:      Math.sin(angle) * speed,
    opacity: rand(0.1, 0.7),
    opDir:   Math.random() > 0.5 ? 1 : -1,
    opSpeed: rand(PULSE_MIN, PULSE_MAX),
    color:   COLORS[Math.floor(Math.random() * COLORS.length)],
    glowR:   rand(6, 18),    // raio do glow
    wander:  rand(0.002, 0.006), // ângulo de desvio aleatório
    wanderT: 0,
  };
}

export default function Fireflies() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = window.innerWidth;
    let h = document.body.scrollHeight;
    let rafId;
    let flies = Array.from({ length: COUNT }, () => createFirefly(w, h));

    function resize() {
      w = window.innerWidth;
      h = document.body.scrollHeight;
      canvas.width  = w;
      canvas.height = h;
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (const f of flies) {
        /* ── Pulso de opacidade ── */
        f.opacity += f.opDir * f.opSpeed;
        if (f.opacity >= 0.75) { f.opacity = 0.75; f.opDir = -1; }
        if (f.opacity <= 0.05) { f.opacity = 0.05; f.opDir =  1; }

        /* ── Movimento com desvio suave (wander) ── */
        f.wanderT += f.wander;
        f.vx += Math.sin(f.wanderT * 3.7) * 0.005;
        f.vy += Math.cos(f.wanderT * 2.9) * 0.005;

        /* Limitar velocidade máxima */
        const spd = Math.sqrt(f.vx * f.vx + f.vy * f.vy);
        if (spd > MAX_SPEED) {
          f.vx = (f.vx / spd) * MAX_SPEED;
          f.vy = (f.vy / spd) * MAX_SPEED;
        }

        f.x += f.vx;
        f.y += f.vy;

        /* Wrap nas bordas */
        if (f.x < -20) f.x = w + 20;
        if (f.x > w + 20) f.x = -20;
        if (f.y < -20) f.y = h + 20;
        if (f.y > h + 20) f.y = -20;

        /* ── Glow externo ── */
        const grd = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.glowR);
        grd.addColorStop(0,   `${f.color}${(f.opacity * 0.9).toFixed(3)})`);
        grd.addColorStop(0.4, `${f.color}${(f.opacity * 0.4).toFixed(3)})`);
        grd.addColorStop(1,   `${f.color}0)`);
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        /* ── Núcleo brilhante ── */
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `${f.color}${Math.min(f.opacity + 0.25, 1).toFixed(3)})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        1,          /* atrás de todo conteúdo */
        opacity:       0.65,
      }}
      aria-hidden="true"
    />
  );
}
