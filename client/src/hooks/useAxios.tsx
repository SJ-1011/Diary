import axios from "axios";
import { useState, useEffect } from "react";

export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  category: string;
}

export function useGetPosts() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

export function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const createPost = async (title: string, content: string, category: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await axios.post("http://localhost:4000/posts", { title, content, category });
      setSuccess(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error, success };
}
