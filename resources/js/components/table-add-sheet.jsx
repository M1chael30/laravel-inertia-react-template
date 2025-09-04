import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useForm } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { categories, status } from '../pages/Home/Home';
import FormError from './form-error';
import Loading from './loading';
import SelectInput from './select-input';
import TextInput from './text-input';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export default function TableAddSheet() {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        category: '',
        price: '',
        stock: '',
        status: '',
    });

    const handleAddProduct = (e) => {
        e.preventDefault();
        post(route('product.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setOpen(() => false);
                toast.success('Product created successfully');
            },
        });
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={() => setOpen(() => true)} variant={'outline'} size={'sm'}>
                            <Plus />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span>Add Product</span>
                    </TooltipContent>
                </Tooltip>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Add Product</SheetTitle>
                    <SheetDescription>Fill the form below to add a product. Click add when you&apos;re done.</SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-120 py-2">
                    <form onSubmit={handleAddProduct}>
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

                            <Button disabled={processing} type="submit">
                                {processing ? <Loading title="Loading..." /> : 'Add Product'}
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
