import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from "@remix-run/react";

const MONTHLY_PRICE = 3.99;
const ANNUAL_PRICE = (MONTHLY_PRICE * 10).toFixed(2);

const plans = [
    {
        name: 'Self-hosting',
        price: 'Free',
        sub: 'Forever',
        description: 'Ideal for complete control and customization',
        features: [
            'Unlimited task lists',
            'Unlimited tags',
            'Unlimited members',
            'Unlimited storage',
            'Access to all the apps',
            'Unlimited tasks, habits, notes...',
            'Community support',
        ],
        button: 'Get started',
        highlight: false,
        free: true,
        badge: undefined,
    },
    {
        name: 'Cloud Free',
        price: '$0.00',
        sub: 'Forever',
        description: 'Perfect for simplicity and ease of use',
        features: [
            '3 task lists',
            '5 tags',
            '2 members',
            '1GB storage',
            'Access to all the apps',
            'Unlimited tasks, habits, notes...',
            'Email & community support',
        ],
        button: 'Get started',
        highlight: false,
        free: true,
        badge: undefined,
    },
]

export default function Pricing() {
    const [annual, setAnnual] = useState(false)
    // Add the paid plan dynamically so it can use the toggle
    const paidPlan = {
        name: 'Cloud',
        price: annual ? `$${ANNUAL_PRICE}` : `$${MONTHLY_PRICE}`,
        sub: annual ? 'per year' : 'per month',
        description: 'Perfect for simplicity and ease of use',
        features: [
            'Unlimited task lists',
            'Unlimited tags',
            'Unlimited members',
            'Unlimited storage',
            'Access to all the apps',
            'Unlimited tasks, habits, notes...',
            'Email & community support',
        ],
        button: 'Get started',
        highlight: true,
        free: false,
        badge: 'SAVE 15%'
    };
    return (
        <section className="w-full bg-gradient-to-b from-white via-[#f4f7fe] to-[#eaf1ff] py-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#181c2a]">Adaptable Pricing</h2>
                <div className="text-xl font-semibold mb-2 text-[#a259ff]">Choose your plan</div>
                <p className="text-[#444] text-lg mb-6">Find your plan that fits your needs, whether you prefer self-hosting for complete control or our cloud solution for convenience.</p>
                <div className="flex items-center justify-center gap-4 mb-2">
                    <span className={`font-medium ${!annual ? 'text-[#a259ff]' : 'text-[#888]'}`}>Monthly</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked={annual} onChange={() => setAnnual(!annual)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#a259ff] rounded-full peer dark:bg-gray-700 peer-checked:bg-[#a259ff] transition"></div>
                        <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transition-transform ${annual ? 'translate-x-5' : ''}`}></div>
                    </label>
                    <span className={`font-medium ${annual ? 'text-[#a259ff]' : 'text-[#888]'}`}>Annually</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch w-full max-w-5xl mx-auto">
                {[...plans, paidPlan].map((plan, idx) => (
                    <div
                        key={plan.name}
                        className={`flex flex-col rounded-2xl shadow-xl border ${plan.highlight ? 'bg-gradient-to-br from-[#a259ff] to-[#3b82f6] text-white border-0 relative' : 'bg-white border-[#e5e7eb]'} w-full max-w-sm p-8 transition`}
                    >
                        {plan.badge && (
                            <span className="absolute top-5 right-5 bg-yellow-400 text-[#23263a] text-xs font-bold px-3 py-1 rounded-full">{plan.badge}</span>
                        )}
                        {/* Always display the plan name at the top */}
                        <div className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-[#181c2a]'}`}>{plan.name}</div>
                        <div className="text-4xl font-extrabold mb-1" style={plan.highlight ? {color: 'white'} : {}}>{plan.price}</div>
                        <div className={`mb-2 font-medium ${plan.highlight ? 'text-white/80' : 'text-[#444]'}`}>{plan.sub}</div>
                        <div className={`mb-4 ${plan.highlight ? 'text-white/80' : 'text-[#444]'}`}>{plan.description}</div>
                        <ul className="mb-8 flex flex-col gap-3">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-base">
                                    <CheckIcon className={`w-5 h-5 ${plan.highlight ? 'text-white' : 'text-green-500'}`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to={"/download"} className="mt-auto">
                            <button
                                className={`w-full py-3 rounded-lg font-semibold text-lg transition ${plan.highlight ? 'bg-white text-[#a259ff] hover:bg-gray-100' : 'bg-[#181c2a] text-white hover:bg-[#23263a]'}`}
                            >
                                {plan.button}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
