import { useState } from 'react';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../../components/ui/button';
import { PostForm } from '../../components/posts/post-form';
import { usePostsStore } from '../../store/posts';

export function Posts() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>();
  const { posts, addPost, updatePost, deletePost } = usePostsStore();

  const handleSubmit = async (data: any) => {
    try {
      if (selectedPost) {
        updatePost(selectedPost.id, data);
        toast.success('Post updated successfully');
      } else {
        addPost(data);
        toast.success('Post added successfully');
      }
      setIsFormOpen(false);
      setSelectedPost(undefined);
    } catch (error) {
      toast.error('Failed to save post');
    }
  };

  const handleEdit = (post: any) => {
    setSelectedPost(post);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        deletePost(id);
        toast.success('Post deleted successfully');
      } catch (error) {
        toast.error('Failed to delete post');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Button className="gap-2" onClick={() => setIsFormOpen(true)}>
          <Plus className="w-4 h-4" /> Add Post
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(post)}
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <PostForm
          post={selectedPost}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsFormOpen(false);
            setSelectedPost(undefined);
          }}
        />
      )}
    </div>
  );
}