import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

export default function AuthLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
            <Toaster position="top-right" />
        </ThemeProvider>
    );
}
