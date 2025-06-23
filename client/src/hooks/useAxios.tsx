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

export interface Comment {
  id: number;
  content: string;
  created_at: string;
  category: string;
  no: number;
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

export function useGetComments(no: number) {
  const [data, setData] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/comments/${no}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [no]);

  return { commentData: data, commentLoading: loading, error, refetch: fetchData };
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

export function useCreateComments() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const createComment = async (content: string, category: string, no: number) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await axios.post("http://localhost:4000/comments", { content, category, no });
      setSuccess(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { createComment, loading, error, success };
}
