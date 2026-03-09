import ProductListPage from "@/components/ProductListPage";

export default function MenPage() {
  return (
    <ProductListPage
      title="Men Collection"
      apiQuery="gender=men"
    />
  );
}