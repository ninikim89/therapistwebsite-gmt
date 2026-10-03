'use client';

import { useEffect, useRef } from 'react';

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

// Simplex noise helper functions for soft organic ocean swell
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,
                        0.366025403784439,
                       -0.577350269189626,
                        0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

// Gentle, meditative 3D ocean swell height
float oceanHeight(vec2 p, float t, vec2 mouseNorm) {
    float h = 0.0;
    // Layer 1: Pacific gentle rhythmic swells (Santa Monica coast pacing ~6s period)
    h += sin(p.x * 1.2 + t * 0.35 + sin(p.y * 0.9 + t * 0.2)) * 0.35;
    h += sin(p.y * 1.5 - t * 0.30 + cos(p.x * 0.8 + t * 0.15)) * 0.25;
    
    // Layer 2: Subtle soft fluid caustics (very smooth, unhurried)
    vec2 p2 = p * 2.2 + vec2(t * 0.15, -t * 0.12);
    h += snoise(p2) * 0.18;

    // Interactive soft water ripple on hover
    vec2 diff = p - mouseNorm;
    float dist = length(diff);
    float mouseWave = sin(dist * 14.0 - t * 2.5) * exp(-dist * 3.5);
    h += mouseWave * 0.25;

    return h;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspectUv = uv;
    aspectUv.x *= u_resolution.x / u_resolution.y;

    vec2 mouseNorm = u_mouse / u_resolution;
    mouseNorm.x *= u_resolution.x / u_resolution.y;

    // Slow, soothing respiratory cycle
    float t = u_time * 0.35;

    // 3D Surface normal estimation via gradient for gentle lighting
    float eps = 0.012;
    float hC = oceanHeight(aspectUv, t, mouseNorm);
    float hR = oceanHeight(aspectUv + vec2(eps, 0.0), t, mouseNorm);
    float hU = oceanHeight(aspectUv + vec2(0.0, eps), t, mouseNorm);

    vec3 normal = normalize(vec3((hC - hR) * 3.2, (hC - hU) * 3.2, eps * 1.6));
    // Warm, comforting afternoon coastal sunlight
    vec3 lightDir = normalize(vec3(0.35, 0.65, 0.65));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);

    float diff = max(dot(normal, lightDir), 0.0);
    vec3 halfVec = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfVec), 0.0), 24.0);

    // Therapeutic, deeply calm and reassuring coastal palette:
    // Warm alabaster linen: #FAF8F5
    // Soft tranquil seafoam mist: #EBF5F0
    // Delicate sage whisper: #DCEBE2
    // Sunlit warm sand shimmer: #F7F1E8
    vec3 cAlabaster = vec3(0.965, 0.955, 0.930);
vec3 cSeaMist   = vec3(0.78, 0.90, 0.84);
vec3 cSagePale  = vec3(0.68, 0.82, 0.73);
vec3 cSunGleam  = vec3(1.0, 0.93, 0.74);

    // Blend water gradient based on height and position
    float depthFactor = clamp(hC * 0.65 + 0.5, 0.0, 1.0);
    vec3 color = mix(cSeaMist, cAlabaster, depthFactor);
    color = mix(color, cSagePale, clamp((normal.y * 0.5 + 0.5) * 0.22, 0.0, 0.2));

    // Delicate 3D specular highlight and sun gleam (warm, relaxing, never sharp)
    color += cSunGleam * spec * 0.55;
color += vec3(0.12, 0.32, 0.21) * diff * 0.10;

    // Interactive mouse hover subtle glow
    float distToMouse = length(aspectUv - mouseNorm);
    float mouseGlow = exp(-distToMouse * 3.8);
    color += vec3(0.25, 0.45, 0.35) * mouseGlow * 0.05;

    // Soft peripheral vignette for psychological safety & focus
    float vig = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
    vig = clamp(pow(16.0 * vig, 0.09), 0.90, 1.0);
    color = mix(vec3(0.93, 0.96, 0.94), color, vig);

    gl_FragColor = vec4(color, 1.0);
}`;

    function createShader(type: number, source: string): WebGLShader | null {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    function render(time: number) {
      if (!gl || !canvas) return;
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
   <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
}
