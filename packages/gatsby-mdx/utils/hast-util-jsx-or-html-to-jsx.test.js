const shouldParseAsHTML = [
  `<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">some</span><span class="token punctuation">:</span> yaml
  <span class="token key atrule">another</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> list
<span class="token punctuation">-</span> of
<span class="token punctuation">-</span> things</code></pre></div>`,
  `<span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">a^2 + b^2 = c^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:0.897438em;vertical-align:-0.08333em;"></span><span class="base"><span class="mord"><span class="mord mathit">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord rule" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mord rule" style="margin-right:0.2222222222222222em;"></span><span class="mord"><span class="mord mathit">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mord"><span class="mord mathit">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>`,
  `<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>c</mi><mo>=</mo><mo>±</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt></mrow><annotation encoding="application/x-tex">c = \pm\sqrt{a^2 + b^2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.913389em;"></span><span class="strut bottom" style="height:1.04em;vertical-align:-0.12661100000000003em;"></span><span class="base"><span class="mord mathit">c</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mord">±</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.913389em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathit">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.740108em;"><span style="top:-2.9890000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord rule" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mord rule" style="margin-right:0.2222222222222222em;"></span><span class="mord"><span class="mord mathit">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.740108em;"><span style="top:-2.9890000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.873389em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,
                                                                                -10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,
                                                                                -50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,
      35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,
                                                                                -221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467
s-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422
s-65,47,-65,47z M834 80H400000v40H845z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.12661100000000003em;"></span></span></span></span></span></span></span>`,
  `<a
class="gatsby-resp-image-link"
href="/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-5f1b7.jpg"
style="display: block"
target="_blank"
rel="noopener"
>

<span
class="gatsby-resp-image-wrapper"
style="position: relative; display: block; ; max-width: 1035px; margin-left: auto; margin-right: auto;"
>
<span
class="gatsby-resp-image-background-image"
style="padding-bottom: 66.79245283018868%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGGsrmxnTE//8QAHRABAAIABwAAAAAAAAAAAAAAAQACAwQREhMhIv/aAAgBAQABBQKh05oHHt7A14aTaT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAgIDAAAAAAAAAAAAAAAAEQExAiESQaH/2gAIAQEABj8C52qiOxT4azWhlFH/xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhMUHR/9oACAEBAAE/IWWqfXoY6F8cDmmWMrQwsaK/2QyD/9oADAMBAAIAAwAAABDE7//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxBdn//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxBKFP/EAB0QAQACAgIDAAAAAAAAAAAAAAERIQBBMVFxgbH/2gAIAQEAAT8Ql6FoFrxd4sbjDJew7xLSkMTnWMGsgRYPWLCzuYlH3GEAAgrP/9k='); background-size: cover; display: block;"
>
<img
class="gatsby-resp-image-image"
style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"
alt="puppy a"
title=""
src="/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-4d160.jpg"
srcset="/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-c1f88.jpg 259w,
/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-cc56d.jpg 518w,
/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-4d160.jpg 1035w,
/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-e8059.jpg 1553w,
/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-37021.jpg 2070w,
/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-cd0ea.jpg 3105w,
/static/jc-gellidon-714673-unsplash-48aad60da74580e2fdf4aa33ab950578-5f1b7.jpg 4240w"
      sizes="(max-width: 1035px) 100vw, 1035px"
/>
</span>
</span>

</a>
                           `
];

const shouldParseAsJSX = [
  {
    raw: `<Box>some boxy stuff</Box>`,
    result: `<Box>some boxy stuff</Box>;`
  },
  {
    raw: `<div><Box>some content</Box></div>`,
    result: `<div><Box>some content</Box></div>;`
  }
];

const shouldBeUntouched = [
  { raw: `<Link to="/somewhere">`, result: null },
  { raw: `</Link>`, result: null }
];

const babel = require("@babel/core");
const jsxSyntax = require("@babel/plugin-syntax-jsx");

describe("hast-util-jsx-or-html-to-jsx", () => {
  test.each(shouldParseAsJSX)("identifies legal jsx", ({ raw, result }) => {
    expect(
      babel.transform(raw, { configFile: false, plugins: [jsxSyntax] }).code
    ).toBe(result);
  });
  test.each(shouldBeUntouched)("babel fails on half-jsx", ({ raw, result }) => {
    expect(
      () =>
        babel.transform(raw, { configFile: false, plugins: [jsxSyntax] }).code
    ).toThrow();
  });
  // this test passes and I want it to fail ugh
  test.skip.each(shouldParseAsHTML)("babel fails on actual html", raw => {
    expect(
      babel.transform(raw, { configFile: false, plugins: [jsxSyntax] }).code
    ).toBe(null);
  });

  var unified = require("unified");
  var parse = require("rehype-parse");
  var stringify = require("rehype-stringify");

  test.each(shouldParseAsHTML)("rehype succeeds on actual html", async raw => {
    await unified()
      .use(parse, { emitParseErrors: true, fragment: true })
      .use(stringify)
      .process(raw, async function(err, file) {
        expect(err).toBeNull();
        await file;
        //        console.log(String(file));
        //        expect(raw).toBe(String(file));
      });
  });
  //const toJsx = require('@mapbox/hast-util-to-jsx');

  test.each(shouldParseAsJSX)("rehype fails on jsx", async ({ raw }) => {
    await unified()
      .use(parse, { emitParseErrors: true, fragment: true })
      .use(stringify)
      .process(raw, async function(err, file) {
        expect(err).toBeNull();
        expect(file.raw).toBe(file.result);
        console.log(file);
        await file;
        //        expect(raw).toBe(String(file));
      });
  });
});

var TRANSLATIONS = {
  class: "className",
  for: "htmlFor"
};

var nestedVisitor = {
  JSXAttribute: function(node) {
    if (node.node.name.name in TRANSLATIONS) {
      node.node.name.name = TRANSLATIONS[node.node.name.name];
    } else if (
      node.node.name.name.includes("-") &&
      !node.node.name.name.startsWith("data") &&
      !node.node.name.name.startsWith("aria")
    ) {
      node.node.name.name = camelCase(node.node.name.name);
    }
    if (node.node.name.name === "style") {
      console.log("style", node.node.value.extra.rawValue);
      const styleObject = toStyleObject(node.node.value.extra.rawValue, {
        camelize: true
      });
      console.log(styleObject);
      node.node.value.value = `{${JSON.stringify(styleObject)}}`;
    }
  }
};

function attrs() {
  return {
    visitor: {
      JSXElement: function(path, file) {
        path.traverse(nestedVisitor);
      }
    }
  };
}
describe("test a plugin", () => {
  test.each(shouldParseAsHTML)("converts attrs", html => {
    expect(
      babel.transform(html, { configFile: false, plugins: [jsxSyntax, attrs] })
        .code
    ).toBe("test");
  });
});
