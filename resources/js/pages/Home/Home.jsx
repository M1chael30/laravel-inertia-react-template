import { Head } from '@inertiajs/react';
import PaginationLinks from '../../components/pagination-links';
import AppLayout from '../../layouts/app-layout';
import Header from './sections/header';
import ProductTable from './sections/product-table';

export const categories = ['Stationery', 'Bags', 'Accessories', 'Electronics', 'Home'];
export const status = ['In Stock', 'Low Stock', 'Out of Stock'];

export default function App({ products }) {
    return (
        <>
            <Head title="Product Listing" />
            <AppLayout>
                <div className="flex min-h-screen w-full items-center">
                    <div className="mx-auto w-full max-w-screen-lg min-w-sm space-y-3 px-3">
                        <Header products={products.data} />
                        <ProductTable products={products} />
                        <PaginationLinks links={products.links} />
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
