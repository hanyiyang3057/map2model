import { Yt as K, Vt as q } from "./index-CmNODdig.js";
let __tla = Promise.resolve();
const html = `<h1>MakerLab commercial use</h1>
<p>No separate MakerLab commercial-use page was available on the reference site. This page follows the general Map2Model commercial-use guidance.</p>
<p>Personal projects are free. Selling generated prints, accepting paid commissions, using generated models in client work, or using them for other for-profit work requires a separate license.</p>
<h2>Contact</h2>
<p>For commercial plans, contact <a href="mailto:map2model@gmail.com">map2model@gmail.com</a> and describe the intended use, distribution, print volume, and whether the output will be sold or used for client work.</p>
<h2>Attribution</h2>
<p>Keep the underlying data sources credited. See the <a href="./attribution">attribution page</a> for OpenStreetMap, Esri World Imagery, Mapterhorn, and library credits.</p>`;
const component = {
  name: "MakerLabCommercialUseView",
  setup(_props, { expose }) {
    expose({ frontmatter: {} });
    return () => (K(), q("div", { class: "markdown-body", innerHTML: html }));
  }
};
export { __tla, component as default };
