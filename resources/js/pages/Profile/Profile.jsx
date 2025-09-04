import { Head } from '@inertiajs/react';
import AppLayout from '../../layouts/app-layout';
import DeleteAccount from './sections/delete-account';
import EditInfo from './sections/edit-info';
import UpdatePassword from './sections/update-password';
import UserProfile from './sections/user-profile';

export default function Profile({ productTotal, user }) {
    return (
        <>
            <Head title="Profile" />
            <AppLayout>
                <div className="flex min-h-screen w-full items-center">
                    <div className="mx-auto w-full max-w-screen-md min-w-sm space-y-3 p-3">
                        <div className="grid grid-cols-1 gap-4">
                            <section className="bg-muted/50 border-accent rounded-xl border px-5 py-5 shadow-lg">
                                <UserProfile user={user} productTotal={productTotal} />
                            </section>
                            <div className="bg-muted/50 border-accent rounded-xl border px-5 py-5 shadow-lg">
                                <EditInfo user={user} />
                            </div>
                            <div className="bg-muted/50 border-accent rounded-xl border px-5 py-5 shadow-lg">
                                <UpdatePassword />
                            </div>
                            <div className="bg-muted/50 border-accent rounded-xl border px-5 py-5 shadow-lg">
                                <DeleteAccount />
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
