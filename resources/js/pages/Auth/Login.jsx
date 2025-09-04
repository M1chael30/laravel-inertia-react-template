import { Head } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import AuthLayout from '../../layouts/auth-layout';
import LoginForm from './sections/login-form';

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <AuthLayout>
                <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                    <div className="flex w-full max-w-sm flex-col gap-6">
                        <div className="flex items-center gap-2 self-center font-medium">
                            <Button size={'sm'}>
                                <ShoppingCart />
                            </Button>
                            Product co.
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </AuthLayout>
        </>
    );
}
