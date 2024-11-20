'use server'

export default async function Home() {
  const data: any[] = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
  return (
    <>
      <h1 className="text-center font-sans">Home</h1>

      <ol className="bg-black p-12 m-3 w-fit h-fit text-white rounded-3xl text-xl font-sans font-semibold">
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  );
};
