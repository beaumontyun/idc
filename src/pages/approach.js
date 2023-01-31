import Image from "next/image";
import { Suspense } from "react";
import Logo from "../../public/approach.svg"
import Loading from "@/components/loading";

const Approach = () => {
    return (
        <div className="grid grid-cols-2 border-2 border-red-400">
            <section className="">
                <Suspense fallback={<Loading />}>
                    <Image src={Logo} className="mx-auto border-2 border-red-400 object-contain" />
                </Suspense>
            </section>
            <section className="flex flex-col gap-3 px-12">
                <p className="font-bold text-2xl">we like to take our time.</p>
                <p className="text-xl">It is important in taking time to know you, understand your story and do thorough research in order to build the project you want from the ground up or on top of what you already have. 
                    <br />
                    A successful project is built from a relatable story. and within that, an incredible moment. That moment is what we help find to propel your project forward.
                    <br/>
                    We care about the finer details in your project because we believe this is what makes the difference between a good project and a great project.
                </p>
            </section>
        </div>
     );
}
    
export default Approach;