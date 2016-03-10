import Typography from 'ui-kit-typography/index.js';

export default function(root, props) {
  props = props || {};

  var typography = Typography(root, {
    along: props.fontSize
  });

  return root.get(module.id, props, {
    fontSize: typography.along
  });
};
