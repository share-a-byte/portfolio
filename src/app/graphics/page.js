import GraphicsDemo from "@/components/graphicsdemo";

export default function Graphics() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-4xl text-cyan-200 font-bold flex justify-center mb-10">
        My Graphics
      </h1>

      <div className="grid grid-cols-3 gap-6 w-full">
        <GraphicsDemo
          explanation={
            <ul>
              <li>Constructed a 2D model using geometry.</li>
              <li>Moved computation from the CPU to the GPU.</li>
            </ul>
          }
          path="/graphics_demo/gpu_jitter/index.html"
          expTop={true}
        />
        <GraphicsDemo
          title="3D Model Viewer"
          path="/graphics_demo/orbits/orbits.html"
        />

        <GraphicsDemo
          title="3D Model Viewer"
          path="/graphics_demo/textures/textures.html"
          expTop={true}
        />
      </div>
    </div>
  );
}
