import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function decodeMesh(buffer) {
  if (buffer.byteLength < 8) throw new Error("Mesh payload is incomplete.");
  const header = new DataView(buffer);
  const vertexCount = header.getUint32(0, true);
  const triangleCount = header.getUint32(4, true);
  const positionsLength = vertexCount * 3;
  const indicesLength = triangleCount * 3;
  const expected = 8 + positionsLength * Float32Array.BYTES_PER_ELEMENT + indicesLength * Uint32Array.BYTES_PER_ELEMENT;
  if (buffer.byteLength !== expected) throw new Error("Mesh payload has an unexpected size.");
  return {
    positions: new Float32Array(buffer, 8, positionsLength),
    indices: new Uint32Array(buffer, 8 + positionsLength * Float32Array.BYTES_PER_ELEMENT, indicesLength),
  };
}

export function InteractiveModel({ mesh, theme }) {
  const mount = useRef(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    const target = mount.current;
    const controller = new AbortController();
    let cleanup = () => {};
    setState("loading");

    async function build() {
      try {
        const response = await fetch(mesh.url, { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("The interactive mesh has expired.");
        const { positions, indices } = decodeMesh(await response.arrayBuffer());
        if (controller.signal.aborted) return;

        const scene = new THREE.Scene();
        const dark = theme === "dark";
        scene.background = new THREE.Color(dark ? "#11181b" : "#e8ebeb");
        const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 100000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        target.replaceChildren(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setIndex(new THREE.BufferAttribute(indices, 1));
        geometry.computeVertexNormals();
        geometry.rotateX(-Math.PI / 2);
        geometry.computeBoundingBox();
        const center = geometry.boundingBox.getCenter(new THREE.Vector3());
        geometry.translate(-center.x, -center.y, -center.z);
        geometry.computeBoundingBox();
        const size = geometry.boundingBox.getSize(new THREE.Vector3());
        const span = Math.max(size.x, size.y, size.z, 1);

        const material = new THREE.MeshStandardMaterial({
          color: dark ? "#8faec0" : "#b7ccda",
          roughness: 0.48,
          metalness: 0.08,
        });
        const model = new THREE.Mesh(geometry, material);
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(geometry, 28),
          new THREE.LineBasicMaterial({ color: dark ? "#142229" : "#29414e", transparent: true, opacity: 0.82 }),
        );
        scene.add(model, edges);
        scene.add(new THREE.HemisphereLight(dark ? "#d4ebf2" : "#fbffff", dark ? "#142027" : "#7d8790", 2.2));
        const key = new THREE.DirectionalLight("#ffffff", 2.8);
        key.position.set(span * 1.3, span * 1.7, span * 2.1);
        scene.add(key);
        const fill = new THREE.DirectionalLight(dark ? "#5f94ad" : "#789aaa", 1.1);
        fill.position.set(-span * 1.5, span * .7, -span);
        scene.add(fill);

        camera.position.set(span * 1.35, span, span * 1.45);
        camera.near = span / 1000;
        camera.far = span * 1000;
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = false;
        controls.screenSpacePanning = true;
        controls.target.set(0, 0, 0);
        controls.minDistance = span * 0.15;
        controls.maxDistance = span * 12;
        controls.update();

        const render = () => renderer.render(scene, camera);
        const resize = () => {
          const { clientWidth, clientHeight } = target;
          if (!clientWidth || !clientHeight) return;
          camera.aspect = clientWidth / clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(clientWidth, clientHeight, false);
          render();
        };
        const observer = new ResizeObserver(resize);
        observer.observe(target);
        controls.addEventListener("change", render);
        resize();
        setState("ready");

        cleanup = () => {
          observer.disconnect();
          controls.removeEventListener("change", render);
          controls.dispose();
          geometry.dispose();
          material.dispose();
          edges.geometry.dispose();
          edges.material.dispose();
          renderer.dispose();
          target.replaceChildren();
        };
      } catch (error) {
        if (!controller.signal.aborted) setState(error.message || "Unable to load interactive mesh.");
      }
    }

    build();
    return () => { controller.abort(); cleanup(); };
  }, [mesh.id, mesh.url, theme]);

  return (
    <div className="interactive-model" ref={mount}>
      {state === "loading" && <div className="model-overlay">Preparing interactive geometry…</div>}
      {state !== "loading" && state !== "ready" && <div className="model-overlay error">{state}</div>}
    </div>
  );
}
