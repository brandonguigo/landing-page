import { Check, Inbox, Star, FileText, Send, User, Plus, Search, Zap, AlertTriangle, Users, Bell, Shield } from 'lucide-react'

export default function EmailCalendar() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 py-20">
            {/* Left: Text */}
            <div className="flex-1 min-w-[280px]">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Email & Calendar</h2>
                    <span className="px-2 py-0.5 rounded-full bg-[#a259ff] text-white text-xs font-semibold align-middle">Soon</span>
                </div>
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
                <div className="rounded-2xl shadow-lg bg-white border border-[#e5e7eb] p-0 w-full max-w-2xl flex flex-col md:flex-row overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/3 min-w-[180px] bg-[#f7f8fa] border-r border-[#e5e7eb] flex flex-col p-4 gap-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#e0eaff] text-[#7b61ff] font-bold text-lg">B</span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f3f4f6] text-[#23263a] font-bold text-lg">A</span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f3f4f6] text-[#23263a] font-bold text-lg border border-dashed border-[#d1d5db]">+</span>
                        </div>
                        <div className="font-semibold text-base leading-tight">Atomic Blend</div>
                        <div className="text-xs text-gray-400 mb-2">work@atomicblend.com</div>
                        <button className="w-full flex items-center gap-2 justify-center py-2 rounded-lg bg-[#ededf9] text-[#23263a] font-medium text-sm mb-4"><FileText className="w-4 h-4" /> New email</button>
                        <div className="text-xs text-gray-400 mb-1">Core</div>
                        <ul className="flex flex-col gap-1 text-sm">
                            <li className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[#e0eaff] text-[#23263a] font-semibold"><Inbox className="w-4 h-4" /> Inbox <span className="ml-auto text-xs text-gray-500">281</span></li>
                            <li className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f3f4f6] cursor-pointer"><Star className="w-4 h-4" /> Favorites</li>
                            <li className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f3f4f6] cursor-pointer"><FileText className="w-4 h-4" /> Drafts <span className="ml-auto text-xs text-gray-400">13</span></li>
                            <li className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f3f4f6] cursor-pointer"><Send className="w-4 h-4" /> Sent</li>
                        </ul>
                    </div>
                    {/* Main panel */}
                    <div className="flex-1 flex flex-col p-4 gap-4 bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-lg">Inbox</span>
                            <span className="ml-auto flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f3f4f6]"><Search className="w-4 h-4 text-gray-400" /></button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#e0eaff] text-[#2563eb]"><Zap className="w-4 h-4" /></button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f3f4f6]"><AlertTriangle className="w-4 h-4 text-gray-400" /></button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f3f4f6]"><Users className="w-4 h-4 text-gray-400" /></button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f3f4f6]"><Bell className="w-4 h-4 text-gray-400" /></button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f3f4f6]"><Shield className="w-4 h-4 text-gray-400" /></button>
                            </span>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <button className="flex-1 py-1 rounded-lg bg-[#2563eb] text-white font-semibold text-sm flex items-center justify-center gap-1"><Zap className="w-4 h-4" /> Primary</button>
                            <button className="flex-1 py-1 rounded-lg bg-[#f3f4f6] text-[#23263a] font-semibold text-sm">Social</button>
                            <button className="flex-1 py-1 rounded-lg bg-[#f3f4f6] text-[#23263a] font-semibold text-sm">Updates</button>
                        </div>
                        <div className="text-xs text-gray-400 mb-1">Pinned [3]</div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f7f8fa]">
                                <User className="w-6 h-6 rounded-full bg-[#e0eaff] text-[#7b61ff] p-1" />
                                <div className="flex-1">
                                    <div className="font-semibold text-[#23263a] text-sm">James from Atomic Blend <span className="text-xs text-gray-400 ml-1">[9]</span></div>
                                    <div className="text-xs text-gray-500">New design review</div>
                                </div>
                                <div className="text-xs text-gray-400 ml-auto">Mar 29</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f7f8fa]">
                                <Users className="w-6 h-6 rounded-full bg-[#e0eaff] text-[#7b61ff] p-1" />
                                <div className="flex-1">
                                    <div className="font-semibold text-[#23263a] text-sm">Brandon, Jamie, Taylor <span className="text-xs text-gray-400 ml-1">[6]</span></div>
                                    <div className="text-xs text-gray-500">Re: Design review feedback</div>
                                </div>
                                <div className="text-xs text-gray-400 ml-auto">Mar 28</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f7f8fa]">
                                <User className="w-6 h-6 rounded-full bg-[#e0eaff] text-[#7b61ff] p-1" />
                                <div className="flex-1">
                                    <div className="font-semibold text-[#23263a] text-sm">GitHub <span className="text-xs text-gray-400 ml-1">[8]</span></div>
                                    <div className="text-xs text-gray-500">Repository update</div>
                                </div>
                                <div className="text-xs text-gray-400 ml-auto">Mar 28</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 