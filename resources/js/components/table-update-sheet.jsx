import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useForm } from '@inertiajs/react';
import { SquarePen } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { categories, status } from '../pages/Home/Home';
import FormError from './form-error';
import Loading from './loading';
import SelectInput from './select-input';
import TextInput from './text-input';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export default function TableUpdateSheet({ product }) {
    const [open, setOpen] = useState(false);

    const { data, setData, patch, processing, errors, reset } = useForm({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
        status: product.status,
    });

    const isUnchanged =
        data.name === product.name &&
        data.category === product.category &&
        data.price === product.price &&
        data.stock === product.stock &&
        data.status === product.status;

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        patch(route('product.update', product.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setOpen(() => false);
                toast.success('Product updated successfully');
            },
        });
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="w-1/1 justify-start" size={'sm'} variant={'ghost'}>
                    <SquarePen className="h-4 w-4" /> Update
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Update Product</SheetTitle>
                    <SheetDescription>Modify the form below to update a product. Click add when you&apos;re done.</SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-120 py-2">
                    <form onSubmit={handleUpdateProduct}>
                        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2">
                            <div className="col-span-1 space-y-3 sm:col-span-2">
                                <TextInput
                                    labelName={'productName'}
                                    labelTitle={'Product Name'}
                                    placeholder={'Product Name'}
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    type={'text'}
                                />
                                {errors.name && <FormError message={errors.name} />}
                            </div>

                            <div className="space-y-3">
                                <SelectInput
                                    data={categories}
                                    labelTitle={'Product Category'}
                                    htmlFor="productCategory"
                                    value={data.category}
                                    onValueChange={(value) => setData('category', value)}
                                    placeholder="Select a Category"
                                    selectLabelTitle={'Category'}
                                />
                                {errors.category && <FormError message={errors.category} />}
                            </div>

                            <div className="space-y-3">
                                <SelectInput
                                    data={status}
                                    labelTitle={'Product Status'}
                                    htmlFor="productStatus"
                                    value={data.status}
                                    onValueChange={(value) => setData('status', value)}
                                    placeholder="Select a Status"
                                    selectLabelTitle={'Status'}
                                />
                                {errors.status && <FormError message={errors.status} />}
                            </div>

                            <div className="col-span-1 space-y-3 sm:col-span-2">
                                <TextInput
                                    labelName={'productStock'}
                                    labelTitle={'Product Stock'}
                                    placeholder={'Product Stock'}
                                    value={data.stock}
                                    onChange={(e) => setData('stock', e.target.value)}
                                    type={'number'}
                                />
                                {errors.stock && <FormError message={errors.stock} />}
                            </div>

                            <div className="col-span-1 space-y-3 sm:col-span-2">
                                <TextInput
                                    labelName={'productPrice'}
                                    labelTitle={'Product Price'}
                                    placeholder={'Product Price'}
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    type={'number'}
                                />
                                {errors.price && <FormError message={errors.price} />}
                            </div>

                            <Button disabled={isUnchanged || processing} type="submit">
                                {processing ? <Loading title="Loading..." /> : 'Update Product'}
                            </Button>
                            <SheetClose asChild>
                                <Button type="button" variant="outline">
                                    Close
                                </Button>
                            </SheetClose>
                        </div>
                    </form>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}
