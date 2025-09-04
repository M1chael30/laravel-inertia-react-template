import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useForm } from '@inertiajs/react';
import FormError from '../../../components/form-error';
import Loading from '../../../components/loading';
import TextInput from '../../../components/text-input';
import TextLink from '../../../components/text-link';

export default function LoginForm() {
    const form = useForm({
        email: '',
        password: '',
    });

    const handleLogin = (e) => {
        e.preventDefault();
        form.post(route('login'), {
            preserveScroll: true,
            onFinish: () => form.reset('password'),
        });
    };

    return (
        <div className={cn('flex flex-col gap-6')}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back again</CardTitle>
                    <CardDescription>Login using email and password</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="space-y-4">
                            {/* email */}
                            <div className="grid gap-3">
                                <TextInput
                                    labelName={'email'}
                                    labelTitle={'Email'}
                                    placeholder={'m@example.com'}
                                    value={form.data.email}
                                    onChange={(e) => form.setData('email', e.target.value)}
                                    type={'text'}
                                />
                                {form.errors.email && <FormError message={form.errors.email} />}
                            </div>
                            {/* password */}
                            <div className="grid gap-3">
                                <TextInput
                                    labelName={'password'}
                                    labelTitle={'Password'}
                                    placeholder={'*****'}
                                    value={form.data.password}
                                    onChange={(e) => form.setData('password', e.target.value)}
                                    type={'password'}
                                />
                                {form.errors.password && <FormError message={form.errors.password} />}
                            </div>
                            <Button disabled={form.processing} type="submit" className="mt-3 w-full">
                                {form.processing ? <Loading title={'Please wait'} /> : 'Login'}
                            </Button>

                            <div className="text-center text-sm">
                                Don&apos;t have an account? <TextLink linkName={'Register'} routeName={'register'} />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <TextLink linkName={'Terms of service'} routeName={'login'} /> and{' '}
                <TextLink linkName={'Privacy Policy'} routeName={'login'} />
            </div>
        </div>
    );
}
