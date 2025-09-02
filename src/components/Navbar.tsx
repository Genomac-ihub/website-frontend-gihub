import { Link } from 'react-router-dom';
import logo from '../assets/logoTop.png';
import { useState, useEffect, useRef } from 'react';
import useUserDetail from '../tanstack/useUserDetail';
import { useLocation } from 'react-router-dom';
import useHandleModal from '../zustard/useHandleModal';
import useLogout from '../tanstack/useLogout';

export default function Navbar() {
   
    let hoverTimeout: ReturnType<typeof setTimeout> | null = null

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout)
        setIsDropdownOpen(true)
    }

    const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            setIsDropdownOpen(false)
        }, 100)
    }

    const { data: userData, isPending, isError, isLoading } = useUserDetail()
    const { mutate: logout } = useLogout()
    console.log(isError)
    console.log(isPending)
    console.log(userData)

    const [isOpen, setIsOpen] = useState(false)
    const [isStuck, setIsStuck] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const navbarRef = useRef<HTMLDivElement>(null)
    const sentinelRef = useRef<HTMLDivElement>(null)

    const { setTheClickedModal } = useHandleModal()
    const { pathname } = useLocation()
    console.log(pathname)

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            closeMenu()
        }
    }

    const handleScroll = () => {
        closeMenu()
        setIsScrolled(window.scrollY > 50)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsStuck(!entry.isIntersecting)
            },
            { threshold: 0 }
        )

        if (sentinelRef.current) observer.observe(sentinelRef.current)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])


    return (
        <>
            <div ref={sentinelRef} className={`h-[1px] w-full ${pathname === "/my-learning" ? "bg-black" : "bg-white"}`}></div>

            <header
                id="my-header"
                ref={navbarRef}
                className={`fixed  w-full  top-0 left-0 z-50 transition-all duration-300  ${pathname === "/my-learning" ? "bg-black  text-white border-b-[1px] border-b-neutral-500" : isScrolled ? "bg-white/80 backdrop-blur-md border-[1px] border-gray-200/50 shadow-lg" : "border-[1px] border-gray-200 bg-[#F9F7F7] shadow-3xs "}
        w-full lg:sticky lg:top-0 
        ${isStuck ? 'lg:w-full lg:rounded-none shadow-md' : pathname !== "/my-learning" ? 'lg:w-[89%] lg:mx-auto lg:my-10 lg:rounded-3xl' : ""}`}
            >
                <div className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 transition-all`}>
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <Link to={'/'} className="block text-white" onClick={closeMenu}>
                                <span className="sr-only">Home</span>
                                <img src={logo} alt="Logo" className="w-[4rem] md:w-[5rem]" />
                            </Link>
                        </div>
                        <div className="hidden md:block ">
                            {
                                pathname === "/my-learning" && userData?.tags === "computaional-biology" ? (
                                    <h1>Hi {userData?.firstName}, {" "}G-IHUb welcomes you to <span className='text-orange-400'>Computational Biology</span></h1>
                                ) : (
                                    <nav aria-label="Global">
                                        <ul className="flex items-center gap-20 text-[1rem]">
                                            <li><Link to={"/"} className="transition hover:text-gray-500/75" onClick={closeMenu}>Home</Link></li>
                                            <li><Link to={"/about"} className="transition hover:text-gray-500/75" onClick={closeMenu}>About</Link></li>
                                            <li><Link to={"/courses"} className="transition hover:text-gray-500/75" onClick={closeMenu}>Courses</Link></li>
                                            <li><Link to={"/event"} className="transition hover:text-gray-500/75" onClick={closeMenu}>Event</Link></li>
                                        </ul>
                                    </nav>
                                )
                            }
                        </div>

                        {
                            userData ? (
                                <div className="relative">
                                    <div
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="border-2 rounded-full w-10 h-10 text-sm flex items-center justify-center uppercase bg-black text-white font-bold cursor-pointer transition hover:opacity-70">
                                            {userData.profilePicture ? (
                                                <img
                                                    src={userData.profilePicture}
                                                    className="rounded-full w-10 h-10 object-cover"
                                                />
                                            ) : (
                                                <div>
                                                    {userData.firstName?.[0] || ""}
                                                    {userData.lastName?.[0] || ""}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {isDropdownOpen && (
                                        <div
                                            className="absolute right-0 top-12 w-44 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 transition-all origin-top-right duration-200 z-50 overflow-hidden"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {pathname === "/my-learning" ? (
                                                [
                                                    { link: "/", type: "Home", icon: "", color: "text-gray-700" },
                                                    { link: "/about", type: "About", icon: "", color: "text-gray-700" },
                                                    { link: "/courses", type: "Courses", icon: "", color: "text-gray-500" },
                                                    { link: "/event", type: "events", icon: "", color: "text-gray-500" },
                                                    { link: "", type: "Log out", icon: "", afunction: () => logout(), color: "text-red-500" },
                                                ].map(({ link, type, icon, color, afunction }) => (
                                                    <Link
                                                        onClick={() => { afunction?.(); closeMenu(); }}
                                                        key={type}
                                                        to={link}
                                                        className={`flex items-center gap-3 hover:bg-gray-100 px-4 py-3 text-sm ${color} transition-colors duration-150`}
                                                    >
                                                        <i className={icon}></i> <span>{type}</span>
                                                    </Link>
                                                ))
                                            ) : (
                                                [
                                                    { link: "/my-learning", type: "My Learning", icon: "bi bi-book", color: "text-gray-700" },
                                                    { link: "/courses", type: "Courses", icon: "bi bi-globe", color: "text-gray-700" },
                                                    { link: "", type: "Log out", icon: "bi bi-box-arrow-right", afunction: () => logout(), color: "text-red-500" },
                                                ].map(({ link, type, icon, color, afunction }) => (
                                                    <Link
                                                        onClick={() => { afunction?.(); closeMenu(); }}
                                                        key={type}
                                                        to={link}
                                                        className={`flex items-center gap-3 hover:bg-gray-100 px-4 py-3 text-sm ${color} transition-colors duration-150`}
                                                    >
                                                        <i className={icon}></i> <span>{type}</span>
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <div className="sm:flex sm:gap-4">
                                        <div className="hidden sm:flex gap-3">
                                            {[
                                                { label: "Sign in", modal: "login", bg: "bg-gradient-to-br from-orange-500 to-orange-400 text-white hover:bg-orange-400/75" },
                                                { label: "Sign up", modal: "signUp", bg: "border-[1px] border-gray-400 hover:bg-gray-100 " },
                                            ].map(({ label, bg, modal }) => (
                                                <button
                                                    key={label}
                                                    onClick={() => { setTheClickedModal(modal); closeMenu(); }}
                                                    className={`hidden md:flex items-center justify-center cursor-pointer rounded-full px-6 py-2.5 text-[.8rem] font-medium transition ${bg}`}
                                                >
                                                    {label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="block md:hidden">
                                        <button
                                            onClick={toggleMenu}
                                            className="rounded-xl p-2.5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 relative z-[60] group"
                                        >
                                            <div className="relative w-5 h-5">
                                                <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2' : ''} rounded-full`}></span>
                                                <span className={`absolute top-2 left-0 w-full h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'opacity-0 scale-0' : ''} rounded-full`}></span>
                                                <span className={`absolute top-4 left-0 w-full h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : ''} rounded-full`}></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeMenu}></div>

                <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl border-l border-white/20 shadow-2xl transform transition-all duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>

                        <nav className="flex-1 px-4 pt-28">
                            <ul className="space-y-3">
                                {[
                                    { to: "/", label: "Home", icon: "🏠", desc: "Back to homepage" },
                                    { to: "/about", label: "About", icon: "ℹ️", desc: "Learn more about us" },
                                    { to: "/courses", label: "Courses", icon: "📚", desc: "Browse all courses" },
                                    { to: "/event", label: "Event", icon: "📅", desc: "See upcoming events and workshops" }

                                ].map(({ to, label, icon, desc }, index) => (
                                    <li key={to} className={`transform transition-all duration-300 delay-${index * 100}`}>
                                        <Link
                                            to={to}
                                            onClick={closeMenu}
                                            className="group flex items-center gap-4 p-4 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-300 border border-transparent hover:border-orange-200/50"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                                <span className="text-xl">{icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <span className="font-medium text-base block">{label}</span>
                                                <span className="text-xs text-gray-500 group-hover:text-orange-500">{desc}</span>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="p-6 border-t border-gray-200/50 bg-white/50 space-y-4">
                            <button
                                onClick={() => {
                                    setTheClickedModal("login");
                                    closeMenu();
                                }}
                                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Sign in
                                </span>
                            </button>
                            <button
                                onClick={() => {
                                    setTheClickedModal("signUp");
                                    closeMenu();
                                }}
                                className="w-full py-4 px-6 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Sign up
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}