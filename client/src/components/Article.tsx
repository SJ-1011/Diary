import Card from "@components/Card";
import { Link } from "react-router";

interface ArticleProps {
  title: string;
  subtitle: string;
  page?: string;
}

function Article({ title, subtitle, page }: ArticleProps) {
  return (
    <article className="w-6xl mx-auto">
      <h2 className="px-4 pt-8 font-bold text-3xl">{title}</h2>
      <h3 className="px-4 pt-2 text-lg">{subtitle}</h3>
      {page === "diary" && (
        <Link to="/diary/add" className="flex justify-end">
          <span className="mx-4 block w-fit cursor-pointer bg-green-500 py-2 px-4 rounded-4xl text-white">글 쓰기</span>
        </Link>
      )}

      <ul className="grid grid-cols-3 p-4 gap-4">
        {!page && (
          <>
            <Card id={1} />
            <Card id={2} />
            <Card id={3} />
          </>
        )}
      </ul>
      {page === "diary" && (
        <>
          <Card />
        </>
      )}
    </article>
  );
}
export default Article;
