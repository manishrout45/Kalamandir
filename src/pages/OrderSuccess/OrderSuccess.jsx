import React, { Suspense } from "react";
import OrderSuccessContent from "./OrderSuccessContent";

export default function OrderSuccess() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}