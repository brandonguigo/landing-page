const Footer = () => {
    return (
        <footer className="mt-24 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md border-t border-[#f3f4f6] py-8">
            <div className='text-center text-[#23263a] text-base font-medium'>
                Atomic Blend, all rights reserved. <br />
                <span className='whitespace-nowrap'>
                    <a
                        href='mailto:atomicblend@brandonguigo.com'
                        className='font-medium text-[#7b61ff] hover:underline'
                    >
                        atomicblend@brandonguigo.com
                    </a>{' '}
                    🚀
                </span>
            </div>
        </footer>
    )
}

export default Footer
