'use client'

import BasketTable from "@/components/Basket/BasketTable";
import ShopProductRow from "@/components/Shop/ShopProductRow";

export default function Basket() {

    return (
        <div className="my-container my-3">
            <BasketTable />
            <ShopProductRow />
        </div>
    )
}
