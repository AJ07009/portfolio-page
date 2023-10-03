"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'


export const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    
    return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/image_replacement.png"
            width={500}
            height={500}
            />
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    About me
                </h2>
                <p className='text-base lg:text-lg'>
                    erdtfdyhgfsgaewrygrth
                </p>
                <div className='flex flex-row mt-8'>
                    <span className='mr-3 font-semibold hover:text-white border-b border-pink-500'>
                        Skills
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}
