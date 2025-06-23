import { useGetPosts } from "@hooks/useAxios";
import { useState } from "react";
import { Link } from "react-router";

interface CardProps {
  id?: number;
}

const ITEMS_PER_PAGE = 9;

function Card({ id }: CardProps) {
  const { data, loading, error } = useGetPosts();
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생! {error.message}</p>;

  if (id) {
    const index = data.length - id;
    const cardData = data.find((post) => post.id === index);

    return (
      <li className="p-4 bg-white shadow-2xl rounded-2xl flex flex-col gap-1 relative pb-16">
        <p className="font-bold text-lg">{cardData?.title}</p>
        <p
          style={{
            whiteSpace: "pre-wrap",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {cardData?.content}
        </p>
        <small className="block text-right">{cardData?.updated_at}</small>
        <button type="button" className="absolute bottom-4 cursor-pointer bg-green-700 py-2 px-4 rounded-4xl text-white">
          상세보기
        </button>
      </li>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-3 px-4 gap-4">
        {currentData.map((post) => (
          <li key={post.id} className="min-h-60 p-4 bg-white shadow-2xl rounded-2xl flex flex-col gap-1 relative pb-16">
            <p className="font-bold text-lg">{post.title}</p>
            <p
              style={{
                whiteSpace: "pre-wrap",
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.content}
            </p>
            <small className="block text-right">{post.updated_at}</small>
            <Link to={`/diary/info/${post.id}`} className="absolute bottom-4 cursor-pointer bg-green-700 py-2 px-4 rounded-4xl text-white">
              상세보기
            </Link>
          </li>
        ))}
      </ul>

      {/* 페이지네이션 */}
      <nav className="flex justify-center gap-2 mt-6">
        {Array.from({ length: pageCount }, (_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded ${page === i + 1 ? "bg-green-700 text-white" : "bg-green-300"}`}>
            {i + 1}
          </button>
        ))}
      </nav>
    </>
  );
}

export default Card;
