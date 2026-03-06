'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Simulate login validation
            if (!loginId.trim()) {
                throw new Error('Please enter your Login ID');
            }
            if (!password.trim()) {
                throw new Error('Please enter your password');
            }
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters');
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Store login info in localStorage
            localStorage.setItem('userLoginId', loginId);
            localStorage.setItem('isLoggedIn', 'true');

            console.log(' Login successful for:', loginId);

            // Redirect to Admin
            router.push("/admin");
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Login failed');
            console.log(' Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = () => {
        console.log(' Forgot password clicked');
        alert('Password reset functionality would be implemented here');
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-10 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6">
                    {/* Logo and Header */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/images/logoAdmin.png"
                                alt="Login logo"
                                width={50}
                                height={60}
                            />
                        </div>
                        <h1 className="text-[30px] font-bold text-gray-900">Welcome Back</h1>
                        <p className="text-[16px] text-[#4B5563]">Login to your Persistent Learning account</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-[#CE3820] px-4 py-3 rounded text-sm">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        {/* Login ID Field */}
                        <div className="space-y-2">
                            <label htmlFor="loginId" className="block text-sm font-medium text-black">
                                Login ID
                            </label>
                            <Input
                                id="loginId"
                                type="text"
                                placeholder="12345678"
                                value={loginId}
                                onChange={(e) => setLoginId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-black">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={handleForgotPassword}
                                    className="text-sm text-[#CE3820] hover:text-[#CE3820] font-medium"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    disabled={isLoading}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#CE3820] hover:bg-[#CE3820]/90 text-white font-medium py-2 rounded transition-colors"
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
}
