import { BadgeCheckIcon, CircleArrowDown, CircleSlash } from 'lucide-react';
import { Badge } from './ui/badge';

export default function StatusBadge({ status }) {
    return (
        <>
            {status.includes('Out of Stock') && (
                <Badge variant="destructive">
                    <CircleSlash />
                    {status}
                </Badge>
            )}
            {status.includes('In Stock') && (
                <Badge variant="default">
                    <BadgeCheckIcon />
                    {status}
                </Badge>
            )}
            {status.includes('Low Stock') && (
                <Badge variant="secondary" className="bg-yellow-500 dark:bg-yellow-600">
                    <CircleArrowDown />
                    {status}
                </Badge>
            )}
        </>
    );
}
