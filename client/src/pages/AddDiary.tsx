import React, { useState } from "react";
import { useCreatePost } from "@hooks/useAxios"; // 경로는 실제 위치에 맞게 수정

function AddDiary() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const category = "diary";
  const { createPost, loading, error, success } = useCreatePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    await createPost(title, content, category);
    if (!error) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <main className="bg-green-200 pb-16">
      <article className="w-6xl mx-auto">
        <p className="text-2xl font-bold mb-6 pt-8">일기 작성하기</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-white border border-gray-300 rounded px-3 py-2" />
          <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} rows={6} className="bg-white border border-gray-300 rounded px-3 py-2 resize-none" />
          <button type="submit" disabled={loading} className="bg-green-700 text-white py-2 rounded hover:bg-green-800 disabled:opacity-50">
            {loading ? "작성 중..." : "작성하기"}
          </button>
        </form>
        {error && <p className="mt-4 text-red-600">글 작성에 실패했습니다.</p>}
        {success && <p className="mt-4 text-green-600">글 작성이 완료되었습니다!</p>}
      </article>
    </main>
  );
}

export default AddDiary;
