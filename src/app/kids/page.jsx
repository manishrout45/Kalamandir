import ProductListPage from "@/components/ProductListPage";

export default function KidsPage() {
  return (
    <ProductListPage
      title="Kids Collection"
      apiQuery="gender=kids"
    />
  );
}