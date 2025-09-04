import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import StatusBadge from '../../../components/status-badge';
import TableDropdownMenu from '../../../components/table-dropdown-menu';
import { ScrollArea, ScrollBar } from '../../../components/ui/scroll-area';

const tableHeader = ['#', 'name', 'category', 'price', 'stock', 'status', 'Action'];

export default function ProductTable({ products }) {
    return (
        <ScrollArea className="border-accent h-96 rounded-md border shadow-lg bg-muted/50">
            <Table>
                <TableHeader>
                    <TableRow>
                        {tableHeader &&
                            tableHeader.map((tableHeadItem, index) => (
                                <TableHead
                                    key={index}
                                    className={cn('text-center tracking-wide', tableHeadItem.includes(tableHeader[0]) && 'font-extrabold')}
                                >
                                    {tableHeadItem[0].toLocaleUpperCase() + tableHeadItem.substring(1)}
                                </TableHead>
                            ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.data.length > 0 ? (
                        products.data.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-center font-medium">{index + 1}</TableCell>
                                <TableCell className="text-center">{product.name}</TableCell>
                                <TableCell className="text-center">{product.category}</TableCell>
                                <TableCell className="text-center">$ {product.price.toFixed(2)}</TableCell>
                                <TableCell className="text-center">{product.stock}</TableCell>
                                <TableCell className="text-center">
                                    <StatusBadge status={product.status} />
                                </TableCell>
                                <TableCell className="text-center">
                                    <TableDropdownMenu product={product} />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={tableHeader.length} className="text-center">
                                No products shown.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
