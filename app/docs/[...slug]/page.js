function Page({ params }) {
  const { slug } = params;
  return <h1>Docs Page for {slug[2]}</h1>;
}

export default Page;
