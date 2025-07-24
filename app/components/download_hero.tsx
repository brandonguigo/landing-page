import { Button } from './ui/button'
import { Link } from "@remix-run/react";

const downloads = [
    {
        app: 'Atomic Notes',
        img: '/atomic_notes.png',
        description: 'Atomic Notes is a note-taking app like Apple Notes. It is designed to be simple, fast, and easy to use.',
        links: [
            { label: 'iOS', icon: '/apple.png', url: 'https://apps.apple.com/us/app/atomic-notes/id6747767868' },
            { label: 'Android', icon: '/android.png', url: 'https://play.google.com/store/apps/details?id=fr.atomicblend.notes' },
            { label: 'MacOS', icon: '/apple.png', url: 'https://atomic-blend-release.s3.us-east-005.backblazeb2.com/notes/mac/AtomicNotes-latest.dmg' },
            { label: 'Linux', icon: '/linux.png', url: 'https://atomic-blend-release.s3.us-east-005.backblazeb2.com/notes/debian/atomic-notes_latest_amd64.deb' },
            { label: 'Windows', icon: '/windows.png', url: 'https://atomic-blend-release.s3.us-east-005.backblazeb2.com/notes/windows/AtomicNotesInstaller-latest.exe' },
        ],
    },
    {
        app: 'Atomic Task',
        img: '/atomic_task.png',
        description: 'Atomic Task is a task management app that helps you stay organized and focused. It is designed to be simple, fast, and easy to use.',
        links: [
            { label: 'iOS', icon: '/apple.png', url: 'https://apps.apple.com/us/app/atomic-task/id6743615832' },
            { label: 'Android', icon: '/android.png', url: 'https://play.google.com/store/apps/details?id=fr.atomicblend.app' },
            { label: 'MacOS', icon: '/apple.png', url: 'https://atomic-blend-release.s3.us-east-005.backblazeb2.com/task/mac/AtomicTask-latest.dmg' },
            { label: 'Linux', icon: '/linux.png', url: 'https://atomic-blend-release.s3.us-east-005.backblazeb2.com/task/debian/atomic-task_latest_amd64.deb' },
            { label: 'Windows', icon: '/windows.png', url: 'https://atomic-blend-release.s3.us-east-005.backblazeb2.com/task/windows/AtomicTaskInstaller-latest.exe' },
        ],
    },
]

const DownloadHero = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white via-[#f4f7fe] to-[#eaf1ff] text-[#181c2a]">
            <div className='max-w-7xl mx-auto px-4'>
                <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center mb-12'>
                    <h1 className='mt-4 font-inter text-4xl md:text-5xl font-extrabold tracking-tight mb-2'>
                        <span className='bg-gradient-to-b from-[#222] to-[#444] bg-clip-text text-transparent'>
                            Download the Apps
                        </span>
                    </h1>
                    <p className='text-lg text-[#444] mb-8'>
                        Get Atomic Notes and Atomic Task for all your devices. Choose your platform and start using Atomic Blend today!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {downloads.map((app, idx) => (
                        <div key={app.app} className="rounded-2xl bg-white border border-[#e5e7eb] shadow-lg p-8 h-full flex flex-col items-center gap-3">
                            <div className="flex flex-row items-center justify-center mb-4">
                                <img src={app.img} alt={app.app + ' Logo'} className="h-12 w-12 mr-3 rounded-lg" />
                                <p className="font-inter text-2xl font-extrabold tracking-tight lg:text-3xl">{app.app}</p>
                            </div>
                            <p className="text-base text-muted-foreground lg:text-lg mb-4 text-center">{app.description}</p>
                            <div className="grid grid-cols-2 grid-rows-3 gap-3 w-full max-w-xs mx-auto">
                                {app.links.map((link, i) => (
                                    <Button key={link.label} className='flex items-center gap-2 w-full'>
                                        <img src={link.icon} alt={link.label + ' Logo'} className={link.label === 'Linux' ? 'h-6 w-6 rounded-lg' : 'h-5 w-5'} />
                                        <Link to={link.url} target="_blank">{link.label}</Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DownloadHero
