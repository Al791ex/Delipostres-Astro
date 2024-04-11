import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.4e9424c8.mjs';
import 'html-escaper';
import { N as Navbar, d as data, C as CardProduct, F as Footer, $ as $$Layout } from './carrito.astro.f75c6caa.mjs';
/* empty css                             */import 'react/jsx-runtime';
import 'react';

const $$Astro = createAstro("https://Al791ex.github.io");
const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Productos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Productos" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main>
    ${renderComponent($$result2, "Navbar", Navbar, {})}
    <div class="container mt-5">   

      <div class="row">
        <h1 class="mb-4">Nuestros Productos</h1>
        <div id="DGalletas">
          <h2>Galletas</h2>
        </div>
  
        <hr class="dark horizontal my-2">
  
        <div class="container mt-3"></div>
        <div class="row">
          ${data.products.filter((product) => product.category === "Galletas").map((product) => renderTemplate`<div class="col-md-6 col-lg-3">
          ${renderComponent($$result2, "CardProduct", CardProduct, { "id": product.id, "category": product.category, "sizes": product.sizes, "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "title": product.title, "price": product.price, "position": "left" })}
            </div>`)}
        </div>
      <div class="row">
        
        <div id="DTortas">
          <h2>Tortas</h2>
        </div>
  
        <hr class="dark horizontal my-2">
  
        <div class="container mt-3"></div>
        <div class="row">
          ${data.products.filter((product) => product.category === "Tortas").map((product) => renderTemplate`<div class="col-md-6 col-lg-3">
          ${renderComponent($$result2, "CardProduct", CardProduct, { "id": product.id, "category": product.category, "sizes": product.sizes, "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "title": product.title, "price": product.price, "position": "left" })}
            </div>`)}
        </div>
        
        <div id="DPostres">
          <h2>Postres Tradicionales</h2>
        </div>
  
        <hr class="dark horizontal my-2">
  
        <div class="container mt-3"></div>
        <div class="row">
          ${data.products.filter((product) => product.category === "Postres Tradicionales").map((product) => renderTemplate`<div class="col-md-6 col-lg-3">
          ${renderComponent($$result2, "CardProduct", CardProduct, { "id": product.id, "category": product.category, "sizes": product.sizes, "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "title": product.title, "price": product.price, "position": "left" })}
            </div>`)}
        </div>
        
      </div>

      ${renderComponent($$result2, "Footer", Footer, {})}
      
    </div>
  </div></main>

` })}`;
}, "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/productos.astro", void 0);

const $$file = "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/productos.astro";
const $$url = "/Delipostres-Astro/productos";

export { $$Productos as default, $$file as file, $$url as url };
