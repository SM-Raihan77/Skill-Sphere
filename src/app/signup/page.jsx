

"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Form,
    Input,
    Label,
    TextField,
    FieldError,
    Description
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";


export default function SignUpPage() {
    const router = useRouter();

    
    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        if (error) {
            toast.error(error.message || "Registration failed!");
            return;
        }

        if (data) {
            toast.success("Registration successful! Please Log In");
            router.push('/signin');
        }
    }
    const handleGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
            });
            toast.success("Redirecting to Google...");
        } catch (error) {
            toast.error("Google sign-in failed!");
        }
    };

    return (
        <Card className="border mx-auto w-full max-w-[500px] py-10 mt-10 shadow-lg">
            <h1 className="text-center text-2xl font-bold mb-6">Sign Up</h1>

            <Form className="flex w-full max-w-[380px] mx-auto flex-col gap-6 px-4" onSubmit={onSubmit}>
                <TextField isRequired name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                <p className="text-center">Or</p>

                <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full'}><GrGoogle /> Sign Up With Google</Button>

            </Form>
        </Card>
    );
}