export default function SizeFilter({ sizes, value, onChange }) {

  if (!sizes.length) return null;

  return (
    <div>

      <h3 className="font-medium mb-3">
        Size
      </h3>

      <div className="flex flex-wrap gap-2">

        {sizes.map((size) => (

          <button
            key={size}
            onClick={() => onChange(size)}
            className={`px-3 py-1 border rounded-md text-sm
            ${value===size
              ? "bg-black text-white"
              : "hover:bg-gray-100"}`}
          >
            {size}
          </button>

        ))}

      </div>

    </div>
  );
}