'use client';

import { FormEvent } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function RegisterPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Registration submitted');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex items-center justify-center min-h-screen pt-20 pb-10 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍜</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Buat Akun Baru</h1>
            <p className="text-gray-600">Bergabunglah dengan ribuan pelanggan setia kami</p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-amber-100/50 p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 outline-none"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="anda@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 outline-none"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 outline-none"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-900 mb-2">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 outline-none"
                />
              </div>

              {/* Terms & Conditions */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Saya setuju dengan{' '}
                  <a href="#" className="text-amber-700 font-medium hover:text-amber-800">
                    Syarat & Ketentuan
                  </a>{' '}
                  dan{' '}
                  <a href="#" className="text-amber-700 font-medium hover:text-amber-800">
                    Kebijakan Privasi
                  </a>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-600/30 transition-all duration-300 transform hover:-translate-y-0.5 mt-6"
              >
                Daftar Sekarang
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-600">atau daftar dengan</span>
                </div>
              </div>

              {/* Social Register */}
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="py-2 px-3 rounded-lg border border-gray-300 hover:border-amber-300 transition-colors flex items-center justify-center gap-2">
                  <span>👤</span>
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button type="button" className="py-2 px-3 rounded-lg border border-gray-300 hover:border-amber-300 transition-colors flex items-center justify-center gap-2">
                  <span>👥</span>
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>
            </form>
          </div>

          {/* Sign In Link */}
          <p className="text-center mt-8 text-gray-600">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-amber-700 font-bold hover:text-amber-800 transition-colors">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
