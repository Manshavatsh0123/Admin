'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/network';

export default function LoginPage() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    const adminLoginMutation = useMutation({
        mutationKey: ['adminLogin'],

        mutationFn: async ({ email, password }: { email: string, password: string }) => {
            const response = await apiClient.post("/admin/login", { email, password })
            return response.data;
        },

        onSuccess(data) {
            console.log("Login Success:", data);

            // store token
            localStorage.setItem("token", data.token);

            // store Id
            localStorage.setItem("adminId", data.id);

            router.push("/admin");
        },

        onError(error: any) {
            console.log("Login Error:", error);

            setError(
                error?.response?.data?.message || "Invalid login credentials"
            );
        }
    });


    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!loginId.trim()) {
            setError('Please enter your Login ID');
            return;
        }

        if (!password.trim()) {
            setError('Please enter your password');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        adminLoginMutation.mutate({
            email: loginId,
            password
        });
    };

    const handleForgotPassword = () => {
        alert('Password reset functionality would be implemented here');
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-10 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6">

                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/images/logoAdmin.png"
                                alt="Login logo"
                                width={50}
                                height={60}
                            />
                        </div>

                        <h1 className="text-[30px] font-bold text-gray-900">
                            Welcome Back
                        </h1>

                        <p className="text-[16px] text-[#4B5563]">
                            Login to your Persistent Learning account
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-[#CE3820] px-4 py-3 rounded text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-black">
                                Login ID
                            </label>

                            <Input
                                type="text"
                                placeholder="12345678"
                                value={loginId}
                                onChange={(e) => setLoginId(e.target.value)}
                                disabled={adminLoginMutation.isPending}
                            />
                        </div>

                        <div className="space-y-2">

                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium text-black">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    onClick={handleForgotPassword}
                                    className="text-sm text-[#CE3820] font-medium"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <div className="relative">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={adminLoginMutation.isPending}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword
                                        ? <EyeOff className="w-5 h-5" />
                                        : <Eye className="w-5 h-5" />}
                                </button>

                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={adminLoginMutation.isPending}
                            className="w-full bg-[#CE3820] text-white"
                        >
                            {adminLoginMutation.isPending
                                ? "Logging in..."
                                : "Login"}
                        </Button>

                    </form>
                </div>
            </div>
        </main>
    );
}