import { Check } from 'lucide-react'

export default function EmailCalendar() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 py-20">
            {/* Left: Text */}
            <div className="flex-1 min-w-[280px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Email & Calendar</h2>
                <p className="text-lg text-muted-foreground mb-6">Manage your emails and events with ease, using a sleek and intuitive interface.</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-base"><Check className="text-green-500 w-5 h-5" /> Unified inbox for all your accounts</li>
                    <li className="flex items-center gap-2 text-base"><Check className="text-green-500 w-5 h-5" /> Fast, privacy-first search</li>
                    <li className="flex items-center gap-2 text-base"><Check className="text-green-500 w-5 h-5" /> Integrated calendar and reminders</li>
                    <li className="flex items-center gap-2 text-base"><Check className="text-green-500 w-5 h-5" /> Beautiful, intuitive interface</li>
                </ul>
            </div>
            {/* Right: Card */}
            <div className="flex-1 flex justify-center">
                <div className="rounded-2xl shadow-lg bg-white border border-gray-100 p-8 w-full max-w-md flex flex-col gap-6">
                    {/* Email client mockup */}
                    <div className="flex gap-4">
                        {/* Inbox list */}
                        <div className="w-1/3 border-r pr-3">
                            <div className="font-semibold mb-2 text-gray-700">Inbox</div>
                            <ul className="space-y-2 text-sm">
                                <li className="font-bold text-[#7b61ff]">Welcome to Atomic Blend</li>
                                <li className="text-gray-500">Your calendar is ready</li>
                                <li className="text-gray-500">Security tips</li>
                                <li className="text-gray-400 italic">(more...)</li>
                            </ul>
                        </div>
                        {/* Email preview */}
                        <div className="w-2/3 pl-3">
                            <div className="font-semibold text-gray-700 mb-1">Welcome to Atomic Blend</div>
                            <div className="text-xs text-gray-400 mb-2">From: team@atomicblend.com</div>
                            <div className="text-sm text-gray-700">Hi there! 🎉<br/>Thanks for trying Atomic Blend. Explore your new privacy-first email and calendar suite.</div>
                        </div>
                    </div>
                    {/* Calendar widget */}
                    <div className="mt-4">
                        <div className="font-semibold text-gray-700 mb-2">Calendar</div>
                        <div className="grid grid-cols-7 gap-1 text-xs text-center">
                            <span className="text-gray-400">S</span>
                            <span className="text-gray-400">M</span>
                            <span className="text-gray-400">T</span>
                            <span className="text-gray-400">W</span>
                            <span className="text-gray-400">T</span>
                            <span className="text-gray-400">F</span>
                            <span className="text-gray-400">S</span>
                            {/* Example week */}
                            <span className="col-span-1"></span>
                            <span className="col-span-1">1</span>
                            <span className="col-span-1">2</span>
                            <span className="col-span-1">3</span>
                            <span className="col-span-1">4</span>
                            <span className="col-span-1">5</span>
                            <span className="col-span-1">6</span>
                            {/* Highlighted day */}
                            <span className="col-span-1">7</span>
                            <span className="col-span-1 bg-[#7b61ff] text-white rounded-full">8</span>
                            <span className="col-span-1">9</span>
                            <span className="col-span-1">10</span>
                            <span className="col-span-1">11</span>
                            <span className="col-span-1">12</span>
                            <span className="col-span-1">13</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 