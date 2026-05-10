import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";
import { FaRegCopy } from "react-icons/fa";

interface IFormInput {
  newUrl: string;
}

const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await axios.post("http://localhost:5555/url", {
        url: data.newUrl,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-[#E3DEFF]">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Enter your URL</label>
          <div>
            <input
              type="text"
              placeholder="https://ankitbhagat-portfolio.vercel.app/"
              {...register("newUrl", { required: true })}
              className="border border-r-0 py-2 px-2 w-110 outline-none rounded-lg rounded-r-none placeholder:text-zinc-400"
            />
            {errors.newUrl && <span>This field is required</span>}
            <input
              type="submit"
              className="px-5 py-2 bg-purple-400 border rounded-lg rounded-l-none"
            />
          </div>
        </form>
        {/*TODO: Show link and copy button after submission of original link */}
        <div className="mt-5 flex justify-between items-center w-133 h-full border px-2 py-2 rounded-md">
          <input type="text" className="w-full outline-none" />
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="px-2 rounded-lg rounded-l-none text-md"
          >
            <FaRegCopy className="" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
