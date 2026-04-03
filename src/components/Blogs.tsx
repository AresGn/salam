import React from "react";
import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./ui/BlogCard";
import { SectionTitle } from "./ui/SectionTitle";

export function Blogs() {
  const { blogs, loading } = useBlogs();

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Blog</SectionTitle>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Chargement des articles...
          </p>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                📝 Blog en préparation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Je prépare actuellement du contenu sur l'entrepreneuriat, la supply chain,
                et le développement web. Restez connectés pour découvrir mes articles !
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Supply Chain
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Entrepreneuriat
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Développement Web
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <BlogCard key={blog.slug} {...blog} />
              ))}
            </div>

            {/* "See All Blogs" Button */}
            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Voir plus d'articles →
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
