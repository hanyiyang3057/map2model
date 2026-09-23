import { Yt as K, Vt as q } from "./index-CmNODdig.js";
let __tla = Promise.resolve();
const html = `<h1>About Map2Model</h1>
<p>Map2Model is a free browser tool for turning real places into 3D printable models. Choose a city, coastline, mountain range, or any other area on the map, generate the model in the browser, then export a multicolor 3MF or a merged STL for your slicer.</p>
<p>The goal is to remove the usual CAD and mesh-repair work from map-to-model printing. You search for a place, draw an area, generate the geometry, and download a file that is already oriented for printing.</p>
<h2>What makes it different</h2>
<ul>
<li><strong>Free, no signup.</strong> The reference site describes Map2Model as free to use with no account, paywall, or watermark.</li>
<li><strong>Runs in your browser.</strong> The model generation workflow is client-side, so the selected area and generated model are processed on your machine.</li>
<li><strong>Cities and terrain.</strong> It can build city models from OpenStreetMap features and terrain models from elevation data.</li>
<li><strong>3MF and STL export.</strong> Use 3MF for separated colors and materials, or STL when you want one merged body.</li>
<li><strong>Print-focused output.</strong> Models are intended to slice cleanly in tools such as Bambu Studio, OrcaSlicer, PrusaSlicer, and Cura.</li>
</ul>
<p><a href="./">Open the editor</a></p>`;
const component = {
  name: "AboutView",
  setup(_props, { expose }) {
    expose({ frontmatter: {} });
    return () => (K(), q("div", { class: "markdown-body", innerHTML: html }));
  }
};
export { __tla, component as default };
