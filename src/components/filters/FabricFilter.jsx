export default function FabricFilter({ fabrics, value, onChange }) {

  if (!fabrics.length) return null;

  return (
    <div>

      <h3 className="font-medium mb-3">Fabric</h3>

      <div className="space-y-2">

        {fabrics.map((fabric) => (
          <label key={fabric} className="flex items-center gap-2">

            <input
              type="radio"
              checked={value === fabric}
              onChange={() => onChange(fabric)}
            />

            <span className="text-sm">{fabric}</span>

          </label>
        ))}

      </div>

    </div>
  );
}