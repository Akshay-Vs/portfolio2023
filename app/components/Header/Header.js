import React from 'react'
import './Header.scss'
import TextIntro from './TextIntro'
import TextMain from './TextMain'
import TextRoles from './TextRoles'
import { motion, AnimatePresence } from "framer-motion";

function Header({ isVisible }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5, ease: "easeInOut" } }}
                exit={{ opacity: 0, transition: { delay: 0.5, ease: "easeInOut" } }}
            >
                <div className='Header'>
                    <div className='wrapper'>
                        <TextIntro text="Hello world ">
                            <span className="wave">👋</span>
                        </TextIntro>

                        <TextMain text="I'm Akshay Vs" />
                        <div className='Head-line'></div>
                        <TextRoles text="I'm a MERN dev" />
                    </div>
                </div >
            </motion.div>
        </AnimatePresence>
    )
}

export default Header