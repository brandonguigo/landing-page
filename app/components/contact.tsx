import React from 'react'
import { TwitterIcon, GithubIcon, GlobeIcon, Loader2Icon } from 'lucide-react'
import { Button } from './ui/button'

const socials = [
    {
        icon: <TwitterIcon className="w-7 h-7 text-white" />, label: 'Twitter', value: '@Brandon_Guigo', href: 'https://twitter.com/Brandon_Guigo',
    },
    {
        icon: <GithubIcon className="w-7 h-7 text-white" />, label: 'GitHub', value: 'brandonguigo', href: 'https://github.com/brandonguigo',
    },
    {
        icon: <GlobeIcon className="w-7 h-7 text-white" />, label: 'Website', value: 'brandonguigo', href: 'https://brandonguigo.com',
    },
]

const Contact = () => {
    return (
        <section className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-20 px-5 lg:flex-row'>
            <div className='mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6'>
                <div>
                    <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Get{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            In{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Touch
                        </span>
                    </h1>
                </div>
                <p className='text-center text-lg text-muted-foreground lg:text-left'>
                    <span className='hidden lg:block'>
                        If you have any questions, suggestions, or would like to
                        discuss potential collaborations, please don't hesitate
                        to reach out. I'd love to hear from you!
                    </span>
                    <span className='block lg:hidden'>
                        Questions, ideas, or collaborations? Reach out—I'm all
                        ears!
                    </span>
                </p>
                {/* Socials Section */}
                <div className="flex flex-col gap-6 mt-8">
                    {socials.map((s, i) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group"
                        >
                            <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#a259ff] group-hover:bg-[#7b61ff] transition">
                                {s.icon}
                            </span>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg text-[#181c2a]">{s.label}</span>
                                <span className="text-[#a259ff] text-lg font-medium">{s.value}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/* Tally Contact Form */}
            <div className="w-full max-w-xl flex-grow basis-0 flex flex-col gap-4">
                <iframe data-tally-src="https://tally.so/embed/mD6K2q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="638" frameBorder="0" marginHeight={0} marginWidth={0} title="Contact Form"></iframe>
                <script dangerouslySetInnerHTML={{__html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`}} />
            </div>
        </section>
    )
}

export default Contact
