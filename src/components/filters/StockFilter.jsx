export default function StockFilter({ value, onChange }) {

  return (
    <div>

      <h3 className="font-medium mb-3">
        Availability
      </h3>

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={value || false}
          onChange={(e)=>onChange(e.target.checked)}
        />

        <span className="text-sm">
          In Stock Only
        </span>

      </label>

    </div>
  );
}