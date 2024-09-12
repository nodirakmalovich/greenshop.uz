'use client'

import BasketTable from "@/components/Basket/BasketTable"
import ShopProductRow from "@/components/shop/ShopProductRow"


export default function BasketPage() {

    return (
        <div className="my-container my-3">
            <BasketTable />
            <ShopProductRow />
        </div>
    )
}
