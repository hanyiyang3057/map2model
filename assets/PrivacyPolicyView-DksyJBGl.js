import { Yt as K, Vt as q } from "./index-CmNODdig.js";
let __tla = Promise.resolve();
const html = `<h1>Privacy and data handling</h1>
<p>The reference FAQ and About pages describe Map2Model as a client-side browser tool. The selected map area and generated model are processed in the browser rather than uploaded to a Map2Model server for conversion.</p>
<h2>What stays local</h2>
<ul>
<li>The model-generation work runs in your browser.</li>
<li>Downloaded 3MF and STL files are created from the browser session.</li>
<li>No account is required for the core editor workflow described by the reference site.</li>
</ul>
<h2>External data requests</h2>
<p>The editor still needs live map, imagery, and elevation data. Normal browser requests are made to services such as OpenStreetMap-related endpoints, Mapterhorn elevation data, and optional Esri imagery when those features are used.</p>
<h2>Local reconstruction note</h2>
<p>This recovered local front end is not a full offline archive and this page is a practical summary of the captured app behavior, not an official legal privacy policy.</p>`;
const component = {
  name: "PrivacyPolicyView",
  setup(_props, { expose }) {
    expose({ frontmatter: {} });
    return () => (K(), q("div", { class: "markdown-body", innerHTML: html }));
  }
};
export { __tla, component as default };
