export default function SubCategoryPage({ params }) {

  const { category, sub } = params;

  return (

    <div className="max-w-7xl mx-auto px-4 py-16">

      <h1 className="text-3xl font-semibold capitalize">
        {category} / {sub}
      </h1>

      <p className="mt-4">
        Products for {sub} inside {category}
      </p>

    </div>

  );
}