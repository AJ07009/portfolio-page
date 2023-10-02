"use client";
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationStyle = () => {
    return (
        <TypeAnimation
            sequence={[
            'Aidan Josias',
            2000,
            'a Tech founder',
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            'a Software Engineer',
            2000,
            'a FullStack Dev',
            2000,
        ]}
        wrapper="relative"
        speed={50}
        repeat={Infinity}
    />
    );
};

export default TypeAnimationStyle;