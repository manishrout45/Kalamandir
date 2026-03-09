import PriceSection from "./PriceSection";
import SizeSelector from "./SizeSelector";
import StockStatus from "./StockStatus";
import MaterialInfo from "./MaterialInfo";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";

export default function ProductInfo({ product }) {

  return (
    <div>

      <h1 className="text-3xl font-semibold">
        {product.name}
      </h1>

      <PriceSection
        price={product.price}
        originalPrice={product.originalPrice}
      />

      <StockStatus stock={product.stock} />

      <SizeSelector sizes={product.sizes} />

      <MaterialInfo material={product.material} />

      <div className="flex gap-4 mt-8">

        <AddToCartButton product={product} />

        <BuyNowButton product={product} />

      </div>

    </div>
  );
}