type Time = {
  datetime: string;
};
export default async function Page() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    // ssg
    // without cache: no-store it changes only on hard refresh (same value on refreshes)

    // ssr
    // data is fetched on each refresh
    // { cache: "no-store" }

    // isr
    { next: { revalidate: 5 } }
  );
  const data: Time = await res.json();
  return (
    <div>
      <h1>Hello Date-Fetching!</h1>
      <h2>{data.datetime}</h2>
    </div>
  );
}
