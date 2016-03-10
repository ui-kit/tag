import Color from 'ui-kit-color/index.js';

export default function(root, props = {}) {
  var color = Color(root, props['ui-kit-color']);

  return root.get(module.id, props, {
    color: color.primary,
    hoverColor: color.primary.darken(1),
    noUnderline: true
  });
}
