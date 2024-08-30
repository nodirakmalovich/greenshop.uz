"use client";

import { ProductsData } from "@/data/data";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const { productId } = params;
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const selected = ProductsData.filter((product) => product.id == productId);
    setSelectedItem(selected[0]);
  }, []);

  return (
    <div>
      <h1>{selectedItem?.name}</h1>
      <h1>{selectedItem?.amount}</h1>
    </div>
  );
}

export default Page;
