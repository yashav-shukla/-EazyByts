import { create } from 'zustand';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

interface PostsState {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'date'>) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [
    {
      id: '1',
      title: 'Getting Started with React and TypeScript',
      excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
      content: '',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    },
    {
      id: '2',
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Explore advanced patterns and practices for building production-ready APIs with Node.js.',
      content: '',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    },
  ],
  addPost: (post) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          ...post,
          id: Math.random().toString(36).slice(2),
          date: new Date().toISOString().split('T')[0],
        },
      ],
    })),
  updatePost: (id, post) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === id ? { ...p, ...post } : p)),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id),
    })),
}));