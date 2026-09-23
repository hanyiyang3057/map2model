import { Yt as K, Vt as q } from "./index-CmNODdig.js";
let __tla = Promise.resolve();
const html = `<h1>Commercial use</h1>
<p>The reference commercial-use page says Map2Model is free for personal projects, but generated models are not allowed for commercial use unless you have a separate license.</p>
<p>That includes selling prints, accepting paid commissions, using models in client work, or using them for other for-profit projects. Commercial ideas are handled by direct discussion rather than automatic permission.</p>
<h2>Request a license</h2>
<p>For a one-off run, a product, a commission workflow, or a larger commercial plan, contact <a href="mailto:map2model@gmail.com">map2model@gmail.com</a> to discuss licensing.</p>
<h2>Data credits still apply</h2>
<p>Any commercial arrangement still needs to respect the underlying map, imagery, and elevation data licenses. See the <a href="./attribution">attribution page</a> for the data and library credits.</p>`;
const component = {
  name: "CommercialLicenseView",
  setup(_props, { expose }) {
    expose({ frontmatter: {} });
    return () => (K(), q("div", { class: "markdown-body", innerHTML: html }));
  }
};
export { __tla, component as default };
