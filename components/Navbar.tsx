"use client"

import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";
import {useState} from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="flexBetween max-container padding-container py-5 relative z-30">
            <Link href="/">
                <Image alt="logo" src="/hilink-logo.svg" width={74} height={29}></Image>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => {
                    return (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    )
                })}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Log In"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {
                isMenuOpen && (
                    <div className="absolute top-20 left-0 right-0 bg-white shadow-md py-5 px-10 z-30 flex flex-col gap-5">
                        <ul className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => {
                                return (
                                    <Link
                                        key={link.key}
                                        href={link.href}
                                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </ul>
                        <div className="flexCenter">
                            <Button
                                type="button"
                                title="Log In"
                                icon="/user.svg"
                                variant="btn_dark_green"
                            />
                        </div>
                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;