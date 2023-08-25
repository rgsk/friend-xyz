type Time = {
  datetime: string;
};

const getTime = async (): Promise<Time> => {
  // isr
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    { next: { revalidate: 5 } }
  );
  return res.json();
};
const getTodo = async () => {
  // ssr
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-cache",
  });
  return (res.json() as any)[0];
};

const getRepo = async () => {
  // ssg
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  return res.json();
};
export default async function Page() {
  const [time, todo, repo] = await Promise.all([
    getTime(),
    getTodo(),
    getRepo(),
  ]);
  return (
    <div>
      <h1>Hello Date-Fetching!</h1>
      <h2>{time.datetime}</h2>
      <p>{JSON.stringify(todo, null, 2)}</p>
      <p>{repo.name}</p>
    </div>
  );
}
