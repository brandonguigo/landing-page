import { Link } from '@remix-run/react'
import appIcon from "~/assets/appicon_transparent.png";
import { Button } from "~/components/ui/button";

const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    return (
        <div className="px-5 py-2 bg-white/90 backdrop-blur-md border-b border-[#f3f4f6] sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-8">
                {/* Logo and name */}
                <Link to='/' className='flex items-center gap-2'>
                    <img src={appIcon} alt='' width={40} height={38} />
                    <span className='text-lg font-semibold text-[#181c2a]'>Atomic Blend</span>
                </Link>
                {/* Navigation links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="text-base font-medium text-[#23263a] hover:text-[#7b61ff] transition" onClick={e => {
                            const el = document.getElementById(link.href.replace('#', ''));
                            if (el) {
                                e.preventDefault();
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            {link.name}
                        </a>
                    ))}
                </div>
                {/* Get Started button */}
                <div className="flex items-center">
                    <Button className="px-6 py-2 rounded-lg font-semibold text-base bg-gradient-to-r from-[#7b61ff] to-[#3b82f6] text-white shadow hover:from-[#6c47ff] hover:to-[#2563eb]">
                        <Link to="/download">Get Started</Link>
                    </Button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
