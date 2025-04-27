
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
    'index.csr.html': {size: 506, hash: '5d5f2a96c28230f1030e7f740a56ac5c354c0236adf6966c340887bfb3a58d89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '94300fcb447e537cecc38e277cc3ffd78b5c2487bf662bee51db2fa6c0447534', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3780, hash: '00992efdc6004546a821636a33b2d518fe9526aac884136e2b2d3544a3a3510d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
