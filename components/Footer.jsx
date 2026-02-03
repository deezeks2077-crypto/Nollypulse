import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <main className='border-t-3 border-gray-950 md:px-20 md:py-4 p-3 flex max-lg:flex-col max-lg:gap-6 items-center bg-white justify-between'>
            <Link href={"/"} className='flex items-center gap-1'>
                <Image src={"/Logo.png"} alt='logo' width={500} height={500} className='w-15 h-15' />
                <p className='text-3xl text-slate-600  font-bold'>Nolly</p><p className='text-3xl text-red-600'>Pulse</p>
            </Link>

            <div className='text-lg space-x-5 text-slate-600 max-md:flex max-md:flex-col gap-5 max-md:items-center'>
                <Link href={"#"} className='hover:underline'>Terms of Use</Link>
                <Link href={"#"} className='hover:underline'>Privacy Policy</Link>
                <Link href={"#"} className='hover:underline'>Bug Bounty</Link>
                <Link href={"#"} className='hover:underline'>FAQs</Link>
            </div>

            <div className='flex items-center gap-5 text-3xl text-slate-600'>
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
                <FaYoutube />
            </div>
        </main>
    )
}

export default Footer
