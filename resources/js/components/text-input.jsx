import { Input } from './ui/input';
import { Label } from './ui/label';

export default function TextInput({ labelName, labelTitle, ...props }) {
    return (
        <>
            {labelTitle && (
                <Label {...props} htmlFor={labelName}>
                    {labelTitle}
                </Label>
            )}
            <Input {...props} autoComplete="off" id={labelName} />
        </>
    );
}
