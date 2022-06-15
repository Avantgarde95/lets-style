const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  basePath: process.env.BASE_PATH,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
