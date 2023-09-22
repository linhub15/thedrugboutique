import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import minify_html from "lume/plugins/minify_html.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
  location: new URL("https://thedrugboutique.com"),
});

site.use(jsx_preact());
site.use(minify_html());
site.use(sitemap());
site.use(tailwindcss());
site.use(postcss());

export default site;
