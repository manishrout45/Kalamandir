import ProductListPage from "@/components/ProductListPage";

export default function HomeDecorPage() {
  return (
    <ProductListPage
      title="Home Decor Collection"
      apiQuery="category=home-decor"
    />
  );
}