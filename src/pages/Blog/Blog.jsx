import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle('Blog - Car Doctor')
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Regular Car Maintenance',
      date: 'October 10, 2023',
      content:
        'Regular car maintenance is crucial to keep your vehicle running smoothly and safely...',
    },
    {
      id: 2,
      title: 'Tips for Winterizing Your Vehicle',
      date: 'September 25, 2023',
      content:
        'Winter can be tough on your car. Follow these tips to ensure your vehicle is ready for the cold months ahead...',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
              <a
                href={`/blog/${post.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
