export default function CategoryPage({ params }) {

  const { category } = params;

  return (

    <div className="max-w-7xl mx-auto px-4 py-16">

      <h1 className="text-3xl font-semibold mb-6 capitalize">
        {category}
      </h1>

      <p>Products for category: {category}</p>

    </div>

  );
}