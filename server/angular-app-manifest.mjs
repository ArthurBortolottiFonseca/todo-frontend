
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/todo-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/todo-frontend"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 506, hash: '63ae573ec89be0ab4fa406354f78c1cf526ccb86a587743274f5f280458347f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: 'a85e04133d81374cb0b56e0c213476d7828dd698a3615ff0cb1e32bb0121f6fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3157, hash: '600fb5ad6978f7069fbfcaca0d83f8fa292ec51e123ec3abec616c468bec4c55', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
