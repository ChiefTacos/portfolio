import { Scroll } from '@react-three/drei'
import { useState } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Section = (props) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10" ${
                props.right ? "items-end" : "items-start"}`}
                style={{
                    opacity: props.opacity
                }}
        >
            <div id="money"className="w-1/3  lg:w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="rounded-md text-center">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}
export const Overlay = () => {

    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);
    const [opacityFourthSection, setOpacityFourthSection] = useState(1);

    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1/4));
        setOpacitySecondSection(scroll.curve(1/4, 1/4));
        setOpacityThirdSection(scroll.curve(2/4, 2/4));
        setOpacityFourthSection(scroll.range(3/4, 1/4));
    })

    return (
    <Scroll html>
        <div className="w-screen">
        <Section opacity={
            opacityFirstSection
        }>
            <h1 className="font-Anton text-l md:text-2xl m-4"></h1>
        </Section>
        
        <Section opacity={
            opacitySecondSection
        }>
            <h1 id="money" className="crazy0 font-sans text-l md:text-2xl px-2 py-4 md:px-4 md:py-8 m-1">Hi! Nice to meet you :) <br></br> I'm from Chicago, IL and currently a student at <a href={"https://clcillinois.coursedog.com/degrees/degrees/business/cit/aaswp"} target={"_blank"}rel={"noopener noreferrer"}>CLC</a>.</h1>
        </Section>
        
        <Section  opacity={
            opacityThirdSection
        }>
            <h1 className="crazy1 bg-blue-900 font-Anton text-l md:text-2xl px-2 py-4 md:px-4 md:py-8 m-1">I'm looking for an internship somewhere I can build on my diverse set of skills and learn from real-world experience.</h1>
            
        </Section>
        <Section right opacity={
            opacityFourthSection
        }>
            <h1 className="crazy2 bg-green-900 text-l md:text-2xl px-2 py-4 md:px-4 md:py-8 m-1">Going from here...<br></br> I will finish my full-stack blog app and keep learning more about 3D modeling and ThreeJS.</h1>
        </Section>
        </div>
        <div className="w-screen flex fixed bottom-0 justify-center">
                    <p className="loveText">Made with ❤️ by Michael Murray 2023</p>
                   
         </div>
        
    </Scroll>

    );
}