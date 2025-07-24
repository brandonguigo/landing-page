import React from 'react'
import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import useTheme from '~/hooks/use-theme'
import Leaf from './icons/leaf'
import Flower from './icons/flower'
import Swirl from './icons/swirl'
import Fire from './icons/fire'
import Lightning from './icons/lightning'
import taskIcon from '~/assets/task.svg'
import calendarIcon from '~/assets/calendar.svg'
import lockIcon from '~/assets/lock.svg'

// Background icon configuration - distributed across entire space with no overlap
const backgroundIcons = [
    // Top row
    { icon: taskIcon, x: '3%', y: '5%', size: 'w-16 h-16', rotation: '15deg', delay: 0.1, mobile: true },
    { icon: calendarIcon, x: '15%', y: '8%', size: 'w-14 h-14', rotation: '-20deg', delay: 0.15, mobile: false },
    { icon: lockIcon, x: '28%', y: '6%', size: 'w-16 h-16', rotation: '45deg', delay: 0.2, mobile: true },
    { icon: taskIcon, x: '42%', y: '9%', size: 'w-12 h-12', rotation: '-30deg', delay: 0.25, mobile: false },
    { icon: calendarIcon, x: '56%', y: '7%', size: 'w-16 h-16', rotation: '60deg', delay: 0.3, mobile: false },
    { icon: lockIcon, x: '70%', y: '5%', size: 'w-20 h-20', rotation: '-15deg', delay: 0.35, mobile: true },
    { icon: taskIcon, x: '84%', y: '8%', size: 'w-14 h-14', rotation: '35deg', delay: 0.4, mobile: false },
    { icon: calendarIcon, x: '94%', y: '6%', size: 'w-16 h-16', rotation: '-45deg', delay: 0.45, mobile: true },

    // Second row
    { icon: lockIcon, x: '5%', y: '18%', size: 'w-14 h-14', rotation: '75deg', delay: 0.5, mobile: true },
    { icon: taskIcon, x: '18%', y: '21%', size: 'w-16 h-16', rotation: '-60deg', delay: 0.55, mobile: true },
    { icon: calendarIcon, x: '32%', y: '19%', size: 'w-12 h-12', rotation: '30deg', delay: 0.6, mobile: false },
    { icon: lockIcon, x: '46%', y: '22%', size: 'w-16 h-16', rotation: '-45deg', delay: 0.65, mobile: false },
    { icon: taskIcon, x: '60%', y: '20%', size: 'w-20 h-20', rotation: '90deg', delay: 0.7, mobile: false },
    { icon: calendarIcon, x: '74%', y: '18%', size: 'w-14 h-14', rotation: '-75deg', delay: 0.75, mobile: true },
    { icon: lockIcon, x: '88%', y: '21%', size: 'w-16 h-16', rotation: '25deg', delay: 0.8, mobile: true },

    // Third row (behind text area) - removed center icons
    { icon: taskIcon, x: '8%', y: '32%', size: 'w-12 h-12', rotation: '-10deg', delay: 0.85, mobile: true },
    { icon: calendarIcon, x: '22%', y: '35%', size: 'w-16 h-16', rotation: '50deg', delay: 0.9, mobile: true },
    { icon: lockIcon, x: '78%', y: '37%', size: 'w-16 h-16', rotation: '80deg', delay: 1.1, mobile: true },
    { icon: taskIcon, x: '92%', y: '35%', size: 'w-14 h-14', rotation: '-25deg', delay: 1.15, mobile: true },

    // Fourth row (behind text area) - removed center icons
    { icon: calendarIcon, x: '6%', y: '46%', size: 'w-16 h-16', rotation: '40deg', delay: 1.2, mobile: true },
    { icon: lockIcon, x: '20%', y: '49%', size: 'w-14 h-14', rotation: '-70deg', delay: 1.25, mobile: true },
    { icon: taskIcon, x: '76%', y: '51%', size: 'w-14 h-14', rotation: '-50deg', delay: 1.45, mobile: true },
    { icon: calendarIcon, x: '90%', y: '49%', size: 'w-16 h-16', rotation: '70deg', delay: 1.5, mobile: true },

    // Fifth row
    { icon: lockIcon, x: '4%', y: '60%', size: 'w-16 h-16', rotation: '20deg', delay: 1.55, mobile: true },
    { icon: taskIcon, x: '17%', y: '63%', size: 'w-12 h-12', rotation: '-80deg', delay: 1.6, mobile: true },
    { icon: calendarIcon, x: '31%', y: '61%', size: 'w-16 h-16', rotation: '45deg', delay: 1.65, mobile: false },
    { icon: lockIcon, x: '45%', y: '64%', size: 'w-14 h-14', rotation: '-60deg', delay: 1.7, mobile: false },
    { icon: taskIcon, x: '59%', y: '62%', size: 'w-16 h-16', rotation: '75deg', delay: 1.75, mobile: false },
    { icon: calendarIcon, x: '73%', y: '65%', size: 'w-20 h-20', rotation: '-30deg', delay: 1.8, mobile: true },
    { icon: lockIcon, x: '87%', y: '63%', size: 'w-14 h-14', rotation: '60deg', delay: 1.85, mobile: false },

    // Sixth row
    { icon: taskIcon, x: '7%', y: '74%', size: 'w-14 h-14', rotation: '-45deg', delay: 1.9, mobile: true },
    { icon: calendarIcon, x: '21%', y: '77%', size: 'w-16 h-16', rotation: '35deg', delay: 1.95, mobile: true },
    { icon: lockIcon, x: '35%', y: '75%', size: 'w-12 h-12', rotation: '-85deg', delay: 2.0, mobile: true },
    { icon: taskIcon, x: '49%', y: '78%', size: 'w-16 h-16', rotation: '50deg', delay: 2.05, mobile: false },
    { icon: calendarIcon, x: '63%', y: '76%', size: 'w-16 h-16', rotation: '-65deg', delay: 2.1, mobile: true },
    { icon: lockIcon, x: '77%', y: '79%', size: 'w-16 h-16', rotation: '40deg', delay: 2.15, mobile: false },
    { icon: taskIcon, x: '91%', y: '77%', size: 'w-20 h-20', rotation: '-20deg', delay: 2.2, mobile: true },
]

const Hero = () => {
    return (
        <section
            className="w-full min-h-[60vh] flex flex-col justify-center items-center py-28 px-4 text-center"
            style={{
                background: 'linear-gradient(180deg, #f4f7fe 0%, #eaf1ff 100%)',
            }}
        >
            <h1 className="font-inter text-5xl md:text-7xl font-extrabold tracking-tight mb-2 text-black">
                Tools you know.
            </h1>
            <h2 className="font-inter text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-[#a259ff] via-[#7b61ff] to-[#3b82f6] text-transparent bg-clip-text">
                Privacy you never had.
            </h2>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#444] mb-10 font-medium">
                A complete, beautifully integrated suite for your tasks, notes, emails, calendars, and files<br />
                — designed for simplicity and privacy from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/download" className="inline-block">
                    <button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#7b61ff] to-[#3b82f6] hover:from-[#6c47ff] hover:to-[#2563eb] text-white font-semibold text-lg shadow transition">
                        Get Started <ArrowRight className="w-5 h-5" />
                    </button>
                </a>
                <a href="https://github.com/brandonguigo/atomic-blend" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <button className="flex items-center gap-2 px-8 py-3 rounded-lg border border-[#d1d5db] bg-white text-[#222] hover:bg-[#f3f4f6] font-semibold text-lg transition shadow-sm">
                        <Github className="w-5 h-5" /> View on GitHub
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero
