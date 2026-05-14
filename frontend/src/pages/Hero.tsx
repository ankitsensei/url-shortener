import { useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";

interface IFormInput {
  newUrl: string;
}

const Hero = () => {
  const [generatedNewUrl, setGeneratedNewUrl] = useState<string>();
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
      setGeneratedNewUrl(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:5555/${generatedNewUrl}`,
      );
      toast.success("Copied url");
    } catch (err) {
      toast.error("Couldn't copy");
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen bg-[#E3DEFF]">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
            <p className="font-bold text-5xl text-purple-950">Shorter Links.</p>
            <p className="font-light text-6xl text-purple-900">
              Deep Engagement
            </p>
          </div>
          <p className="text-zinc-600 text-center">
            Take full control. Create short, branded links and QR codes you can
            edit
            <br />
            anytime to keep your campaigns fresh and effective.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <label>Enter your URL</label>
          <div className="flex items-center">
            <div className="border border-r-0 w-110 outline-none rounded-lg rounded-r-none placeholder:text-zinc-400 flex items-center px-2">
              <IoLinkSharp className="text-zinc-400 rotate-135 text-2xl" />
              <input
                type="text"
                placeholder="https://github.com/ankitsensei"
                {...register("newUrl", { required: true })}
                className=" py-2 px-2 w-110 outline-none placeholder:text-zinc-400 flex"
              />
            </div>
            <input
              type="submit"
              className="px-5 py-2 bg-purple-400 border rounded-lg rounded-l-none"
            />
          </div>
          {errors.newUrl && <span>This field is required</span>}
        </form>
        {/*TODO: Show link and copy button after submission of original link */}
        {generatedNewUrl && (
          <div className="mt-5 flex justify-between items-center w-133 h-full border px-2 py-2 rounded-md">
            <input
              type="text"
              id="generatedUrl"
              className="w-full outline-none"
              value={`http://localhost:5555/${generatedNewUrl}`}
            />
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="px-2 rounded-lg rounded-l-none text-md"
            >
              <FaRegCopy className="" onClick={handleCopy} />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
