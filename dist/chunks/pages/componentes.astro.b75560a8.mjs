import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.4e9424c8.mjs';
import 'html-escaper';
import { d as data, N as Navbar, S as ShoppingCart, F as Footer, $ as $$Layout } from './carrito.astro.f75c6caa.mjs';
/* empty css                             */import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

function OrderSummary$4() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "form-group",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Número de teléfono"
      }), /* @__PURE__ */ jsx("input", {
        type: "number",
        className: "form-control",
        placeholder: "Ingresa tu número de teléfono"
      })]
    })
  });
}
__astro_tag_component__(OrderSummary$4, "@astrojs/react");

function OrderSummary$3({}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "form-group",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Dirección"
      }), /* @__PURE__ */ jsx("input", {
        type: "text",
        className: "form-control",
        placeholder: "Calle, número"
      })]
    })
  });
}
__astro_tag_component__(OrderSummary$3, "@astrojs/react");

function OrderSummary$2({}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "form-check",
      children: [/* @__PURE__ */ jsx("input", {
        className: "form-check-input",
        type: "checkbox",
        value: "",
        checked: true
      }), /* @__PURE__ */ jsx("label", {
        className: "custom-control-label",
        children: "Misma información de envío"
      })]
    })
  });
}
__astro_tag_component__(OrderSummary$2, "@astrojs/react");

function OrderSummary$1({
  products
}) {
  let subtotalCheckout = 0;
  products.map((product) => subtotalCheckout += product.price);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("li", {
      className: "mt-2",
      children: /* @__PURE__ */ jsxs("div", {
        className: "d-flex justify-content-between",
        children: [/* @__PURE__ */ jsx("p", {
          className: "opacity-8",
          children: "Subtotal"
        }), /* @__PURE__ */ jsxs("h3", {
          className: "mb-5",
          children: ["$", subtotalCheckout.toLocaleString()]
        })]
      })
    })
  });
}
__astro_tag_component__(OrderSummary$1, "@astrojs/react");

function CheckoutSingleItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  price
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "d-flex mb-4",
      children: [/* @__PURE__ */ jsx("img", {
        className: "w-20 rounded-3",
        src: `${"/Delipostres-Astro/"}${thumb_src}`,
        alt: thumb_alt
      }), /* @__PURE__ */ jsxs("div", {
        className: "w-60 w-md-70 pt-2 ps-3 ps-md-4",
        children: [/* @__PURE__ */ jsx("h6", {
          className: "text-lg text-white mb-1",
          children: title
        }), /* @__PURE__ */ jsx("p", {
          className: "mb-0 text-white opacity-8",
          children: color
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-10 text-end",
        children: /* @__PURE__ */ jsxs("p", {
          className: "text-white mb-0 ",
          children: ["$", price.toLocaleString()]
        })
      })]
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
      children: /* @__PURE__ */ jsxs("div", {
        className: "row",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "col-12 col-lg-6 p-3 p-md-5 bg-gray-100",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "mb-4",
            children: "Información de contacto"
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group",
            children: [/* @__PURE__ */ jsx("label", {
              children: "Dirección de correo"
            }), /* @__PURE__ */ jsx("input", {
              type: "email",
              className: "form-control",
              placeholder: "Ingresa la dirección de correo"
            })]
          }), /* @__PURE__ */ jsx("h5", {
            className: "mt-5 mb-4",
            children: "Dirección de envío"
          }), /* @__PURE__ */ jsx(OrderSummary$3, {}), /* @__PURE__ */ jsx("h5", {
            className: "mt-5 mb-4",
            children: "Detalles de pago"
          }), /* @__PURE__ */ jsx(OrderSummary$4, {}), /* @__PURE__ */ jsx("h5", {
            className: "mt-5 mb-4",
            children: "Facturación"
          }), /* @__PURE__ */ jsx(OrderSummary$2, {}), /* @__PURE__ */ jsx("hr", {
            className: "dark horizontal"
          }), /* @__PURE__ */ jsxs("button", {
            className: "btn btn-dark float-end mt-2 mb-0",
            children: [/* @__PURE__ */ jsxs("svg", {
              className: "me-1",
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/* @__PURE__ */ jsx("path", {
                d: "M2.80039 2.80005C2.02719 2.80005 1.40039 3.42685 1.40039 4.20005V4.90005H12.6004V4.20005C12.6004 3.42685 11.9736 2.80005 11.2004 2.80005H2.80039Z",
                fill: "white"
              }), /* @__PURE__ */ jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M12.6004 6.30005H1.40039V9.80005C1.40039 10.5733 2.02719 11.2 2.80039 11.2H11.2004C11.9736 11.2 12.6004 10.5733 12.6004 9.80005V6.30005ZM2.80039 9.10005C2.80039 8.71344 3.11379 8.40005 3.50039 8.40005H4.20039C4.58699 8.40005 4.90039 8.71344 4.90039 9.10005C4.90039 9.48666 4.58699 9.80005 4.20039 9.80005H3.50039C3.11379 9.80005 2.80039 9.48666 2.80039 9.10005ZM6.30039 8.40005C5.91379 8.40005 5.60039 8.71344 5.60039 9.10005C5.60039 9.48666 5.91379 9.80005 6.30039 9.80005H7.00039C7.387 9.80005 7.70039 9.48666 7.70039 9.10005C7.70039 8.71344 7.387 8.40005 7.00039 8.40005H6.30039Z",
                fill: "white"
              })]
            }), "Proceder con el pago"]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-12 col-lg-6 p-3 p-md-5 bg-dark bg-gradient rounded-end",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-white opacity-6 mb-0 text-end",
            children: "Monto"
          }), /* @__PURE__ */ jsxs("h3", {
            className: "text-white mb-4 text-end",
            children: ["$", subtotalCheckout.toLocaleString()]
          }), products.map((product, i) => /* @__PURE__ */ jsx(CheckoutSingleItem, {
            thumb_src: product.thumb_src,
            thumb_alt: product.thumb_alt,
            title: product.title,
            color: product.color,
            price: product.price
          })), /* @__PURE__ */ jsx(OrderSummary$1, {
            subtotal: subtotalCheckout,
            textColor: "white"
          })]
        })]
      })
    })
  });
}
__astro_tag_component__(CheckoutSummary, "@astrojs/react");

function OrderCardProduct({
  product,
  status,
  address,
  email,
  quantity,
  phoneNumber
}) {
  let widthClass = "";
  switch (status) {
    case "Order Placed":
      widthClass = " w-5";
      break;
    case "Processed":
      widthClass = " w-40";
      break;
    case "Shipped":
      widthClass = " w-70";
      break;
    case "Delivered":
      widthClass = " w-100";
      break;
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "card shadow-xs border p-3 p-md-4 mb-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "row border-bottom pb-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "col-12 col-md-6 col-lg-2",
          children: /* @__PURE__ */ jsx("img", {
            className: "w-100 rounded-3 mb-3 mb-md-0",
            src: `${"/Delipostres-Astro/"}${product.thumb_src}`,
            alt: product.thumb_alt
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-12 col-md-6 col-lg-5",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "text-base",
            children: product.title
          }), /* @__PURE__ */ jsxs("h6", {
            className: "text-sm font-weight-bold",
            children: ["$", product.price.toLocaleString()]
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sm mb-0 opacity-8",
            children: product.description
          }), /* @__PURE__ */ jsxs("p", {
            className: "text-dark text-sm mt-2",
            children: [/* @__PURE__ */ jsx("b", {
              children: "Cantidad"
            }), " ", quantity]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-12 col-md-6 col-lg-3 mt-md-4 mt-lg-0",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "text-base",
            children: "Dirección de envio"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sm mb-0 opacity-8 pe-md-7",
            children: address
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "col-12 col-md-6 col-lg-2 mt-4 mt-lg-0",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "text-base",
            children: "Actualización de envio"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sm mb-2 opacity-8",
            children: email
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sm opacity-8",
            children: phoneNumber
          }), /* @__PURE__ */ jsx("a", {
            className: "btn btn-white btn-sm",
            href: "#",
            children: "Edit"
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-4",
        children: [/* @__PURE__ */ jsx("h6", {
          className: "text-center",
          children: "Preparandose para el envío"
        }), /* @__PURE__ */ jsx("div", {
          className: "progress my-4",
          children: /* @__PURE__ */ jsx("div", {
            className: `progress-bar bg-dark` + widthClass,
            role: "progressbar"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "d-block d-md-flex justify-content-between",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "d-block text-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
              children: /* @__PURE__ */ jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                  fill: "white"
                })
              })
            }), /* @__PURE__ */ jsx("p", {
              className: "font-weight-semibold text-dark",
              children: "Orden colocada"
            })]
          }), status == "Order Placed" && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsxs("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ jsx("path", {
                    d: "M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
                  }), /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
                  })]
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold",
                children: "Procesada"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsxs("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ jsx("path", {
                    d: "M6.5 12.875C6.5 13.4963 5.99632 14 5.375 14C4.75368 14 4.25 13.4963 4.25 12.875C4.25 12.2537 4.75368 11.75 5.375 11.75C5.99632 11.75 6.5 12.2537 6.5 12.875Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M11.75 12.875C11.75 13.4963 11.2463 14 10.625 14C10.0037 14 9.5 13.4963 9.5 12.875C9.5 12.2537 10.0037 11.75 10.625 11.75C11.2463 11.75 11.75 12.2537 11.75 12.875Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M2.75 3.5C2.33579 3.5 2 3.83579 2 4.25V11.75C2 12.1642 2.33579 12.5 2.75 12.5H3.53751C3.71123 11.6442 4.46789 11 5.375 11C6.28211 11 7.03877 11.6442 7.21249 12.5H8C8.41423 12.5 8.75 12.1642 8.75 11.75V4.25C8.75 3.83579 8.41423 3.5 8 3.5H2.75Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5V11.0375C10.3712 11.0129 10.4966 11 10.625 11C11.5321 11 12.2888 11.6442 12.4625 12.5H13.25C13.6642 12.5 14 12.1642 14 11.75V8C14 7.80108 13.9209 7.61032 13.7803 7.46967L12.2803 5.96967C12.1397 5.82902 11.9489 5.75 11.75 5.75H11Z",
                    fill: "white"
                  })]
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold",
                children: "Enviado"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                    fill: "white"
                  })
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold",
                children: "Entregado"
              })]
            })]
          }), status == "Processed" && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                    fill: "white"
                  })
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold text-dark",
                children: "Procesado"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsxs("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ jsx("path", {
                    d: "M6.5 12.875C6.5 13.4963 5.99632 14 5.375 14C4.75368 14 4.25 13.4963 4.25 12.875C4.25 12.2537 4.75368 11.75 5.375 11.75C5.99632 11.75 6.5 12.2537 6.5 12.875Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M11.75 12.875C11.75 13.4963 11.2463 14 10.625 14C10.0037 14 9.5 13.4963 9.5 12.875C9.5 12.2537 10.0037 11.75 10.625 11.75C11.2463 11.75 11.75 12.2537 11.75 12.875Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M2.75 3.5C2.33579 3.5 2 3.83579 2 4.25V11.75C2 12.1642 2.33579 12.5 2.75 12.5H3.53751C3.71123 11.6442 4.46789 11 5.375 11C6.28211 11 7.03877 11.6442 7.21249 12.5H8C8.41423 12.5 8.75 12.1642 8.75 11.75V4.25C8.75 3.83579 8.41423 3.5 8 3.5H2.75Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M11 5.75C10.5858 5.75 10.25 6.08579 10.25 6.5V11.0375C10.3712 11.0129 10.4966 11 10.625 11C11.5321 11 12.2888 11.6442 12.4625 12.5H13.25C13.6642 12.5 14 12.1642 14 11.75V8C14 7.80108 13.9209 7.61032 13.7803 7.46967L12.2803 5.96967C12.1397 5.82902 11.9489 5.75 11.75 5.75H11Z",
                    fill: "white"
                  })]
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold",
                children: "Enviado"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsxs("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M3.99961 3.99998C3.99961 2.6745 5.07413 1.59998 6.39961 1.59998C7.0143 1.59998 7.575 1.83106 7.99961 2.2111C8.42425 1.83106 8.98489 1.59998 9.59961 1.59998C10.9251 1.59998 11.9996 2.6745 11.9996 3.99998C11.9996 4.28049 11.9514 4.54975 11.863 4.79998H12.7996C13.6833 4.79998 14.3996 5.51632 14.3996 6.39998C14.3996 7.28363 13.6833 7.99998 12.7996 7.99998H8.79961V7.19998C8.79961 6.75815 8.44145 6.39998 7.99961 6.39998C7.55779 6.39998 7.19961 6.75814 7.19961 7.19998V7.99998H3.19961C2.31595 7.99998 1.59961 7.28363 1.59961 6.39998C1.59961 5.51632 2.31595 4.79998 3.19961 4.79998H4.13618C4.04773 4.54975 3.99961 4.28049 3.99961 3.99998ZM7.19961 4.79998V3.99998C7.19961 3.55815 6.84143 3.19998 6.39961 3.19998C5.95779 3.19998 5.59961 3.55815 5.59961 3.99998C5.59961 4.4418 5.95779 4.79998 6.39961 4.79998H7.19961ZM9.59961 4.79998C10.0414 4.79998 10.3996 4.4418 10.3996 3.99998C10.3996 3.55815 10.0414 3.19998 9.59961 3.19998C9.15777 3.19998 8.79961 3.55815 8.79961 3.99998V4.79998H9.59961Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M7.20039 8.80005H2.40039V12.8C2.40039 13.6837 3.11673 14.4 4.00039 14.4H7.20039V8.80005Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M8.80078 14.4H12.0008C12.8845 14.4 13.6008 13.6837 13.6008 12.8V8.80005H8.80078V14.4Z",
                    fill: "white"
                  })]
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold",
                children: "Entregado"
              })]
            })]
          }), status == "Shipped" && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                    fill: "white"
                  })
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold text-dark",
                children: "Procesado"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                    fill: "white"
                  })
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold text-dark",
                children: "Enviado"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-secondary text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsxs("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M3.99961 3.99998C3.99961 2.6745 5.07413 1.59998 6.39961 1.59998C7.0143 1.59998 7.575 1.83106 7.99961 2.2111C8.42425 1.83106 8.98489 1.59998 9.59961 1.59998C10.9251 1.59998 11.9996 2.6745 11.9996 3.99998C11.9996 4.28049 11.9514 4.54975 11.863 4.79998H12.7996C13.6833 4.79998 14.3996 5.51632 14.3996 6.39998C14.3996 7.28363 13.6833 7.99998 12.7996 7.99998H8.79961V7.19998C8.79961 6.75815 8.44145 6.39998 7.99961 6.39998C7.55779 6.39998 7.19961 6.75814 7.19961 7.19998V7.99998H3.19961C2.31595 7.99998 1.59961 7.28363 1.59961 6.39998C1.59961 5.51632 2.31595 4.79998 3.19961 4.79998H4.13618C4.04773 4.54975 3.99961 4.28049 3.99961 3.99998ZM7.19961 4.79998V3.99998C7.19961 3.55815 6.84143 3.19998 6.39961 3.19998C5.95779 3.19998 5.59961 3.55815 5.59961 3.99998C5.59961 4.4418 5.95779 4.79998 6.39961 4.79998H7.19961ZM9.59961 4.79998C10.0414 4.79998 10.3996 4.4418 10.3996 3.99998C10.3996 3.55815 10.0414 3.19998 9.59961 3.19998C9.15777 3.19998 8.79961 3.55815 8.79961 3.99998V4.79998H9.59961Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M7.20039 8.80005H2.40039V12.8C2.40039 13.6837 3.11673 14.4 4.00039 14.4H7.20039V8.80005Z",
                    fill: "white"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M8.80078 14.4H12.0008C12.8845 14.4 13.6008 13.6837 13.6008 12.8V8.80005H8.80078V14.4Z",
                    fill: "white"
                  })]
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold",
                children: "Entregado"
              })]
            })]
          }), status == "Delivered" && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                    fill: "white"
                  })
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold text-dark",
                children: "Procesado"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                    fill: "white"
                  })
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold text-dark",
                children: "Enviado"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-block text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3 mx-auto",
                children: /* @__PURE__ */ jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
                    fill: "white"
                  })
                })
              }), /* @__PURE__ */ jsx("p", {
                className: "font-weight-semibold text-dark",
                children: "Entregado"
              })]
            })]
          })]
        })]
      })]
    })
  });
}
__astro_tag_component__(OrderCardProduct, "@astrojs/react");

function OrderSummaries({
  order,
  products
}) {
  let orderCards = [];
  products.map((product) => {
    let status = "";
    let orderQuantity = 0;
    order.products.map((productDetails) => {
      if (productDetails.id == product.id) {
        status = productDetails.status;
        orderQuantity = productDetails.quantity;
      }
    });
    orderCards.push(/* @__PURE__ */ jsx(OrderCardProduct, {
      product,
      status,
      quantity: orderQuantity,
      address: order.address,
      email: order.email,
      phoneNumber: order.phoneNumber
    }));
  });
  let subtotal = 0;
  products.map((product) => subtotal += product.price);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "p-3 p-md-5 bg-gray-100 rounded-2",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "d-block d-md-flex justify-content-between align-items-center mb-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "d-block",
          children: [/* @__PURE__ */ jsxs("h3", {
            children: ["Order #", order.orderNumber]
          }), /* @__PURE__ */ jsxs("p", {
            className: "mb-0 text-dark mt-4 mt-md-0",
            children: ["Orden Colocada ", /* @__PURE__ */ jsx("b", {
              children: order.date
            })]
          })]
        }), /* @__PURE__ */ jsx("button", {
          className: "btn btn-dark btn-sm",
          children: "View invoice"
        })]
      }), orderCards, /* @__PURE__ */ jsx("div", {
        className: "card shadow-xs border p-3 p-md-4 mb-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "row",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "col-12 col-lg-3 mt-4 mt-md-0",
            children: [/* @__PURE__ */ jsx("h5", {
              className: "text-base",
              children: "Dirección de facturación"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-sm mb-0 opacity-8 pe-md-7",
              children: order.address
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "col-12 col-lg-3 mt-4 mt-lg-0",
            children: [/* @__PURE__ */ jsx("h5", {
              className: "text-base",
              children: "Información de pago"
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-flex",
              children: [/* @__PURE__ */ jsxs("svg", {
                width: "49",
                height: "32",
                viewBox: "0 0 49 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/* @__PURE__ */ jsxs("g", {
                  "clip-path": "url(#clip0_152_7843)",
                  children: [/* @__PURE__ */ jsx("path", {
                    d: "M22.1996 20.8737H19.6074L21.2288 10.8484H23.8209L22.1996 20.8737Z",
                    fill: "#00579F"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M31.5982 11.0936C31.0869 10.8907 30.276 10.6667 29.2732 10.6667C26.7133 10.6667 24.9106 12.0318 24.8996 13.9835C24.8783 15.4234 26.1902 16.2232 27.1714 16.7033C28.1743 17.1939 28.5153 17.5141 28.5153 17.9514C28.5051 18.623 27.7049 18.9326 26.9585 18.9326C25.9236 18.9326 25.3691 18.773 24.5263 18.3993L24.185 18.2392L23.8223 20.4896C24.4302 20.7666 25.5504 21.0124 26.7133 21.0232C29.4332 21.0232 31.204 19.6792 31.225 17.5994C31.2353 16.4582 30.5426 15.5837 29.0491 14.8691C28.1424 14.4104 27.5872 14.1011 27.5872 13.6318C27.5978 13.2051 28.0568 12.7681 29.0803 12.7681C29.923 12.7467 30.5422 12.9492 31.0112 13.1519L31.2457 13.2584L31.5982 11.0936Z",
                    fill: "#00579F"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M35.0438 17.3221C35.2573 16.7461 36.0787 14.5171 36.0787 14.5171C36.068 14.5385 36.2918 13.9305 36.4198 13.5573L36.601 14.4211C36.601 14.4211 37.0918 16.8208 37.1984 17.3221C36.7933 17.3221 35.5558 17.3221 35.0438 17.3221ZM38.2436 10.8484H36.2385C35.6202 10.8484 35.1504 11.0295 34.8836 11.6802L31.0332 20.8735H33.7531C33.7531 20.8735 34.2009 19.6362 34.2972 19.3697C34.5956 19.3697 37.2415 19.3697 37.6254 19.3697C37.6998 19.7217 37.9347 20.8735 37.9347 20.8735H40.3348L38.2436 10.8484Z",
                    fill: "#00579F"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M17.4429 10.8484L14.9043 17.6847L14.6269 16.2982C14.1575 14.6984 12.6856 12.9602 11.043 12.096L13.3683 20.863H16.1095L20.184 10.8484H17.4429Z",
                    fill: "#00579F"
                  }), /* @__PURE__ */ jsx("path", {
                    d: "M12.5473 10.8484H8.37665L8.33398 11.051C11.5873 11.8829 13.742 13.8883 14.6272 16.2986L13.7206 11.6911C13.5713 11.0508 13.1126 10.8695 12.5473 10.8484Z",
                    fill: "#FAA61A"
                  })]
                }), /* @__PURE__ */ jsx("rect", {
                  x: "0.833984",
                  y: "0.5",
                  width: "47",
                  height: "31",
                  rx: "5.5",
                  stroke: "#DDE0E5"
                }), /* @__PURE__ */ jsx("defs", {
                  children: /* @__PURE__ */ jsx("clipPath", {
                    id: "clip0_152_7843",
                    children: /* @__PURE__ */ jsx("rect", {
                      width: "32",
                      height: "32",
                      fill: "white",
                      transform: "translate(8.33398)"
                    })
                  })
                })]
              }), /* @__PURE__ */ jsxs("p", {
                className: "text-sm ms-3",
                children: [/* @__PURE__ */ jsxs("b", {
                  children: ["Vsa ", order.payment.cardNumber]
                }), " ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("small", {
                  children: ["Expira ", order.payment.expiringDate]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "col-12 col-lg-6",
            children: /* @__PURE__ */ jsx(OrderSummary$1, {
              subtotal,
              textColor: ""
            })
          })]
        })
      })]
    })
  });
}
__astro_tag_component__(OrderSummaries, "@astrojs/react");

function OrderSummary({
  product,
  status,
  dateModified
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("tr", {
      children: [/* @__PURE__ */ jsxs("td", {
        scope: "row",
        className: "d-flex align-items-center text-sm text-body py-3",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-20 w-lg-10 rounded-3",
          src: `${"/Delipostres-Astro/"}${product.thumb_src}`,
          alt: product.thumb_alt
        }), /* @__PURE__ */ jsx("p", {
          className: "text-sm text-dark font-weight-bold mb-0 ms-3",
          children: product.title
        })]
      }), /* @__PURE__ */ jsxs("td", {
        className: "text-sm text-body align-middle pt-3 w-20",
        children: ["$", product.price.toLocaleString()]
      }), /* @__PURE__ */ jsx("td", {
        className: "text-sm text-body align-middle pt-3  w-20",
        children: status
      }), /* @__PURE__ */ jsx("td", {
        className: "text-sm text-body align-middle pt-3 w-20",
        children: dateModified
      }), /* @__PURE__ */ jsx("td", {
        className: "text-sm text-body align-middle pt-3 text-end",
        children: /* @__PURE__ */ jsx("a", {
          href: "#",
          className: "text-dark font-weight-bold",
          children: "Descargar"
        })
      })]
    })
  });
}
__astro_tag_component__(OrderSummary, "@astrojs/react");

function OrderHistoryCard({
  products,
  order
}) {
  let orderHistoryCards = [];
  order.products.map((productDetails) => {
    let productStatus = "";
    let dateModified = "";
    products.map((product) => {
      if (productDetails.id == product.id) {
        productStatus = productDetails.status;
        dateModified = productDetails.dateModified;
        orderHistoryCards.push(/* @__PURE__ */ jsx(OrderSummary, {
          product,
          status: productStatus,
          dateModified
        }));
      }
    });
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "card shadow-xs border p-3 p-md-4 mb-4",
    children: [/* @__PURE__ */ jsx("div", {
      className: "shadow-xs border rounded-3 mb-5",
      children: /* @__PURE__ */ jsxs("div", {
        className: "d-block d-md-flex justify-content-between align-items-center",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "d-block d-md-flex",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "d-flex d-md-block justify-content-between p-4 me-md-4",
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-sm mb-0",
              children: "Id de Orden"
            }), /* @__PURE__ */ jsx("h6", {
              children: order.orderNumber
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "d-flex d-md-block justify-content-between p-4 me-md-4",
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-sm mb-0",
              children: "Fecha de colocación"
            }), /* @__PURE__ */ jsx("h6", {
              children: order.date
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "d-flex d-md-block justify-content-between p-4",
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-sm mb-0",
              children: "Costo"
            }), /* @__PURE__ */ jsx("h6", {
              children: "Bs.2,570"
            })]
          })]
        }), /* @__PURE__ */ jsx("button", {
          className: "btn btn-dark btn-sm mb-md-0 ms-4 md-md-0 me-4",
          "data-bs-toggle": "modal",
          "data-bs-target": "#invoiceModal1",
          children: "View invoice"
        }), /* @__PURE__ */ jsx("div", {
          className: "modal fade",
          id: "invoiceModal1",
          role: "dialog",
          "aria-labelledby": "invoiceModal1",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx("div", {
            className: "modal-dialog modal-dialog-centered modal-lg",
            role: "document",
            children: /* @__PURE__ */ jsx("div", {
              className: "modal-content",
              children: /* @__PURE__ */ jsxs("div", {
                className: "card p-4",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "card-header text-center",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "row justify-content-between",
                    children: [/* @__PURE__ */ jsxs("div", {
                      className: "col-md-4 text-start",
                      children: [/* @__PURE__ */ jsx("img", {
                        className: "mb-2 w-50 rounded-2",
                        src: "https://s3.amazonaws.com/creativetim_bucket/new_logo.png",
                        alt: "Logo"
                      }), /* @__PURE__ */ jsx("h6", {
                        children: "Calle la ceiba"
                      }), /* @__PURE__ */ jsx("small", {
                        className: "d-block text-muted",
                        children: "tel: +4 (074) 1090873"
                      })]
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "col-lg-4 col-md-5 text-end",
                      children: [/* @__PURE__ */ jsx("button", {
                        type: "button",
                        className: "btn-close float-end",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close"
                      }), /* @__PURE__ */ jsx("h4", {
                        className: "mt-7 mb-1",
                        children: "Facturado a:"
                      }), /* @__PURE__ */ jsx("span", {
                        className: "d-block",
                        children: "James Thompson"
                      }), /* @__PURE__ */ jsxs("p", {
                        className: "text-sm",
                        children: ["Bld Mihail Kogalniceanu,", /* @__PURE__ */ jsx("br", {}), "7652 Bucharest,", /* @__PURE__ */ jsx("br", {}), "Venezuela"]
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "row justify-content-md-between",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "col-md-4",
                      children: /* @__PURE__ */ jsxs("h4", {
                        className: "mt-5 text-start",
                        children: ["Factura no. ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("small", {
                          className: "mr-2",
                          children: "#XK98321111"
                        })]
                      })
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "col-lg-4 col-md-5",
                      children: [/* @__PURE__ */ jsxs("div", {
                        className: "d-flex align-items-center mt-5 ms-auto float-end",
                        children: [/* @__PURE__ */ jsx("div", {
                          className: "text-sm me-3 font-weight-bold",
                          children: "Fecha de factura:"
                        }), /* @__PURE__ */ jsx("div", {
                          className: "text-end",
                          children: "22 de enero 2024"
                        })]
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "d-flex align-items-center ms-auto float-end",
                        children: [/* @__PURE__ */ jsx("div", {
                          className: "text-sm me-3 font-weight-bold",
                          children: "Fecha de vencimiento:"
                        }), /* @__PURE__ */ jsx("div", {
                          className: "text-end",
                          children: "22 de febrero 2024"
                        })]
                      })]
                    })]
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "card-body",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "row",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "col-12",
                      children: /* @__PURE__ */ jsx("div", {
                        className: "table-responsive",
                        children: /* @__PURE__ */ jsxs("table", {
                          className: "table text-right",
                          children: [/* @__PURE__ */ jsx("thead", {
                            className: "bg-default",
                            children: /* @__PURE__ */ jsxs("tr", {
                              children: [/* @__PURE__ */ jsx("th", {
                                scope: "col",
                                className: "text-right text-white",
                                children: "Item"
                              }), /* @__PURE__ */ jsx("th", {
                                scope: "col",
                                className: "text-right text-white",
                                children: "Candtidad"
                              }), /* @__PURE__ */ jsx("th", {
                                scope: "col",
                                className: "text-right text-white",
                                children: "Rate"
                              }), /* @__PURE__ */ jsx("th", {
                                scope: "col",
                                className: "text-right text-white",
                                children: "Costo"
                              })]
                            })
                          }), /* @__PURE__ */ jsxs("tbody", {
                            children: [/* @__PURE__ */ jsxs("tr", {
                              children: [/* @__PURE__ */ jsx("td", {
                                children: "Premium Support"
                              }), /* @__PURE__ */ jsx("td", {
                                children: "1"
                              }), /* @__PURE__ */ jsx("td", {
                                children: "$ 9.00"
                              }), /* @__PURE__ */ jsx("td", {
                                className: "text-end",
                                children: "$ 9.00"
                              })]
                            }), /* @__PURE__ */ jsxs("tr", {
                              children: [/* @__PURE__ */ jsx("td", {
                                children: "Argon Dashboard PRO"
                              }), /* @__PURE__ */ jsx("td", {
                                children: "3"
                              }), /* @__PURE__ */ jsx("td", {
                                children: "$ 100.00"
                              }), /* @__PURE__ */ jsx("td", {
                                className: "text-end",
                                children: "$ 300.00"
                              })]
                            }), /* @__PURE__ */ jsxs("tr", {
                              children: [/* @__PURE__ */ jsx("td", {
                                children: "Partes por servicio"
                              }), /* @__PURE__ */ jsx("td", {
                                children: "1"
                              }), /* @__PURE__ */ jsx("td", {
                                children: "$ 89.00"
                              }), /* @__PURE__ */ jsx("td", {
                                className: "text-end",
                                children: "$ 89.00"
                              })]
                            })]
                          }), /* @__PURE__ */ jsx("tfoot", {
                            children: /* @__PURE__ */ jsxs("tr", {
                              children: [/* @__PURE__ */ jsx("th", {
                                colSpan: 3,
                                className: "h4",
                                children: "Total"
                              }), /* @__PURE__ */ jsx("th", {
                                className: "text-end h4",
                                children: "$ 398.00"
                              })]
                            })
                          })]
                        })
                      })
                    })
                  })
                }), /* @__PURE__ */ jsx("div", {
                  className: "card-footer text-right",
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "col-md-5 ms-auto text-end",
                    children: [/* @__PURE__ */ jsx("h5", {
                      children: "Thank you!"
                    }), /* @__PURE__ */ jsx("p", {
                      className: "text-sm",
                      children: "Si tiene algún problema relacionado con la factura, puede contactarnos en: "
                    }), /* @__PURE__ */ jsxs("h6", {
                      className: "mb-0",
                      children: ["email:", /* @__PURE__ */ jsx("small", {
                        className: "text-muted",
                        children: " support@cretive-tim.com"
                      })]
                    })]
                  })
                })]
              })
            })
          })
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "table-responsive",
      children: /* @__PURE__ */ jsxs("table", {
        className: "table",
        children: [/* @__PURE__ */ jsx("thead", {
          children: /* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("th", {
              scope: "col",
              className: "text-secondary text-xs font-weight-bold border-light ps-2",
              children: "Producto"
            }), /* @__PURE__ */ jsx("th", {
              scope: "col",
              className: "text-secondary text-xs font-weight-bold border-light ps-2",
              children: "Precio"
            }), /* @__PURE__ */ jsx("th", {
              scope: "col",
              className: "text-secondary text-xs font-weight-bold border-light ps-2",
              children: "Estatus"
            }), /* @__PURE__ */ jsx("th", {
              scope: "col",
              className: "text-secondary text-xs font-weight-bold border-light ps-2",
              children: "Fecha"
            }), /* @__PURE__ */ jsx("th", {
              scope: "col",
              className: "text-secondary text-xs font-weight-bold border-light ps-2 text-end",
              children: "Detalles"
            })]
          })
        }), /* @__PURE__ */ jsx("tbody", {
          children: orderHistoryCards
        })]
      })
    })]
  });
}
__astro_tag_component__(OrderHistoryCard, "@astrojs/react");

function OrderHistory({
  orders,
  products
}) {
  let orderHistoryCards = [];
  orders.forEach((order) => {
    let orderProducts = [];
    order.products.forEach((productDetails) => {
      products.forEach((product) => {
        if (product.id == productDetails.id) {
          orderProducts.push(product);
        }
      });
    });
    orderHistoryCards.push(/* @__PURE__ */ jsx(OrderHistoryCard, {
      order,
      products: orderProducts
    }));
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h3", {
        className: "mb-0",
        children: "Historial de Órdenes"
      }), /* @__PURE__ */ jsx("p", {
        className: "mb-5",
        children: "Observa tus órdenes recientes."
      }), orderHistoryCards]
    })
  });
}
__astro_tag_component__(OrderHistory, "@astrojs/react");

const $$Astro = createAstro("https://Al791ex.github.io");
const $$Componentes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Componentes;
  let cartItems = [];
  data.shoppingCart.map(
    (id) => data.products.filter((x) => x.id == id).map((x) => cartItems.push(x))
  );
  let orderProducts = [];
  data.orders[0].products.forEach((productDetails) => {
    data.products.forEach((product) => {
      if (product.id == productDetails.id) {
        orderProducts.push(product);
      }
    });
  });
  let orderHistoryProducts = /* @__PURE__ */ new Set();
  data.orders.forEach((order) => {
    order.products.forEach((productDetails) => {
      data.products.forEach((product) => {
        if (product.id == productDetails.id) {
          orderHistoryProducts.add(product);
        }
      });
    });
  });
  return renderTemplate`

${renderComponent($$result, "Layout", $$Layout, { "title": "Delipostres" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main>
    ${renderComponent($$result2, "Navbar", Navbar, {})}
    <div class="container mt-5">
      
      <div class="my-10">
        <h3>Carrito</h3>
        ${renderComponent($$result2, "ShoppingCart", ShoppingCart, { "products": cartItems })}
      </div>



      <div class="my-10">
        <h3>Checkout Forms</h3>
        <p>Split with order summary</p>
        ${renderComponent($$result2, "CheckoutOrderSummary", CheckoutSummary, { "products": cartItems })}
      </div>

      <div class="my-10">
        <h3>Checkout Forms</h3>
        <p>SWith order summary sidebar</p>
import CheckoutMultiStep from '../components/checkout/checkoutMultiStep';

      </div>

      
            <div class="my-10">
              <h3 class="mt-5">Order Summaries</h3>
              <p class="text-body">With order summary sidebar</p>
              ${renderComponent($$result2, "OrderSummaries", OrderSummaries, { "order": data.orders[0], "products": orderProducts })}
            </div>

            <div class="my-10">
              ${renderComponent($$result2, "OrderHistory", OrderHistory, { "orders": data.orders, "products": orderHistoryProducts })}
            </div>

      
      ${renderComponent($$result2, "Footer", Footer, {})}
    </div>
	</main>
` })}`;
}, "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/componentes.astro", void 0);

const $$file = "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/componentes.astro";
const $$url = "/Delipostres-Astro/componentes";

const componentes = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Componentes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { OrderSummary$3 as O, componentes as c };
