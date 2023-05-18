//型定義
export type Product = {
  name: string;
  image: string;
  class: string;
  alt: string;
  desc: string;
};

//APIの呼び出し
export async function getProduct() {
  const response = await fetch(
    import.meta.env.SKILL,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 404) {
    return null;
  }
  const product = (await response.json()) as Product;
  return product;
}