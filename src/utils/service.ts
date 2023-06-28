export async function getUsers() {
  const response = await fetch(`http://localhost:5000/user`);
  const data = response.json();
  return data;
}

export async function getProducts() {
  const response = await fetch(`http://localhost:5000/product`);
  const data = response.json();
  return data;
}

export async function getProduct(id: any) {
  const response = await fetch(`http://localhost:5000/product/` + id);
  const data = response.json();
  return data;
}
