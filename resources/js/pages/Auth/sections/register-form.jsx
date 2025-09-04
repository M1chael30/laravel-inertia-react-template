import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../../../components/form-error';
import Loading from '../../../components/loading';
import TextInput from '../../../components/text-input';
import TextLink from '../../../components/text-link';

export default function RegisterForm() {
    const form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleRegister = (e) => {
        e.preventDefault();
        form.post(route('register'), {
            preserveScroll: true,
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className={cn('flex flex-col gap-6')}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome new user</CardTitle>
                    <CardDescription>Register a new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister}>
                        <div className="space-y-4">
                            {/* user name */}
                            <div className="grid gap-3">
                                <TextInput
                                    labelName={'userName'}
                                    labelTitle={'Username'}
                                    placeholder={'ex. John Doe'}
                                    value={form.data.name}
                                    onChange={(e) => form.setData('name', e.target.value)}
                                    type={'text'}
                                />
                                {form.errors.name && <FormError message={form.errors.name} />}
                            </div>
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
                            {/* confirm pasword */}
                            <div className="grid gap-3">
                                <TextInput
                                    labelName={'confirmPassword'}
                                    labelTitle={'Confirm Password'}
                                    placeholder={'*****'}
                                    value={form.data.password_confirmation}
                                    onChange={(e) => form.setData('password_confirmation', e.target.value)}
                                    type={'password'}
                                />
                            </div>

                            <Button disabled={form.processing} type="submit" className="mt-3 w-full">
                                {form.processing ? <Loading title={'Please wait'} /> : 'Register'}
                            </Button>

                            <div className="text-center text-sm">
                                Already have an account? <TextLink linkName={'Login'} routeName={'login'} />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <TextLink linkName={'Terms of service'} routeName={'register'} /> and{' '}
                <TextLink linkName={'Privacy Policy'} routeName={'register'} />
            </div>
        </div>
    );
}
