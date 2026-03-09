import ProductListPage from "@/components/ProductListPage";

export default function SalePage() {
  return (
    <ProductListPage
      title="Sale Products"
      apiQuery="sale=true"
    />
  );
}