import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"> Hello, I'm Aidan</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Iure facere perferendis autem, quaerat ipsa at perspiciatis debitis optio! Temporibus repellat accusantium quia fugiat non enim cupiditate iure ipsa eveniet exercitationem?
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-rose-300">Hire me</button>
                        <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border-white mt-3">Download my CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
                        <Image
                        src="/images/hero-image.png"
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