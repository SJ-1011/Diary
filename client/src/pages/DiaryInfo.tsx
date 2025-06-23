import { useCreateComments, useGetComments, useGetPosts } from "@hooks/useAxios";
import { useState } from "react";
import { useParams } from "react-router";

function DiaryInfo() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState("");

  const { data, loading } = useGetPosts();
  const { createComment } = useCreateComments();

  const { commentData, commentLoading, refetch } = useGetComments(Number(id));

  const currentPost = data.find((post) => {
    if (post.id === Number(id)) {
      return post;
    }
  });

  const commentList = () => {
    return (
      <>
        {commentData
          .slice()
          .reverse()
          .map((data) => (
            <li key={data.id} className="p-4 bg-green-50 flex flex-row justify-between">
              <p className="whitespace-pre-wrap pl-4">{data.content}</p>
              <small>{data.created_at}</small>
            </li>
          ))}
      </>
    );
  };

  const SubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createComment(content, "comments", Number(id)); // 댓글 등록
      setContent(""); // 입력창 초기화
      await refetch(); // 댓글 리스트 최신화
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="bg-green-200 pb-16 pt-8 min-h-[37.5rem]">
      <section className="h-full max-w-4xl rounded-2xl p-8 bg-white mx-auto">
        {!loading && (
          <>
            <h2 className="font-bold text-3xl">{currentPost?.title}</h2>
            <small>{currentPost?.updated_at}</small>
            <hr />
            <p className="my-8 whitespace-pre-wrap">{currentPost?.content}</p>
            <button type="button" className="ml-auto my-4 block w-fit cursor-pointer bg-green-500 py-2 px-4 rounded-4xl text-white">
              수정하기
            </button>
            <hr />
            <span className="block my-4">댓글</span>
            {!commentLoading && (
              <>
                <ul className="flex flex-col gap-1 my-4">{commentList()}</ul>
              </>
            )}

            <form onSubmit={SubmitHandler}>
              <textarea className="w-full border rounded-4xl p-4" value={content} name="content" onChange={(e) => setContent(e.target.value)} rows={3} placeholder="댓글 내용" />
              <button className="ml-auto my-4 block w-fit cursor-pointer bg-green-500 py-2 px-4 rounded-4xl text-white" type="submit">
                등록
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default DiaryInfo;
