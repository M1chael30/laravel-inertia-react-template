import { router, useForm, usePage } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';
import ModeToggle from '../../../components/mode-toggle';
import ReloadBtn from '../../../components/reload-btn';
import SelectInput from '../../../components/select-input';
import TableAddSheet from '../../../components/table-add-sheet';
import TextInput from '../../../components/text-input';
import { status } from '../Home';
import UserDropdownMenu from './user-dropdown-menu';
import { Button } from '../../../components/ui/button';

export default function Header({ products }) {
    const params = route().params;
    const { name } = usePage().props.auth.user;

    const form = useForm({
        search: params.search || '',
        status: params.status || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('home'), { search: form.data.search, status: params.status });
    };

    const handleCategoryFilter = (e) => {
        e.preventDefault();
        router.get(route('home', { status: form.data.status, search: params.search }));
    };

    return (
        <div className="flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0">
            {/* left */}
            <div className="w-full space-y-3 md:w-1/2">
                <div className="flex items-center gap-2">
                    <Button size={'sm'}>
                        <ShoppingCart />
                    </Button>
                    <h1 className="text-lg">Products co.</h1>
                </div>
                <div>
                    <p className="text-muted-foreground text-sm">A list of products</p>
                    <p className="text-muted-foreground text-sm">Total: {products?.length ?? 'N/A'}</p>
                </div>
            </div>

            {/* right */}
            <div className="flex w-full flex-col gap-3 md:w-1/2">
                {/* top */}
                <div className="flex justify-end gap-3">
                    <TableAddSheet />
                    <ModeToggle />
                    <ReloadBtn />
                    <UserDropdownMenu />
                </div>

                {/* bottom */}
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={handleSearch} className="w-full">
                        <TextInput
                            type="search"
                            onChange={(e) => form.setData('search', e.target.value)}
                            placeholder="Search by product name and category..."
                            value={form.data.search}
                        />
                    </form>
                    <form onChange={handleCategoryFilter}>
                        <SelectInput
                            data={status}
                            value={form.data.status}
                            onValueChange={(value) => form.setData('status', value)}
                            placeholder="Filter by status"
                            selectLabelTitle={'Status'}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
