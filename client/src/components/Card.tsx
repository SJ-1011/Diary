import { useGetPosts } from "@hooks/useAxios";

interface CardProps {
  id?: number;
}

function Card({ id }: CardProps) {
  const { data, loading, error } = useGetPosts();

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생! {error.message}</p>;

  if (id) {
    const index = data.length - id;
    const cardData = data.find((post) => post.id === index);

    return (
      <li className="p-4 bg-white shadow-2xl rounded-2xl flex flex-col gap-1 relative pb-16">
        <p className="font-bold text-lg">{cardData?.title}</p>
        <p>{cardData?.content}</p>
        <p className="text-right">{cardData?.updated_at}</p>
        <button type="button" className="absolute bottom-4 cursor-pointer bg-green-700 py-2 px-4 rounded-4xl text-white">
          상세보기
        </button>
      </li>
    );
  }

  return (
    <div>
      <p>글 제목</p>
      <p>글 내용</p>
      <p>2025-06-22</p>
      <button type="button">상세보기</button>
    </div>
  );
}

export default Card;
