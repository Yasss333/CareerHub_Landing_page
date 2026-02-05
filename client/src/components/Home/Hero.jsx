import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {

        const [menuOpen, setMenuOpen] = React.useState(false);
  return (
      <>
           <section className='w-full bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-grid-gradient-img.png")] bg-cover bg-center bg-no-repeat px-4 pb-10'>
                 <nav className='flex items-center justify-between w-full md:px-16 lg:px-24 xl:px-32 py-4'>
                    <a href='https://prebuiltui.com' aria-label='Prebuilt UI Logo'>
                        <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924m-7.196 5.32V14.56h3.08v3.612l-.532 3.276.532 3.248V33.6zm6.692-8.232q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128t.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.868.504 1.988.504M56.95 28V14.56h3.08V28zm3.08-7.476-1.064-.532q0-2.548 1.12-4.116 1.148-1.596 3.444-1.596 1.008 0 1.82.364.812.365 1.512 1.176l-2.016 2.072a2.1 2.1 0 0 0-.812-.56 3 3 0 0 0-1.036-.168q-1.287 0-2.128.812-.84.811-.84 2.548m14.156 7.756q-2.016 0-3.64-.896a7 7 0 0 1-2.548-2.52q-.924-1.596-.924-3.584t.924-3.556a6.87 6.87 0 0 1 2.492-2.52q1.596-.924 3.528-.924 1.876 0 3.304.868a6.05 6.05 0 0 1 2.268 2.38q.84 1.512.84 3.444 0 .336-.056.7a7 7 0 0 1-.112.756H69.23v-2.52h9.436l-1.148 1.008q-.056-1.232-.476-2.072a3 3 0 0 0-1.204-1.288q-.756-.448-1.876-.448-1.176 0-2.044.504a3.43 3.43 0 0 0-1.344 1.428q-.476.896-.476 2.156t.504 2.212 1.428 1.484q.924.504 2.128.504 1.037 0 1.904-.364a4 4 0 0 0 1.512-1.064l1.96 1.988a6.3 6.3 0 0 1-2.38 1.736 7.6 7.6 0 0 1-2.968.588m15.91 0q-1.54 0-2.745-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.821 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.869 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.455.924-3.276.924M82.898 28V7.84h3.08v10.024l-.532 3.248.532 3.276V28zm6.692-2.632q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128.001 1.204.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.87.504 1.988.504m15.067 2.912q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.644.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.976-.28V14.56h3.08V28zm1.54-15.904q-.783 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.813 0 1.316.532t.504 1.316q0 .784-.504 1.316t-1.316.532M120.169 28V7.84h3.08V28zm8.552 0V8.96h3.08V28zm-3.22-10.64v-2.8h9.52v2.8zm17.274 10.92q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.643.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.977-.28V14.56h3.08V28zm1.54-15.904q-.785 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.812 0 1.316.532t.504 1.316-.504 1.316-1.316.532" fill="#050040" />
                            <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="#050040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* MENU LINKS */}
                    <div className={`max-md:fixed max-md:inset-0 max-md:bg-white/50 max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:text-lg max-md:backdrop-blur flex items-center gap-8 ${ menuOpen ? 'max-md:w-full' : 'max-md:w-0' }`} >
                        <a className='text-sm text-neutral-800' href='#'>Home</a>
                        <a className='text-sm text-neutral-800' href='#'>Products</a>
                        <a className='text-sm text-neutral-800' href='#'>Stories</a>
                        <a className='text-sm text-neutral-800' href='#'>Pricing</a>
                        <button class='md:hidden px-6 py-2.5 bg-[#4F39F6] hover:bg-[#3e2fcc] active:scale-95 rounded-full text-white text-sm'>Explore Features</button>
                        <button aria-label='close menu' className='size-6 md:hidden' onClick={() => setMenuOpen(false)}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-x'>
                                <path d='M18 6 6 18M6 6l12 12' />
                            </svg>
                        </button>
                    </div>

                    <button className='max-md:hidden px-6 py-2.5 bg-[#4F39F6] hover:bg-[#3e2fcc] active:scale-95 rounded-full text-white text-sm cursor-pointer'>Explore Features</button>

                    {/* BURGER MENU */}
                    <button aria-label='menu burger' className='size-6 md:hidden' onClick={() => setMenuOpen(true)}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-align-justify'>
                            <path d='M3 12h18M3 18h18M3 6h18' />
                        </svg>
                    </button>
                </nav>
                <div className='w-full md:px-16 lg:px-24 xl:px-32 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-20'>
                    {/* Left */}
                    <div className='flex flex-col items-start'>
                        <a href="#" className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full p-1 pr-3 text-sm mx-auto md:mx-0 mt-20">
                            <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                                NEW
                            </span>
                            <p className="flex items-center gap-2 text-indigo-600">
                                <span className='text-sm'>Try 30 days free trial option</span>
                                <svg className="mt-px" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </p>
                        </a>

                        <h1 className="text-center lg:text-left text-neutral-900 text-4xl md:text-5xl lg:text-[52px]/16 leading-tight font-semibold max-w-[610px] mt-4">
                            CareerHub — Your All-in-One Career Preparation Platform
                        </h1>
                        <p className="text-center lg:text-left text-base/7 text-neutral-600 max-w-md mt-4 mx-auto md:mx-0">
                            Prepare smarter, faster, and together. Practice DSA, build industry-ready resumes, and train for real interviews — all from one platform.
                        </p>

                        <div className="flex items-center border gap-2 border-neutral-300 h-13 max-w-[440px] w-full rounded-full overflow-hidden mt-6 mx-auto md:mx-0">
                            <input type="email" placeholder="Enter your email" className="w-full h-full pl-6 outline-none text-sm bg-transparent text-neutral-600" required />
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-600 w-56 h-10 rounded-full text-sm text-slate-50 cursor-pointer mr-1.5">Get Started with CareerHub</button>
                        </div>

                        {/* Avatars + Stars */}
                        <div className="flex items-center mt-10 mx-auto lg:mx-0">
                            <div className="flex -space-x-3 pr-3">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user1" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user2" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                            </div>

                            <div>
                            <div className="flex ">
                                {Array(5).fill(0).map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-[#FF8F20]" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                ))}
                            </div>
                            <p className="text-xs text-neutral-600">Built for students, developers, and future software engineers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='w-full max-w-md md:max-w-lg'>
                        <img className='w-full h-auto object-contain' src={"https://assets.prebuiltui.com/images/components/hero-section/hero-rightsocial-image.png"} alt="Dashboard Preview" />
                    </div>
                </div>
            </section>
        </>
  )
}

export default Hero