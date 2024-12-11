import { Link } from 'react-router-dom';
import { formatDate } from '../lib/utils';

const posts = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    excerpt:
      'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js',
    excerpt:
      'Explore advanced patterns and practices for building production-ready APIs with Node.js.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
  },
];

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <time className="text-sm text-gray-500">
                {formatDate(post.date)}
              </time>
              <h2 className="text-xl font-bold mt-2 mb-3">
                <Link
                  to={`/blog/${post.id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-700"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}