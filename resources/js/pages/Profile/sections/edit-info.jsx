import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../../../components/form-error';
import Loading from '../../../components/loading';
import Subtitle from '../../../components/sub-title';
import TextInput from '../../../components/text-input';
import Title from '../../../components/title';
import { Button } from '../../../components/ui/button';

export default function EditInfo({ user }) {
    const { name, email } = user;

    const { data, setData, processing, patch, errors } = useForm({
        name: name,
        email: email,
    });

    const isUnchanged = data.name === name && data.email === email;

    const handleEditInfo = (e) => {
        e.preventDefault();
        patch(route('profile.update.info'), {
            preserveScroll: true,
            onSuccess: () => toast.success('Information updated successfully.'),
        });
    };

    return (
        <div>
            <div className="space-y-2">
                <Title>Edit Profile Information</Title>
                <Subtitle>Update your personal details and keep your profile up to date.</Subtitle>
            </div>
            <div className="mt-5">
                <form onSubmit={handleEditInfo} className="space-y-4">
                    <div className="flex flex-col gap-2 md:w-2/3">
                        <TextInput
                            labelName={'userName'}
                            labelTitle={'Username'}
                            placeholder={'Username'}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            type={'text'}
                        />
                        {errors.name && <FormError message={errors.name} />}
                    </div>
                    <div className="flex flex-col gap-2 md:w-2/3">
                        <TextInput
                            labelName={'email'}
                            labelTitle={'Email'}
                            placeholder={'Email'}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            type={'text'}
                        />{' '}
                        {errors.email && <FormError message={errors.email} />}
                    </div>

                    <Button type="submit" disabled={processing || isUnchanged} size="sm">
                        {processing ? <Loading title="Saving..." /> : 'Save Changes'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
