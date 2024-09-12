import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import { FaNodeJs } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import {motion} from 'framer-motion'

const iconVarients = (duration) => ({
    initial:{y: -10},
    animate:{
        y:[10, -10],
        transition: {
            duration:duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"       
         },
    },
});
const Technologies =() =>{
    return (
                <div className="border-b border-neutral-800 pb-24">
                    <h1 className="my-20 text-center text-4xl" >Tech Stacks</h1>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.div
                        variants={iconVarients(2.5)}
                        initial="initial"
                        animate="animate"
                         className="rounded-2xl border-4 border-neutral-800 p-4">
                         <RiReactjsLine className="text-7xl text-cyan-400"/>
                        </motion.div>

                        <motion.div
                         variants={iconVarients(3)}
                         initial="initial"
                         animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                         <SiMongodb className="text-7xl text-green-400"/>
                        </motion.div>

                        <motion.div
                         variants={iconVarients(6)}
                         initial="initial"
                         animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                         <FaNodeJs className="text-7xl text-green-400"/>
                        </motion.div>

                        <motion.div
                         variants={iconVarients(4)}
                         initial="initial"
                         animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                         <FaServer className="text-7xl text-silver-400"/>
                        </motion.div>

                    </div>

                </div>
    );
}

export default Technologies;