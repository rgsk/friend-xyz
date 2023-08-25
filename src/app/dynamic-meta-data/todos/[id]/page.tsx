const getTodo = async ({ id }: { id: number }) => {
  // ssr
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: "no-cache",
  });
  return res.json();
};

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const todo = await getTodo({ id: +id });
  return {
    title: todo.title,
  };
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const todo = await getTodo({ id: +id });
  return (
    <div>
      <p>dynamic-meta-data</p>
      <p>{JSON.stringify(todo, null, 2)}</p>
    </div>
  );
}
