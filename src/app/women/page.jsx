import ProductListPage from "@/components/ProductListPage";

export default function WomenPage() {
  return (
    <ProductListPage
      title="Women Collection"
      apiQuery="gender=women"
    />
  );
}