export default function CategoryFilter({ categories, value, onChange }) {

  if (!categories.length) return null;

  return (
    <div>

      <h3 className="font-medium mb-3">
        Category
      </h3>

      <div className="space-y-2">

        {categories.map((cat) => (
          <label key={cat} className="flex items-center gap-2">

            <input
              type="radio"
              checked={value === cat}
              onChange={() => onChange(cat)}
            />

            <span className="text-sm">{cat}</span>

          </label>
        ))}

      </div>

    </div>
  );
}