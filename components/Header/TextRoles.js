import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TextRoles() {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Self Learner",
                "Mern Stack Developer",
                "Blogger",
                "Open Source Developer"
            ],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 40,
            backDelay: 500,
            smartBackspace: true,
            loop: true,
            cursorChar: "_"
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="roles">
            I'm a <span ref={el}></span>
        </div>
    );
}