import { Lock, ShieldCheck } from 'lucide-react'

export default function EndToEndEncryption() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
            {/* Left: Encryption Status Card */}
            <div className="flex-1 flex justify-center">
                <div className="rounded-2xl shadow-lg bg-gradient-to-br from-[#23263a] to-[#181c2a] border border-[#2d314d] p-8 w-full max-w-md">
                    <h4 className="font-semibold text-base mb-4 text-white/80">Encryption Status</h4>
                    <ul className="space-y-3 text-white">
                        <li className="flex items-center justify-between"><span>Data Protection</span> <span className="text-green-400 font-medium">Active</span></li>
                        <li className="flex items-center justify-between"><span>Zero-Knowledge</span> <span className="text-blue-400 font-medium">Enabled</span></li>
                        <li className="flex items-center justify-between"><span>Server Access</span> <span className="text-red-400 font-medium">Blocked</span></li>
                    </ul>
                </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1 min-w-[280px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End Encryption</h2>
                <p className="text-lg text-white/80 mb-6">Organize your tasks and habits with ease, using a sleek and intuitive interface protected by military-grade encryption.</p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3"><ShieldCheck className="text-purple-400 w-6 h-6" /> <div><span className="font-semibold">Zero-Knowledge Architecture</span><br /><span className="text-white/70 text-base">Your data is encrypted before it leaves your device</span></div></li>
                    <li className="flex items-center gap-3"><Lock className="text-blue-400 w-6 h-6" /> <div><span className="font-semibold">Complete Privacy</span><br /><span className="text-white/70 text-base">Even we can't access your unencrypted data</span></div></li>
                </ul>
            </div>
        </div>
    )
} 