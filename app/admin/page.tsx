import { FaBlog, FaBriefcase, FaUsers, FaClock } from "react-icons/fa";
import Link from "next/link";

interface DashboardStats {
  totalPosts: number;
  totalWorks: number;
  totalViews: number;
  recentPosts: Array<{
    id: string;
    title: string;
    date: string;
    status: "published" | "draft";
  }>;
}

async function getDashboardStats(): Promise<DashboardStats> {
  // TODO: Replace with actual API call
  return {
    totalPosts: 12,
    totalWorks: 6,
    totalViews: 1234,
    recentPosts: [
      {
        id: "1",
        title: "Getting Started with Next.js",
        date: "2024-03-15",
        status: "published",
      },
      {
        id: "2",
        title: "Understanding React Hooks",
        date: "2024-03-14",
        status: "draft",
      },
    ],
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaBlog className="text-blue-500 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Total Blog Posts</h3>
              <p className="text-2xl font-semibold text-gray-800">{stats.totalPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FaBriefcase className="text-green-500 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Total Works</h3>
              <p className="text-2xl font-semibold text-gray-800">{stats.totalWorks}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <FaUsers className="text-purple-500 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Total Views</h3>
              <p className="text-2xl font-semibold text-gray-800">{stats.totalViews}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Posts</h2>
          <Link
            href="/admin/posts/new"
            className="text-blue-500 hover:text-blue-600"
          >
            Create New Post
          </Link>
        </div>
        <div className="space-y-4">
          {stats.recentPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  post.status === "published"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {post.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link 
          href="/admin/posts/new" 
          className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Create New Blog Post
        </Link>
        <Link 
          href="/admin/works/new" 
          className="flex items-center justify-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Add New Work
        </Link>
      </div>
    </div>
  );
} 