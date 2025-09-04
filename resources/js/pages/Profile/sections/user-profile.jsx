import { Link } from '@inertiajs/react';
import { BadgeIcon, ChevronLeft, ShoppingCart, UserCheck } from 'lucide-react';
import Title from '../../../components/title';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';

export default function UserProfile({ productTotal, user }) {
    const { name, email_verified_at } = user;
    return (
        <div className="space-y-5">
            <div className="flex justify-between">
                {/* page title */}
                <Title>User Profile</Title>
                {/* back to home link */}
                <Button size="sm" asChild>
                    <Link preserveScroll prefetch="click" href={route('home')}>
                        <ChevronLeft /> Back
                    </Link>
                </Button>
            </div>

            {/* profile name */}
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarFallback className="border-accent-foreground border">{name[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <h1 className="text-lg">{name}</h1>
            </div>

            {/* profile badges */}
            <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                    <h1 className="text-muted-foreground text-sm">Badge</h1>
                    {email_verified_at ? (
                        <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
                            <BadgeCheckIcon /> verfied
                        </Badge>
                    ) : (
                        <Badge variant={'secondary'}>
                            <BadgeIcon /> Not verified
                        </Badge>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-muted-foreground text-sm">Role</h1>
                    <Badge>
                        <UserCheck /> User
                    </Badge>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-muted-foreground text-sm">Total products</h1>
                    <div className="flex items-center justify-end gap-1">
                        <ShoppingCart className="text-muted-foreground size-4" /> <p className="text-muted-foreground text-md">{productTotal}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
