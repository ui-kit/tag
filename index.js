import A from './a/index.js';
import Body from './body/index.js';
import Html from './html/index.js';

export default function(root, props) {
  props = props || {};

  var a = A(root, props.a);
  var body = Body(root, props.body)
  var html = Html(root, props.html)

  return root.get(module.id, props, {
    a: a,
    body: body,
    html: html
  });
};
