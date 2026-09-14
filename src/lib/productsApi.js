const productsEndpoint = "https://kitza-backend.vercel.app/products";
let productsPromise;

export function fetchProducts() {
  if (!productsPromise) {
    productsPromise = fetch(productsEndpoint).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    });
  }

  return productsPromise;
}
