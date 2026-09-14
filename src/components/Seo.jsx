import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Kitza";
const defaultDescription =
  "Shop premium football jerseys from the world's biggest clubs and national teams at Kitza.";

function setMeta(name, content, property = false) {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function Seo({ title, description = defaultDescription, image, structuredData }) {
  const location = useLocation();

  useEffect(() => {
    if (!title && location.pathname.startsWith("/product/")) {
      return;
    }

    const routeTitles = {
      "/": "Football Jerseys",
      "/shop": "Shop Football Jerseys",
      "/contact": "Contact Kitza",
      "/auth": "Account Login",
      "/account": "My Account",
      "/cart": "Shopping Cart",
      "/checkout": "Checkout",
    };
    const pageTitle = `${title || routeTitles[location.pathname] || siteName} | ${siteName}`;
    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    document.title = pageTitle;
    setMeta("description", description);
    setMeta("robots", "index,follow");
    setMeta("og:title", pageTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", description);
    setCanonical(canonicalUrl);

    if (image) {
      setMeta("og:image", image, true);
      setMeta("twitter:image", image);
    }

    let schema = document.head.querySelector('script[data-kitza-schema="true"]');

    if (structuredData) {
      if (!schema) {
        schema = document.createElement("script");
        schema.type = "application/ld+json";
        schema.dataset.kitzaSchema = "true";
        document.head.appendChild(schema);
      }

      schema.textContent = JSON.stringify(structuredData);
    } else if (schema) {
      schema.remove();
    }
  }, [description, image, location.pathname, structuredData, title]);

  return null;
}

export default Seo;
