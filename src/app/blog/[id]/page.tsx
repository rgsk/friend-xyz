export default function Page({ params }: { params: { id: string } }) {
  return <h1>Blog page: {params.id}</h1>;
}
