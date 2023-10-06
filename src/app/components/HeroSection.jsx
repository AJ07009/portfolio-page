import Image from "next/image";
import TypeAnimation from "./TypeAnimation";
import ButtonComponent from "./ButtonComponent";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-yellow-600">Hello, I'm {""}</span>
                    <TypeAnimation/></h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6" >
                    I'm a Software Engineer driven by a deep passion for harnessing technology to
                    tackle real-world challenges. My enthusiasm for continuous personal growth is fueled
                    by programming, and I thrive on tackling complex problems. My skill set includes
                    proficiency in JavaScript, Java, Python, SQL, Docker, object-oriented programming,
                    and version control with Git.
                    </p>
                    <div>
                        <ButtonComponent/>
                    </div>
                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[200px] h-[200px] relative lg:w-[350px] lg:h-[350px]">
                        <Image
                        src="/images/Aidan_image_for_everything.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;