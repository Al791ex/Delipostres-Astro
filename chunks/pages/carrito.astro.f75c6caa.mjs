import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, _ as __astro_tag_component__, f as renderComponent, m as maybeRenderHead } from '../astro.4e9424c8.mjs';
import 'html-escaper';
/* empty css                             */import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://Al791ex.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml"', '>\n    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Noto+Sans:300,400,500,600,700,800|PT+Mono:300,400,500,600,700" rel="stylesheet">\n		<meta name="generator"', ">\n		<title>", '</title>\n    <link rel="canonical" href="https://www.delipostres.com/">\n    <!-- Google Tag Manager -->\n    \n    <!-- End Google Tag Manager -->\n	', '</head>\n	<body>\n    <!-- Google Tag Manager (noscript) -->\n    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n    <!-- End Google Tag Manager (noscript) -->\n		', '\n	<script src="https://kit.fontawesome.com/349ee9c857.js" crossOrigin="anonymous"><\/script>\n  <!-- Bootstrap JavaScript Bundle with Popper -->\n  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"><\/script>\n  <!-- Product JavaScript -->\n  \n</body>\n</html>'])), addAttribute(`${"/Delipostres-Astro/"}favicon.svg`, "href"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/layouts/Layout.astro", void 0);

const products = [
	{
		id: "00",
		thumb_src: "/ImagesDeli/Torta tres leches.jpg",
		thumb_alt: "Torta de Tres Leches",
		color: "Deliciosa Torta de Tres Leches",
		title: "Torta De Tres Leches",
		price: 25,
		full_description: "Torta de chocolate derretido con mousse de Nutella decorada con chips de chocolate negro. Rinde 12 Porciones. Molde de 30 Cm.",
		size: "Small",
		category: "Tortas",
		stock: true
	},
	{
		id: "02",
		thumb_src: "/ImagesDeli/Torta de vainilla rellena.jpg",
		thumb_alt: "Torta de vainilla rellena",
		color: "Torta Con Crema pastelera y Vainilla",
		title: "Torta de Vainilla rellena",
		price: 15,
		full_description: "Un clásico irresistible con suaves capas de bizcocho de vainilla y un delicioso relleno cremoso. Perfecta para cualquier ocasión especial.",
		size: "Medium",
		category: "Tortas",
		stock: true
	},
	{
		id: "03",
		thumb_src: "/ImagesDeli/Torta de chocolate.jpg",
		thumb_alt: "Torta de chocolate",
		color: "Explosiva Torta de Chocolate ",
		title: "Torta de Chocolate",
		full_description: "Una delicia tentadora con capas de bizcocho de chocolate húmedo y un decadente relleno de crema de chocolate. Un placer indulgente para los amantes del cacao.",
		price: 26,
		size: "Large",
		category: "Tortas",
		stock: true
	},
	{
		id: "04",
		thumb_src: "ImagesDeli/RFB-3003-4-tortapinata.webp",
		thumb_alt: "Torta piñata",
		color: "Disfruta de una sorpresa de sabores",
		title: "Torta Piñata",
		price: 25,
		full_description: "Degusta nuestra deliciosa Torta explosiva piñata, siendo la favorita de los niños y padres.",
		category: "Tortas",
		stock: true
	},
	{
		id: "05",
		thumb_src: "/ImagesDeli/Galleta Choco Explosion.jpg",
		thumb_alt: "Galleta Choco explosion",
		color: "Disfruta del sabor de chocolate",
		title: "Galleta Choco Explosión",
		price: 1,
		full_description: "Galleta de 115gr con chocolate chips.  Intensa y tentadora, con un interior suave y un sabor a chocolate puro. Un placer indulgente en cada bocado.",
		size: "Medium",
		category: "Galletas",
		stock: true
	},
	{
		id: "06",
		thumb_src: "/ImagesDeli/Galleta de avena dulce.jpeg",
		thumb_alt: "Galleta Red",
		color: "Excelentes galletas de Avena",
		title: "Galleta de Avena Dulce",
		price: 1,
		full_description: "Galleta de115 gr crujiente por fuera, suave por dentro. Elaborada con ingredientes naturales para un sabor y textura inigualables.",
		size: "Medium",
		category: "Galletas",
		stock: true
	},
	{
		id: "07",
		thumb_src: "/ImagesDeli/Galleta-Churro-arequipe (1).jpg",
		thumb_alt: "Galleta Red",
		color: "Galleta Churro Arequipe",
		title: "Galleta Churro Arequipe",
		price: 1,
		full_description: "Galleta caliente rellena con centro de arequipe y cubierta de azucar canela.",
		size: "Medium",
		category: "Galletas",
		stock: false
	},
	{
		id: "08",
		thumb_src: "/ImagesDeli/Gallete red Velvet.jpg",
		thumb_alt: "Galleta Red",
		color: "Galleta Caliente Red Velvet",
		title: "Galleta Red Velvet",
		price: 1,
		full_description: "Galleta caliente de 115 gr Delicada y suave, con un toque de cacao y un irresistible color rojo. Una experiencia celestial en cada mordisco.",
		size: "Medium",
		category: "Galletas",
		stock: false
	},
	{
		id: "09",
		thumb_src: "/ImagesDeli/Quesillo.jpg",
		thumb_alt: "Porcion de quesillo",
		color: "Riquisimo y blandisimo quesillo",
		title: "Porción De Quesillo",
		price: 2,
		full_description: "Porción de quesillo, elaborada con una mezcla suave de huevos, leche y caramelo, te ofrece un postre tradicional con un toque casero irresistible. ",
		size: "Medium",
		category: "Postres Tradicionales",
		stock: false
	},
	{
		id: "10",
		thumb_src: "/ImagesDeli/Marquesa de chocolate.jpeg",
		thumb_alt: "Porcion de quesillo",
		color: "Suculenta marquesa de chocolate",
		title: "Porción de Marquesa",
		price: 2,
		full_description: "150 Gr de Deliciosa combinación de capas de galletas de chocolate y una rica crema de cacao en su superficie. ",
		size: "Medium",
		category: "Postres Tradicionales",
		stock: false
	},
	{
		id: "11",
		thumb_src: "/ImagesDeli/Arrozconleche.jpg",
		thumb_alt: "Porcion de arroz con leche",
		color: "Porción Arroz con leche",
		title: "Porción Arroz con leche",
		price: 2,
		full_description: "150 gr de Arroz cocido en leche con canela y vainilla para un postre reconfortante y aromático.",
		size: "Medium",
		category: "Postres Tradicionales",
		stock: false
	},
	{
		id: "12",
		thumb_src: "/ImagesDeli/PalmeritaC.jpg",
		thumb_alt: "Palmeritas",
		color: "Deliciosas palmeritas de chocolate",
		title: "Palmeritas de chocolate",
		price: 1,
		full_description: "25 Galletas de 50gr cada una hojaldradas de mantequilla y azúcar para un bocado crujiente y dulce.",
		category: "Postres Tradicionales",
		stock: false
	}
];
const orders = [
	{
		orderNumber: 23791,
		products: [
			{
				id: "01",
				status: "Processed",
				quantity: 1,
				dateModified: "March 23, 2023"
			},
			{
				id: "02",
				status: "Delivered",
				quantity: 3,
				dateModified: "June 28, 2023"
			}
		],
		payment: {
			cardNumber: "0042",
			expiringDate: "06/26"
		},
		date: "March 23, 2023",
		address: "362 Ridgewood, Alaska 99669, USA",
		email: "michael@email.com",
		phoneNumber: "(808) 791-6935"
	},
	{
		orderNumber: "WB2341",
		products: [
			{
				id: "03",
				status: "Order Placed",
				quantity: 1,
				dateModified: "March 23, 2023"
			}
		],
		payment: {
			cardNumber: "4119",
			expiringDate: "06/26"
		},
		date: "March 28, 2023",
		address: "362 Ridgewood Dr, Soldotna, Alaska 99669, USA",
		email: "john@email.com",
		phoneNumber: "(307) 612-7721"
	},
	{
		orderNumber: "010110",
		products: [
			{
				id: "04",
				status: "Order Placed",
				quantity: 1,
				dateModified: "Sep 09, 2023"
			},
			{
				id: "01",
				status: "Shipped",
				quantity: 1,
				dateModified: "Sep 12, 2023"
			},
			{
				id: "02",
				status: "Delivered",
				quantity: 1,
				dateModified: "Sep 13, 2023"
			}
		],
		payment: {
			cardNumber: "5290",
			expiringDate: "11/27"
		},
		date: "Sep 07, 2023",
		address: "362 Ridgewood, Alaska 99669, USA",
		email: "doe@email.com",
		phoneNumber: "(307) 682-8835"
	}
];
const shoppingCart = [
	"01",
	"02",
	"03"
];
const shoppingCart2 = [
	"02",
	"03",
	"04"
];
const data = {
	products: products,
	orders: orders,
	shoppingCart: shoppingCart,
	shoppingCart2: shoppingCart2
};

const Navbar = () => {
  return /* @__PURE__ */ jsx("nav", {
    className: "navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container px-1",
      children: [/* @__PURE__ */ jsx("a", {
        className: "navbar-brand font-weight-bolder ms-lg-0 ",
        href: "/delipostres/",
        children: "Delipostres"
      }), /* @__PURE__ */ jsx("button", {
        className: "navbar-toggler shadow-none ms-2",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navigation",
        "aria-controls": "navigation",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /* @__PURE__ */ jsxs("span", {
          className: "navbar-toggler-icon mt-2",
          children: [/* @__PURE__ */ jsx("span", {
            className: "navbar-toggler-bar bar1"
          }), /* @__PURE__ */ jsx("span", {
            className: "navbar-toggler-bar bar2"
          }), /* @__PURE__ */ jsx("span", {
            className: "navbar-toggler-bar bar3"
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "collapse navbar-collapse",
        id: "navigation",
        children: /* @__PURE__ */ jsxs("ul", {
          className: "navbar-nav ms-auto",
          children: [/* @__PURE__ */ jsx("a", {
            className: "carrito",
            href: "/delipostres/carrito/",
            children: /* @__PURE__ */ jsx("img", {
              src: "/public/images/shoppingcart_80945.jpg",
              alt: ""
            })
          }), /* @__PURE__ */ jsxs("li", {
            className: "nav-item dropdown",
            children: [/* @__PURE__ */ jsx("a", {
              className: "nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 ",
              "aria-current": "page",
              id: "pagesExample",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: "Páginas"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "dropdown-menu",
              "aria-labelledby": "pagesExample",
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  className: "dropdown-item",
                  href: "/delipostres/",
                  children: "Pagina principal"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  className: "dropdown-item",
                  href: "/delipostres/productos/",
                  children: "Productos"
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx("a", {
                  className: "dropdown-item",
                  href: "/delipostres/pago/",
                  children: "Pago"
                })
              })]
            })]
          })]
        })
      })]
    })
  });
};
__astro_tag_component__(Navbar, "@astrojs/react");

function Footer() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("footer", {
      className: "footer pt-3  ",
      children: /* @__PURE__ */ jsxs("div", {
        className: "row align-items-center justify-content-lg-between",
        children: [/* @__PURE__ */ jsx("div", {
          className: "col-lg-6 mb-lg-0 mb-4",
          children: /* @__PURE__ */ jsxs("div", {
            className: "copyright text-center text-sm text-muted text-lg-start",
            children: ["Copyright ©", " ", "Delipostres 2024 ."]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-lg-6",
          children: /* @__PURE__ */ jsx("ul", {
            className: "nav nav-footer justify-content-center justify-content-lg-end"
          })
        })]
      })
    })
  });
}
__astro_tag_component__(Footer, "@astrojs/react");

function ProductSizes({
  sizes
}) {
  const sizeID = Date.now();
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "mt-4 d-flex justify-content-between align-items-center",
      children: /* @__PURE__ */ jsx("h6", {
        className: "mb-0",
        children: "Puedes elegir una cantidad de tu preferencia "
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "d-flex flex-wrap text-center my-4",
      children: Object.entries(sizes).map(([size, amount], i) => /* @__PURE__ */ jsx("div", {
        className: "mb-3 me-3",
        children: /* @__PURE__ */ jsxs("div", {
          className: "form-check",
          children: [amount != 0 ? /* @__PURE__ */ jsx("input", {
            className: "form-check-input rounded-2",
            type: "radio",
            name: "flexRadioDefault",
            id: `input` + sizeID + i
          }) : /* @__PURE__ */ jsx("input", {
            className: "form-check-input rounded-2",
            disabled: true,
            type: "radio",
            name: "flexRadioDefault",
            id: `input` + sizeID + i
          }), /* @__PURE__ */ jsx("label", {
            className: "cursor-pointer",
            htmlFor: `input` + sizeID + i,
            children: size
          })]
        })
      }))
    })]
  });
}
__astro_tag_component__(ProductSizes, "@astrojs/react");

function ProductCartItem({
  id,
  thumb_src,
  thumb_alt,
  title,
  color,
  price,
  stock,
  subtotal,
  onQuantityChange
}) {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);
  const handleQuantityInputChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };
  const calculateSubtotal = () => {
    return price * quantity;
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "d-block d-md-flex",
      children: [/* @__PURE__ */ jsx("img", {
        className: "w-50 w-md-30 rounded-3",
        src: `${"/Delipostres-Astro/"}${thumb_src}`,
        alt: thumb_alt
      }), /* @__PURE__ */ jsxs("div", {
        className: "w-100 w-md-50 ps-md-4",
        children: [/* @__PURE__ */ jsx("h6", {
          className: "text-lg mb-1",
          children: title
        }), /* @__PURE__ */ jsx("div", {
          className: "d-flex",
          children: /* @__PURE__ */ jsx("p", {
            className: "pe-3 mb-0",
            children: color
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "d-flex align-items-center mt-6",
          children: stock ? /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx("i", {
              className: "fas fa-check text-lg text-success"
            }), /* @__PURE__ */ jsx("p", {
              className: "mb-0 ms-2 text-sm",
              children: "En existencia"
            })]
          }) : /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx("i", {
              className: "fas fa-minus-circle text-lg"
            }), /* @__PURE__ */ jsx("p", {
              className: "mb-0 ms-2 text-sm",
              children: "Sin existencia"
            })]
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-40 w-md-15 mt-4 mt-md-0",
        children: /* @__PURE__ */ jsx("input", {
          type: "number",
          min: 0,
          value: quantity,
          onChange: handleQuantityInputChange,
          className: "form-control",
          placeholder: "cantidad",
          "aria-label": "amount"
        })
      }), /* @__PURE__ */ jsxs("h4", {
        className: "ms-3",
        children: ["$", calculateSubtotal().toLocaleString()]
      })]
    })
  });
}
__astro_tag_component__(ProductCartItem, "@astrojs/react");

function CardProduct({
  id,
  // incluir el id aquí también
  thumb_src,
  thumb_alt,
  title,
  price,
  color,
  category,
  position,
  stock,
  full_description
}) {
  const modalId = `productModal-${id}`;
  const modalTarget = `#${modalId}`;
  const [cartItems, setCartItems] = useState([]);
  const handleRemoveFromCart = (id2) => {
    setCartItems(cartItems.filter((item) => item.id !== id2));
  };
  const handleAddToCart = (product) => {
    if (!product.stock) {
      console.log("Product is out of stock");
      return;
    }
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (isProductInCart) {
      alert("Product is already in the cart");
      return;
    }
    setCartItems([...cartItems, product]);
  };
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "card card-product border mb-5 shadow-xs border-radius-lg",
      children: /* @__PURE__ */ jsxs("a", {
        className: "card-link",
        children: [/* @__PURE__ */ jsx("div", {
          className: "height-400",
          children: /* @__PURE__ */ jsx("img", {
            className: "w-100 h-100 p-0 rounded-top",
            src: `${"/Delipostres-Astro/"}${thumb_src}`,
            alt: thumb_alt
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "{classList}height-90",
          children: [title && /* @__PURE__ */ jsx("h4", {
            className: "font-weight-bold",
            children: title
          }), color && /* @__PURE__ */ jsx("h6", {
            className: "text-md mb- text-body",
            children: color
          }), price && /* @__PURE__ */ jsxs("h4", {
            className: "mb-0 text-lg mt-1 mb-3",
            children: ["$", price.toLocaleString()]
          }), /* @__PURE__ */ jsx("button", {
            type: "button",
            className: "btn btn-dark w-auto",
            "data-bs-toggle": "modal",
            "data-bs-target": modalTarget,
            children: "Más Detalles"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "modal fade",
      id: modalId,
      role: "dialog",
      "aria-labelledby": modalId + "Label",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx("div", {
        className: "modal-dialog modal-dialog-centered modal-xl",
        role: "document",
        children: /* @__PURE__ */ jsx("div", {
          className: "modal-content",
          children: /* @__PURE__ */ jsx("div", {
            className: "card card-product  border mb-4 shadow-xs border-radius-lg",
            children: /* @__PURE__ */ jsxs("div", {
              className: "card-body d-block d-lg-flex p-4",
              children: [/* @__PURE__ */ jsx("button", {
                type: "button",
                className: "btn-close text-dark position-absolute end-0 me-4",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
              }), /* @__PURE__ */ jsx("div", {
                className: "w-100 w-lg-50 text-center",
                children: thumb_src && /* @__PURE__ */ jsx("img", {
                  class: "w-100 h-100 rounded-top ",
                  src: `${"/Delipostres-Astro/"}${thumb_src}`,
                  alt: title
                })
              }), /* @__PURE__ */ jsxs("div", {
                className: "w-100 w-lg-50 ps-2 text-center",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "",
                  children: [title.length !== 0 && /* @__PURE__ */ jsxs("h3", {
                    className: "mt-md-2 mb-3 text-center",
                    children: [title, /* @__PURE__ */ jsx("hr", {
                      class: "dark horizontal my-2"
                    })]
                  }), full_description && /* @__PURE__ */ jsx("h6", {
                    className: "text-md mb-0 text-body",
                    children: full_description
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "d-flex justify-content-center align-items-center mx-auto",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "w-30 w-md-20 mt-4 mt-md-4",
                    children: /* @__PURE__ */ jsx("h5", {
                      children: "Cantidad"
                    })
                  })
                }), /* @__PURE__ */ jsx("input", {
                  type: "number",
                  min: "0",
                  className: "form-control",
                  placeholder: quantity.toString(),
                  "aria-label": "amount",
                  value: quantity,
                  onChange: handleQuantityChange
                }), /* @__PURE__ */ jsxs("div", {
                  className: "d-block text-center",
                  children: [/* @__PURE__ */ jsxs("p", {
                    className: "mt-md-7 mb-4",
                    children: [" ", /* @__PURE__ */ jsx("span", {
                      "data-bs-toggle": "tooltip",
                      "data-bs-placement": "top",
                      title: "More information related to sizes",
                      "data-container": "body",
                      "data-animation": "true",
                      children: /* @__PURE__ */ jsx("i", {
                        className: ""
                      })
                    })]
                  }), /* @__PURE__ */ jsx("button", {
                    className: "btn btn-dark btn-lg w-100",
                    onClick: () => handleAddToCart({
                      id,
                      thumb_src,
                      thumb_alt,
                      title,
                      price,
                      color,
                      position,
                      category,
                      stock,
                      full_description
                    }),
                    children: "Añadir al carrito"
                  }), /* @__PURE__ */ jsx("button", {
                    className: "btn btn-danger btn-lg w-100 mt1",
                    onClick: () => handleRemoveFromCart(id),
                    children: "Quitar del carrito"
                  })]
                })]
              })]
            })
          })
        })
      })
    })]
  });
}
__astro_tag_component__(CardProduct, "@astrojs/react");

function ShoppingCart({
  products
}) {
  const [cartItems, setCartItems] = useState(products.map((product) => ({
    ...product,
    quantity: 1
  })));
  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) => item.id === id ? {
      ...item,
      quantity: newQuantity
    } : item);
    setCartItems(updatedCart);
  };
  let TotalCheckout = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.quantity, 0);
  return /* @__PURE__ */ jsxs("div", {
    className: "container mt-5",
    children: [/* @__PURE__ */ jsx("h2", {
      className: "mb-3 text-center",
      children: "Carrito"
    }), /* @__PURE__ */ jsx("h5", {
      className: "text-center mb-5",
      children: "Tu envío podría salir Gratis"
    }), /* @__PURE__ */ jsxs("div", {
      className: "row",
      children: [/* @__PURE__ */ jsx("div", {
        className: "col-12 col-lg-7",
        children: cartItems.map((product) => /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(ProductCartItem, {
            id: product.id,
            thumb_src: product.thumb_src,
            thumb_alt: product.thumb_alt,
            title: product.title,
            color: product.color,
            price: product.price,
            subtotal: 0,
            onQuantityChange: (newQuantity) => handleQuantityChange(product.id, newQuantity)
          }), /* @__PURE__ */ jsx("button", {
            className: "btn btn-danger mt-2",
            onClick: () => handleRemoveFromCart(product.id),
            children: "Quitar del carrito"
          })]
        }, product.id))
      }), /* @__PURE__ */ jsx("div", {
        className: "col-12 col-lg-5 mt-5 mt-lg-0",
        children: /* @__PURE__ */ jsx("div", {
          className: "card shadow-xs border bg-gray-100",
          children: /* @__PURE__ */ jsxs("div", {
            className: "card-body p-lg-5",
            children: [/* @__PURE__ */ jsx("h5", {
              className: "mb-4",
              children: "Detalles de la orden"
            }), /* @__PURE__ */ jsxs("div", {
              className: "d-flex justify-content-between",
              children: [/* @__PURE__ */ jsx("p", {
                className: "opacity-8",
                children: "Total"
              }), /* @__PURE__ */ jsxs("h3", {
                className: "mb-5",
                children: ["$", TotalCheckout.toLocaleString()]
              })]
            }), /* @__PURE__ */ jsx("a", {
              href: "/delipostres/pago",
              className: "btn btn-dark btn-lg w-100 mt-3",
              children: "Finalizar compra"
            }), /* @__PURE__ */ jsx("a", {
              href: "/delipostres/productos",
              className: "btn btn-white btn-lg w-100 mt-2",
              children: "Seguir comprando"
            })]
          })
        })
      })]
    })]
  });
}
__astro_tag_component__(ShoppingCart, "@astrojs/react");

const $$Astro = createAstro("https://Al791ex.github.io");
const $$Carrito = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carrito;
  let cartItems = [];
  data.shoppingCart.map(
    (id) => data.products.filter((x) => x.id == id).map((x) => cartItems.push(x))
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carrito de compras" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main>
    ${renderComponent($$result2, "Navbar", Navbar, {})}

    ${renderComponent($$result2, "ShoppingCart", ShoppingCart, { "products": cartItems })}
    
    <div class="container mt-5">
      <div class="row">
        <h5 class="mb-4">También te podría gustar</h5>
        ${data.products.sort(() => Math.random() - 0.5).slice(0, 4).map(
    (product) => renderTemplate`<div class="col-md-6 col-lg-3">
              ${renderComponent($$result2, "CardProduct", CardProduct, { "id": product.id, "category": product.category, "thumb_src": product.thumb_src, "thumb_alt": product.thumb_alt, "color": product.color, "title": product.title, "price": product.price, "position": "left" })}
            </div>`
  )}
      </div>
      <hr class="dark horizontal my-5">
      ${renderComponent($$result2, "Footer", Footer, {})}
    </div>
  </main>

` })}`;
}, "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/carrito.astro", void 0);

const $$file = "C:/Users/al791/OneDrive/Documentos/GitHub/Delipostres-Astro/src/pages/carrito.astro";
const $$url = "/Delipostres-Astro/carrito";

const carrito = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carrito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, CardProduct as C, Footer as F, Navbar as N, ShoppingCart as S, carrito as c, data as d };
