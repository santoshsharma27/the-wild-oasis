function Page({ params }) {
  const { productId } = params;

  return <h1>Product Id: {productId}</h1>;
}

export default Page;
