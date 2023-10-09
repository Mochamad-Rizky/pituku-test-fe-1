import Image from "next/image";
import Link from "next/link";

type NewsItem = {
  id: string;
  title: string;
  createdAt: string;
  cover: string;
};

type NewsResponse = {
  data: NewsItem[];
  status: string;
};

const getNews = async () => {
  try {
    const response = await fetch(
      "https://api.pituku.id/api/articles?page=1&size=4",
    );
    return (await response.json()) as NewsResponse;
  } catch (error) {
    return {
      status: "fail",
    } as NewsResponse;
  }
};

export default async function News() {
  // fake loading waited for testing suspense
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const news = await getNews();
  return (
    <>
      {news.status === "fail" ? (
        <p className="my-10 text-center font-bold text-red-500">
          Gagal memuat berita
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {news.data.map((item) => (
            <article key={item.id}>
              <Image
                className="w-full rounded-2xl"
                width={200}
                height={150}
                src={item.cover}
                alt={item.title}
              />
              <Link
                href="#"
                className="mt-3 inline-block text-center text-lg font-bold lg:text-left"
              >
                {item.title}
              </Link>
              <p className="mt-4 text-center text-gray-500 lg:text-left">
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
      )}
    </>
  );
}
