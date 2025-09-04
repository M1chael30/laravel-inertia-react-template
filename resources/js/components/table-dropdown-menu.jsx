import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { TableDeleteAlert } from './table-delete-alert';
import TableUpdateSheet from './table-update-sheet';
import { Button } from './ui/button';




export default function TableDropdownMenu({ product }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={'sm'}>
                    <Ellipsis className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-10">
                <DropdownMenuLabel>Operations</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <TableUpdateSheet product={product} />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <TableDeleteAlert product={product} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
