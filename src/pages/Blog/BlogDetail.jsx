import { useParams, Link } from "react-router-dom";
import blogData from "../../constants/blog";
import { motion } from "framer-motion";

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));
  const otherBlogs = blogData.filter((b) => b.id !== parseInt(id));

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col py-15 lg:flex-row gap-8">
        {/* Sidebar with other blogs */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Other Articles
            </h3>
            <div className="space-y-4">
              {otherBlogs.map((blog) => (
                <Link
                  to={`/blog/${blog.id}`}
                  key={blog.id}
                  className="block group"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-20 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {blog.date} · {blog.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {[...new Set(blogData.map((blog) => blog.category))].map(
                (category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition"
                  >
                    {category}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-2/3">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-gray-500">{blog.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {blog.title}
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">{blog.subtitle}</h2>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium">
                {blog.author
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {blog.author}
                </p>
                <p className="text-xs text-gray-500">{blog.date}</p>
              </div>
            </div>

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto rounded-lg mb-8 object-cover"
            />

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {blog.excerpt}
              </p>

              {blog.content.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogDetail;
