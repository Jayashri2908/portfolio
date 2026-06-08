"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const techs: { name: string; c: string }[] = [
  { name: "PyTorch", c: "#ee4c2c" },
  { name: "React", c: "#61dafb" },
  { name: "Three.js", c: "#e2e8f0" },
  { name: "TypeScript", c: "#3178c6" },
  { name: "Docker", c: "#2496ed" },
  { name: "OpenCV", c: "#5c3ee8" },
  { name: "LangChain", c: "#a78bfa" },
  { name: "Tailwind", c: "#06b6d4" },
  { name: "Firebase", c: "#ffca28" },
  { name: "Next.js", c: "#e2e8f0" },
  { name: "FastAPI", c: "#10b981" },
  { name: "Python", c: "#3776ab" },
  { name: "HuggingFace", c: "#ff9a00" },
  { name: "C++", c: "#00599c" },
  { name: "Figma", c: "#f24e1e" },
  { name: "RAG", c: "#c084fc" },
  { name: "Git", c: "#f05032" },
  { name: "WebSockets", c: "#7dd3fc" },
];

type HoverState = { name: string; x: number; y: number } | null;

export default function TechStackSphere({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<HoverState>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;

    scene.add(new THREE.AmbientLight(0x404060, 0.5));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(3, 5, 5);
    scene.add(dir);

    function makeTextSprite(text: string, color: string) {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 128;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "rgba(10, 10, 20, 0.9)";
      ctx.fillRect(0, 0, 256, 128);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.strokeRect(4, 4, 248, 120);
      ctx.font = 'bold 30px ui-monospace, "JetBrains Mono", monospace';
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 128, 64);
      const tex = new THREE.CanvasTexture(c);
      tex.anisotropy = 4;
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
      const geo = new THREE.PlaneGeometry(1.2, 0.6);
      return new THREE.Mesh(geo, mat);
    }

    const group = new THREE.Group();
    scene.add(group);

    const sprites: THREE.Mesh[] = [];
    const N = techs.length;
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const t = techs[i];
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      const sprite = makeTextSprite(t.name, t.c);
      sprite.position.set(x * 2.5, y * 2.5, z * 2.5);
      group.add(sprite);
      sprites.push(sprite);
    }

    const inner = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.08 })
    );
    group.add(inner);

    const innerWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 1),
      new THREE.MeshBasicMaterial({
        color: 0x818cf8,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      })
    );
    group.add(innerWire);

    const point = new THREE.PointLight(0x818cf8, 1.5, 6);
    point.position.set(0, 0, 0);
    group.add(point);

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    let hoveredIdx: number | null = null;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const point = "touches" in e ? e.touches[0] : e;
      const rect = renderer.domElement.getBoundingClientRect();
      const x = point.clientX - rect.left;
      const y = point.clientY - rect.top;
      mouseNDC.x = (x / rect.width) * 2 - 1;
      mouseNDC.y = -(y / rect.height) * 2 + 1;
      if ("clientX" in point) {
        setHover({ name: "", x: point.clientX, y: point.clientY });
      }
    };
    const handleLeave = () => {
      hoveredIdx = null;
      setHover(null);
    };
    renderer.domElement.addEventListener("mousemove", handleMove);
    renderer.domElement.addEventListener("mouseleave", handleLeave);
    renderer.domElement.addEventListener("touchmove", handleMove, { passive: true });
    renderer.domElement.addEventListener("touchend", handleLeave);

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    handleResize();
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    let animationId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      raycaster.setFromCamera(mouseNDC, camera);
      const intersects = raycaster.intersectObjects(sprites);
      const newIdx = intersects.length > 0 ? sprites.indexOf(intersects[0].object as THREE.Mesh) : -1;
      if (newIdx !== hoveredIdx) {
        if (hoveredIdx !== null && sprites[hoveredIdx]) {
          sprites[hoveredIdx].scale.setScalar(1);
        }
        if (newIdx !== -1) {
          sprites[newIdx].scale.setScalar(1.3);
        }
        hoveredIdx = newIdx >= 0 ? newIdx : null;
        setHover((prev) => {
          if (hoveredIdx === null) return null;
          return { name: techs[hoveredIdx].name, x: prev?.x ?? 0, y: prev?.y ?? 0 };
        });
      }
      sprites.forEach((s) => s.lookAt(camera.position));
      innerWire.rotation.x = t * 0.2;
      innerWire.rotation.y = t * 0.3;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      renderer.domElement.removeEventListener("mousemove", handleMove);
      renderer.domElement.removeEventListener("mouseleave", handleLeave);
      renderer.domElement.removeEventListener("touchmove", handleMove);
      renderer.domElement.removeEventListener("touchend", handleLeave);
      controls.dispose();
      sprites.forEach((s) => {
        (s.material as THREE.MeshBasicMaterial).map?.dispose();
        (s.material as THREE.MeshBasicMaterial).dispose();
        s.geometry.dispose();
      });
      inner.geometry.dispose();
      (inner.material as THREE.MeshBasicMaterial).dispose();
      innerWire.geometry.dispose();
      (innerWire.material as THREE.MeshBasicMaterial).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {hover && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-md border border-primary/40 bg-background/90 px-2.5 py-1 font-mono text-[11px] text-foreground shadow-lg backdrop-blur"
          style={{ left: hover.x, top: hover.y - 12 }}
        >
          {hover.name}
        </div>
      )}
    </div>
  );
}
