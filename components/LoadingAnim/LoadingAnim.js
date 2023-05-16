'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from './Icons'
import './LoadingAnim.scss'


export const LoadingAnim = ({ setIsLoading }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5, ease: "easeInOut" } }}
                exit={{ opacity: 0, transition: { delay: 0.5, ease: "easeInOut" } }}
            >
                <div className='cover'>
                    <div className='spinner'>
                        <Icons of="react" />
                        <Icons of="tailwindcss" />
                        <Icons of="github" />
                        <Icons of="firebase" />
                        <Icons of="mongodb" />
                    </div>
                    <div className='copy'>&copy; 2023 Akshay Vs <br /> All rights reserved</div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}


