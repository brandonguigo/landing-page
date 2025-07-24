import { Check } from 'lucide-react'

export default function TaskNotes() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
            {/* Left: Text */}
            <div className="flex-1 min-w-[280px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Task & Notes</h2>
                <p className="text-lg text-muted-foreground mb-6">Organize your tasks and habits with ease, using a sleek and intuitive interface.</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-base"><Check className="text-green-500 w-5 h-5" /> Unlimited task lists and notes</li>
                    <li className="flex items-center gap-2 text-base"><Check className="text-green-500 w-5 h-5" /> Habit tracking and organization</li>
                    <li className="flex items-center gap-2 text-base"><Check className="text-green-500 w-5 h-5" /> Beautiful, intuitive interface</li>
                </ul>
            </div>
            {/* Right: Card */}
            <div className="flex-1 flex justify-center">
                <div className="rounded-2xl shadow-lg bg-white border border-gray-100 p-8 w-full max-w-md">
                    <h3 className="font-semibold text-lg mb-4">Task List</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-green-400"></span> Complete project proposal</li>
                        <li className="flex items-center gap-2 opacity-70"><span className="inline-block w-3 h-3 rounded-full bg-gray-300"></span> Review team feedback</li>
                        <li className="flex items-center gap-2 opacity-70"><span className="inline-block w-3 h-3 rounded-full bg-gray-300"></span> Schedule client meeting</li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 