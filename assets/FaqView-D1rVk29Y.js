import { Yt as K, Vt as q } from "./index-CmNODdig.js";
let __tla = Promise.resolve();
const html = `<h1>Frequently asked questions</h1>
<p>Common questions about turning a map into a printable 3D model with Map2Model.</p>
<h2>How do I 3D print a map of my city?</h2>
<p>Open the editor, search for your city or pan to it, draw the area you want, then generate the model. Export a multicolor 3MF or a single STL and open the file in your slicer.</p>
<h2>Is Map2Model free?</h2>
<p>Yes. The reference site describes Map2Model as free, with no signup, no account requirement, and no watermark on generated downloads.</p>
<h2>What file formats does it export?</h2>
<p>Map2Model exports multicolor 3MF files with separate colors for terrain, buildings, water, roads, greenery, and the frame. It can also export a merged binary STL for one-piece printing.</p>
<h2>Can I print terrain or mountains, not just cities?</h2>
<p>Yes. The terrain workflow uses elevation data over the selected area, so the same editor can create topographic terrain prints, mountain ranges, valleys, or city models.</p>
<h2>Where does the map data come from?</h2>
<p>Buildings, roads, water, and greenery come from OpenStreetMap. Terrain elevation comes from Mapterhorn. The optional satellite basemap uses Esri World Imagery.</p>
<h2>Does it work without installing software?</h2>
<p>Yes. The map-to-3D conversion runs in the browser, with no desktop app or plugin installation required.</p>
<h2>Will the model print in color?</h2>
<p>A multicolor 3MF keeps each generated part separated by color, which slicers such as Bambu Studio, OrcaSlicer, PrusaSlicer, and Cura can use for multi-material printing. A single-extruder printer can still print the same geometry in one color.</p>`;
const component = {
  name: "FaqView",
  setup(_props, { expose }) {
    expose({ frontmatter: {} });
    return () => (K(), q("div", { class: "markdown-body", innerHTML: html }));
  }
};
export { __tla, component as default };
