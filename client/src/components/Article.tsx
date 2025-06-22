import Card from "@components/Card";

interface ArticleProps {
  title: string;
  subtitle: string;
}

function Article({ title, subtitle }: ArticleProps) {
  return (
    <article className="w-6xl mx-auto">
      <h2 className="px-4 pt-8 font-bold text-3xl">{title}</h2>
      <h3 className="px-4 pt-2 text-lg">{subtitle}</h3>
      <ul className="grid grid-cols-3 p-4 gap-4">
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
      </ul>
    </article>
  );
}
export default Article;
