import ProductListPage from "@/components/ProductListPage";

export default function OtherPage() {
  return (
    <ProductListPage
      title="Other Collection"
      apiQuery="gender=other"
    />
  );
}