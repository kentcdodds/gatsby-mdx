const { camelCase } = require("change-case");
const toStyleObject = require("to-style").object;

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
      const styleObject = toStyleObject(node.node.value.extra.rawValue, {
        camelize: true
      });
      node.node.value.value = `{${JSON.stringify(styleObject)}}`;
    }
  }
};

module.exports = function attrs() {
  return {
    visitor: {
      JSXElement: function(path, file) {
        path.traverse(nestedVisitor);
      }
    }
  };
};
