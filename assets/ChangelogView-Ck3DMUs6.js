import { Yt as K, Vt as q } from "./index-CmNODdig.js";
let __tla = Promise.resolve();
const html = `<h1>Changelog</h1>
<p>No public changelog page was available at the matching reference route. This local page records the practical state of the recovered front end.</p>
<h2>Local reconstruction</h2>
<ul>
<li>Restored the captured app shell, main bundle, mesh creator bundle, and primary CSS.</li>
<li>Restored the Turf worker file and kept the inline Turf fallback path in place.</li>
<li>Added populated informational route chunks for FAQ, About, Attribution, Commercial Use, MakerLab Commercial Use, Privacy, Terms, and this page.</li>
</ul>
<h2>Known limits</h2>
<p>The app still depends on live third-party map, elevation, terrain, tile, and imagery services. If those services change, rate-limit, or block requests, parts of the editor may fail even though the local files load correctly.</p>`;
const component = {
  name: "ChangelogView",
  setup(_props, { expose }) {
    expose({ frontmatter: {} });
    return () => (K(), q("div", { class: "markdown-body", innerHTML: html }));
  }
};
export { __tla, component as default };
