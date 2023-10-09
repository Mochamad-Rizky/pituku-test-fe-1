export default function SkeletonNews() {
  const data = Array.from({ length: 4 });

  return (
    <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
      {data.map((_, index) => (
        <article key={index} className="rounded-2xl bg-gray-300 p-5">
          <div className="mb-5 animate-pulse">
            <div className="h-[150px] w-full rounded bg-gray-500"></div>
          </div>
          <div className="mb-4 animate-pulse">
            <div className="h-[10px] w-full rounded bg-gray-500"></div>
          </div>
          <div className="flex animate-pulse flex-col gap-3">
            <div className="h-[10px] w-full rounded bg-gray-500"></div>
            <div className="h-[10px] w-full rounded bg-gray-500"></div>
          </div>
        </article>
      ))}
    </div>
  );
}
