import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.4e9424c8.mjs';
import 'html-escaper';
import { d as data, N as Navbar, C as CardProduct, F as Footer, $ as $$Layout } from './carrito.astro.f75c6caa.mjs';
/* empty css                             */import { O as OrderSummary } from './componentes.astro.b75560a8.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import 'react';

function CheckoutSingleItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  price
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      className: "card card-product card-plain d-flex mb-4",
      children: /* @__PURE__ */ jsxs("div", {
        className: "row",
        children: [/* @__PURE__ */ jsx("div", {
          className: "col-4 col-md-2",
          children: /* @__PURE__ */ jsx("img", {
            className: "w-100 max-height-100 rounded-3",
            src: `${"/Delipostres-Astro/"}${thumb_src}`,
            alt: thumb_alt
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-5 col-md-6",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "text-base mb-1",
            children: title
          }), /* @__PURE__ */ jsxs("h6", {
            className: "text-sm font-weight-bold mb-0",
            children: ["$", price.toLocaleString()]
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sm mb-0 opacity-8",
            children: color
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "col-2",
          children: /* @__PURE__ */ jsxs("div", {
            className: "d-block d-md-flex align-items-center",
            children: [/* @__PURE__ */ jsx("button", {
              className: "btn btn-link text-dark d-block d-md-none",
              children: /* @__PURE__ */ jsx("i", {
                className: "fas fa-pen"
              })
            }), /* @__PURE__ */ jsx("button", {
              className: "btn btn-dark btn-sm d-none d-md-block",
              children: "Remover"
            })]
          })
        })]
      })
    })
  });
}
__astro_tag_component__(CheckoutSingleItem, "@astrojs/react");

function CheckoutSummary({
  products
}) {
  let subtotalCheckout = 0;
  products.map((product) => subtotalCheckout += product.price);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("section", {
      className: "bg-gray-100 px-2",
      children: /* @__PURE__ */ jsxs("div", {
        className: "row",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "col-12 col-lg-6 p-3 p-md-5",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "mb-4",
            children: "información de contacto"
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group",
            children: [/* @__PURE__ */ jsx("label", {
              children: "Nombre"
            }), /* @__PURE__ */ jsx("input", {
              type: "text",
              className: "form-control",
              placeholder: "Ingresa tu nombre"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group",
            children: [/* @__PURE__ */ jsx("label", {
              children: "Correo electrónico"
            }), /* @__PURE__ */ jsx("input", {
              type: "email",
              className: "form-control",
              placeholder: "Ingrese su correo electrónico"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group",
            children: [/* @__PURE__ */ jsx("label", {
              children: "Número de teléfono"
            }), /* @__PURE__ */ jsx("input", {
              type: "text",
              className: "form-control",
              placeholder: "Ingresa tu número de teléfono"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group",
            children: [/* @__PURE__ */ jsx("label", {
              children: "Ciudad"
            }), /* @__PURE__ */ jsx("input", {
              type: "text",
              className: "form-control",
              placeholder: "Ingresa la ciudad"
            })]
          }), /* @__PURE__ */ jsx(OrderSummary, {
            title: "Shipping Information"
          }), /* @__PURE__ */ jsx("button", {
            className: "btn btn-dark w-100 mt-4",
            children: "Continuar"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-12 col-lg-6 p-lg-5",
          children: [/* @__PURE__ */ jsx("small", {
            className: "opacity-6",
            children: "Cantidad"
          }), /* @__PURE__ */ jsxs("h3", {
            className: "mb-5",
            children: ["$", subtotalCheckout.toLocaleString()]
          }), products.map((product, i) => /* @__PURE__ */ jsx(CheckoutSingleItem, {
            thumb_src: product.thumb_src,
            thumb_alt: product.thumb_alt,
            title: product.title,
            color: product.color,
            price: product.price
          }))]
        })]
      })
    })
  });
}
__astro_tag_component__(CheckoutSummary, "@astrojs/react");

const $$Astro = createAstro("https://Al791ex.github.io");
const $$Pago = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pago;
  let cartItems = [];
  data.shoppingCart.map(
    (id) => data.products.filter((x) => x.id == id).map((x) => cartItems.push(x))
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizaci\xF3n del Pago" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main>
    ${renderComponent($$result2, "Navbar", Navbar, {})}

    ${renderComponent($$result2, "CheckoutMultiStep", CheckoutSummary, { "products": cartItems })}
    
    <div class="container mt-5">
      <div class="row">
        <h5 class="mb-4">Tambien te pordría gustar</h5>
        ${data.products.sort(() => Math.random() - 0.5).slice(0, 4).map(
    (product) => renderTemplate`<div class="col-md-6 col-lg-3">
              ${renderComponent($$result2, "CardProduct", CardProduct, { "id": product.id, "category": product.category, "sizes": product.sizes, "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "title": product.title, "price": product.price, "position": "left" })}
            </div>`
  )}
      </div>
      <hr class="dark horizontal my-5">
      ${renderComponent($$result2, "Footer", Footer, {})}
    </div>
  </main>

` })}`;
}, "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/pago.astro", void 0);

const $$file = "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/pago.astro";
const $$url = "/Delipostres-Astro/pago";

export { $$Pago as default, $$file as file, $$url as url };
