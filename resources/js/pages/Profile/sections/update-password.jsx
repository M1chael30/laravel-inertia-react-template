import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../../../components/form-error';
import Loading from '../../../components/loading';
import Subtitle from '../../../components/sub-title';
import TextInput from '../../../components/text-input';
import Title from '../../../components/title';
import { Button } from '../../../components/ui/button';

export default function UpdatePassword() {
    const { data, setData, processing, put, errors, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const isUnchanged = data.current_password === '' && data.password === '' && data.password_confirmation === '';

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        put(route('profile.update.password'), {
            preserveScroll: true,
            onFinish: () => reset(),
            onSuccess: () => toast.success('Password updated successfully.'),
        });
    };

    return (
        <div>
            <div className="space-y-2">
                <Title>Change Password</Title>
                <Subtitle>Secure your account by changing your password anytime.</Subtitle>
            </div>
            <div className="mt-5">
                <form onSubmit={handleUpdatePassword} className="space-y-4">
                    <div className="flex flex-col gap-2 md:w-2/3">
                        <TextInput
                            labelName={'currentPassword'}
                            labelTitle={'Current Password'}
                            placeholder={'Current Password'}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type={'password'}
                        />
                        {errors.current_password && <FormError message={errors.current_password} />}
                    </div>
                    <div className="flex flex-col gap-2 md:w-2/3">
                        <TextInput
                            labelName={'newPassword'}
                            labelTitle={'New Password'}
                            placeholder={'New Password'}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type={'password'}
                        />{' '}
                        {errors.password && <FormError message={errors.password} />}
                    </div>
                    <div className="flex flex-col gap-2 md:w-2/3">
                        <TextInput
                            labelName={'passwordConfimation'}
                            labelTitle={'Confirm Password'}
                            placeholder={'Confirm Password'}
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type={'password'}
                        />{' '}
                        {errors.password_confirmation && <FormError message={errors.password_confirmation} />}
                    </div>

                    <Button type="submit" disabled={processing || isUnchanged} size="sm">
                        {processing ? <Loading title="Saving..." /> : 'Save Changes'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
