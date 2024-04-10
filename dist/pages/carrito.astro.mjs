export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import '../chunks/astro.4e9424c8.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../chunks/pages/carrito.astro.f75c6caa.mjs').then(n => n.c);

export { page };
