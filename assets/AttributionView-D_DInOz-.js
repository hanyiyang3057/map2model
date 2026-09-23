import { Yt as K, Vt as q } from "./index-CmNODdig.js";
let __tla = Promise.resolve();
const html = `<h1>Attribution &amp; credits</h1>
<p>Map2Model depends on open data, map services, elevation data, and open-source software.</p>
<h2>Map data</h2>
<ul>
<li><strong><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>.</strong> Buildings, roads, water, greenery, and other map features are provided by OpenStreetMap contributors under the Open Database License.</li>
<li><strong><a href="https://www.esri.com/" target="_blank" rel="noopener noreferrer">Esri World Imagery</a>.</strong> The optional satellite basemap uses Esri imagery, with sources that include Esri, Maxar, and Earthstar Geographics.</li>
<li><strong><a href="https://mapterhorn.com/" target="_blank" rel="noopener noreferrer">Mapterhorn</a>.</strong> Elevation data is used to shape the terrain in generated models.</li>
</ul>
<h2>Software and libraries</h2>
<ul>
<li><strong><a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">three.js</a>.</strong> Used for geometry, preview rendering, and export-related 3D work.</li>
<li><strong><a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet</a>.</strong> Used for the interactive map and area selection.</li>
<li><strong><a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">Lucide</a>.</strong> Used for interface icons.</li>
</ul>
<p>Commercial or public use of generated models may require additional review of the underlying data licenses and credits.</p>`;
const component = {
  name: "AttributionView",
  setup(_props, { expose }) {
    expose({ frontmatter: {} });
    return () => (K(), q("div", { class: "markdown-body", innerHTML: html }));
  }
};
export { __tla, component as default };
