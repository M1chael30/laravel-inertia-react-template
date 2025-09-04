import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { router } from '@inertiajs/react';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';

export default function ReloadBtn() {
    const [isLoading, setIsLoading] = useState(false);

    const reloadPage = () => {
        setIsLoading(() => true);
        router.get(
            route('home'),
            {},
            {
                onFinish: () => setIsLoading(() => false),
            },
        );
    };

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" size="sm" onClick={reloadPage}>
                    <RefreshCw className={`${isLoading && 'animate-spin'}`} />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Reload</p>
            </TooltipContent>
        </Tooltip>
    );
}
