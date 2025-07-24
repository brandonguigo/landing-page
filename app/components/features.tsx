import React from 'react'
import {
    BlocksIcon,
    DollarSignIcon,
    MessagesSquareIcon,
    ShieldCheckIcon,
    ZapIcon,
    BookOpenText,
    Smartphone,
} from 'lucide-react'
import { type FeatureCardProps } from '~/types/feature-card'
import FeatureCard from './feature-card'

const featuresData: FeatureCardProps[] = [
    {
        title: 'Fully open-source',
        description:
            'App as well as backend are open-source and self-hostable.',
        icon: <BookOpenText size={28} className='text-blue-500' />, // revert to dark for light bg
        backgroundColor: 'from-blue-100/60 to-blue-50/30',
    },
    {
        title: 'Built for privacy',
        description: 'End-to-end encryption and zero-knowledge architecture, from the database to push notifications.',
        icon: <ShieldCheckIcon size={28} className='text-green-500' />, // revert to dark for light bg
        backgroundColor: 'from-green-100/60 to-green-50/30',
    },
    {
        title: 'Easy to use',
        description: 'Intuitive and user-friendly interface for seamless navigation.',
        icon: <ZapIcon size={28} className='text-yellow-500' />, // revert to dark for light bg
        backgroundColor: 'from-yellow-100/60 to-yellow-50/30',
    },
    {
        title: 'Use anywhere',
        description:
            'Access your data from any device, anywhere, anytime.',
        icon: <Smartphone className='text-red-500' />, // revert to dark for light bg
        backgroundColor: 'from-red-100/60 to-red-50/30',
    },
    {
        title: 'Affordable pricing',
        description:
            'Self-host or use our cloud service at a competitive price.',
        icon: <DollarSignIcon className='text-pink-500' />, // revert to dark for light bg
        backgroundColor: 'from-pink-100/60 to-pink-50/30',
    },
    {
        title: 'Community-driven',
        description: 'Join a vibrant community of users and developers.',
        icon: <MessagesSquareIcon size={28} className='text-purple-500' />, // revert to dark for light bg
        backgroundColor: 'from-purple-100/60 to-purple-50/30',
    },
]

const Features = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white via-[#f4f7fe] to-[#eaf1ff] text-[#181c2a]">
            <div className='max-w-7xl mx-auto px-4'>
                <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                    <h1 className='mt-4 font-inter text-4xl md:text-5xl font-extrabold tracking-tight mb-2'>
                        <span className='bg-gradient-to-b from-[#222] to-[#444] bg-clip-text text-transparent'>
                            Your Data. Your Rules.
                        </span>
                    </h1>
                    <p className='text-lg text-[#444] mb-8'>
                        A fully open-source suite of encrypted apps to help you take back control, stay organized, and get more done — without giving up your privacy.
                    </p>
                </div>
                <ul className='mt-16 grid place-content-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
                    {featuresData.map((feature, i) => (
                        <li key={i}>
                            <div className="rounded-2xl bg-white border border-[#e5e7eb] shadow-lg p-8 h-full flex flex-col items-start gap-3">
                                <div>{feature.icon}</div>
                                <div className="font-bold text-lg mb-1">{feature.title}</div>
                                <div className="text-[#444] text-base">{feature.description}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features
