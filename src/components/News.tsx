import Image from "next/image";

type NewsItem = {
  id: string;
  title: string;
  createdAt: string;
  cover: string;
};

const getNews = async () => {
  const response = await fetch(
    "https://api.pituku.id/api/articles?page=1&size=4",
  );
  const { data } = (await response.json()) as { data: NewsItem[] };
  return data;
};

export default async function News() {
  // fake loading waited for testing suspense
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = await getNews();

  return (
    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
      {data.map((item) => (
        <article key={item.id}>
          <Image
            className="w-full rounded-2xl"
            width={200}
            height={150}
            src={item.cover}
            alt={item.title}
          />
          <h1 className="mt-3 text-center text-lg font-bold lg:text-left">
            {item.title}
          </h1>
          <p className="mt-4 text-center text-gray-400 lg:text-left">
            {new Date(item.createdAt).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </article>
      ))}
    </div>
  );
}
