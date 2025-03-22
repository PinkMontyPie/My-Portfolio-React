import Link from "next/link";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  status: "published" | "draft";
  views: number;
}

// This would come from your database
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    date: "2024-03-15",
    status: "published",
    views: 1234,
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    date: "2024-03-14",
    status: "draft",
    views: 0,
  },
  // Add more mock posts as needed
];

export default function BlogPostsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Blog Posts</h1>
        <Link
          href="/admin/posts/new"
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FaPlus className="mr-2" />
          New Post
        </Link>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockPosts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{post.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.views}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEdit className="text-lg" />
                    </Link>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => {
                        // Handle delete
                        console.log("Delete post:", post.id);
                      }}
                    >
                      <FaTrash className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 