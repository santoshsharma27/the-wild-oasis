function Page({ params }) {
  const { reviewId, productId } = params;

  return (
    <h1>
      Product id: {productId} and ReviewId: {reviewId}
    </h1>
  );
}

export default Page;
