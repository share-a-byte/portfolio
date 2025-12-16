import GraphicsDemo from "@/components/graphicsdemo";

export default function Graphics() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-4xl text-cyan-200 font-bold flex justify-center mb-10">
        My Graphics
      </h1>

      <h1 className="text-lg mb-10 text-center italic">
        A from-scratch WebGL2 rendering pipeline. By avoiding graphics
        frameworks, this project explores how real-time systems are built around
        data pipelines, parallel GPU execution, and precise mathematical
        transformations.
      </h1>

      <div className="grid grid-cols-3 gap-6 w-full">
        <GraphicsDemo
          explanation={
            <ul>
              <li>Constructed a 2D model geometry from scratch.</li>
              <li>
                Reframed sequential CPU logic as SIMD-style GPU computation
              </li>
            </ul>
          }
          path="/graphics_demo/gpu_jitter/index.html"
          expTop={true}
        />
        <GraphicsDemo
          explanation={
            <ul>
              <li>Complex matrix geometry</li>
              <li>Simulated solar system to scale</li>
            </ul>
          }
          path="/graphics_demo/orbits/orbits.html"
        />

        <GraphicsDemo
          explanation={
            <ul>
              <li>Generating large synthetic 3D datasets.</li>
              <li>Mapping 1D data to higher dimensions.</li>
            </ul>
          }
          path="/graphics_demo/textures/textures.html"
          expTop={true}
        />
      </div>
      <div className="flex justify-center space-x-16 mt-20">
        <div className="w-fit max-w-lg">
          <GraphicsDemo
            explanation={
              <ul>
                <li>
                  Interactive control with a dynamic 3D environment, based on
                  mathematical principles.
                </li>
                <li>Managing interactive 3D lighting.</li>
              </ul>
            }
            path="/graphics_demo/drive/drive.html"
            expTop={true}
          />
        </div>
        <GraphicsDemo
          explanation={
            <ul>
              <li>Custom parser for 3D geometries in a variety of formats.</li>
            </ul>
          }
          path="/graphics_demo/obj/test.html"
        />
      </div>
    </div>
  );
}
