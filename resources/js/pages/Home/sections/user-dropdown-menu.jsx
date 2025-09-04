import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, LogOut, User2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export default function UserDropdownMenu() {
    const { name } = usePage().props.auth.user;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'sm'}>
                    {name.split(' ')[0]}
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link prefetch="click" href={route('profile')} className="w-full cursor-pointer">
                        <User2 />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={route('logout')} as="button" method="post" className="w-full cursor-pointer">
                        <LogOut /> Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
