import { useForm } from '@inertiajs/react';
import { TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import FormError from '../../../components/form-error';
import Loading from '../../../components/loading';
import Subtitle from '../../../components/sub-title';
import TextInput from '../../../components/text-input';
import Title from '../../../components/title';
import { Button } from '../../../components/ui/button';

export default function DeleteAccount() {
    const [isOpen, setIsOpen] = useState(false);

    const {
        data,
        setData,
        processing,
        delete: destroy,
        errors,
        reset,
    } = useForm({
        password: '',
    });

    const isUnchanged = data.password === '';

    const handleDeleteAccount = (e) => {
        e.preventDefault();
        destroy(route('profile.delete'), {
            preserveScroll: true,
            onFinish: () => reset(),
        });
    };

    return (
        <div>
            <div className="space-y-2">
                <Title> Delete Account</Title>
                <Subtitle>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</Subtitle>
            </div>
            <div className="mt-5">
                {isOpen && (
                    <form onSubmit={handleDeleteAccount} className="space-y-4">
                        <div className="flex flex-col gap-2 md:w-2/3">
                            <TextInput
                                labelName={'Password'}
                                labelTitle={'Password'}
                                placeholder={'Password'}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                type={'password'}
                            />{' '}
                            {errors.password && <FormError message={errors.password} />}
                            <Subtitle className="flex items-center gap-1">
                                <TriangleAlert className="size-3.5" />
                                Enter your current password first to before deleting this account.
                            </Subtitle>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button type="submit" disabled={processing || isUnchanged} size="sm">
                                {processing ? <Loading title="Loading..." /> : 'Confirm'}
                            </Button>
                            <Button onClick={() => setIsOpen((prev) => !prev)} type="button" size="sm" variant="outline">
                                Cancel
                            </Button>
                        </div>
                    </form>
                )}
                {!isOpen && (
                    <Button onClick={() => setIsOpen((prev) => !prev)} size="sm" variant="destructive">
                        Delete Account
                    </Button>
                )}
            </div>
        </div>
    );
}
