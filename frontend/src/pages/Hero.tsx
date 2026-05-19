import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import Silk from "../component/Silk";

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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#484848"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex flex-col justify-center items-center mt-20 px-2">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center">
              <p className="font-bold text-4xl md:text-5xl text-white">
                Shorter Links.
              </p>

              <p className="font-light text-4xl md:text-6xl text-white text-center">
                Deep Engagement
              </p>
            </div>

            <p className="text-zinc-400 text-center text-[12px] md:text-md">
              Take full control. Create short, branded links and QR codes you
              <br />
              can edit anytime to keep your campaigns fresh and effective.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-2 w-full md:w-120 lg:w-auto"
          >
            <label className="text-white font-medium text-[12px] md:text-sm">
              Enter your URL
            </label>

            <div className="flex items-center justify-center w-full">
              <div className="border border-r-0 border-white/30 backdrop-blur-md bg-white/40 w-full lg:w-[440px] rounded-lg rounded-r-none flex items-center px-2">
                <IoLinkSharp className="text-zinc-300 rotate-135 text-2xl" />

                <input
                  type="text"
                  placeholder="https://github.com/ankitsensei"
                  {...register("newUrl", { required: true })}
                  className="py-3 px-2 w-full bg-transparent outline-none placeholder:text-zinc-400 text-zinc-300"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-3 bg-zinc-500 hover:bg-zinc-600 transition text-zinc-300 border border-zinc-400 rounded-lg rounded-l-none"
              >
                Shorten
              </button>
            </div>

            {errors.newUrl && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </form>

          {generatedNewUrl && (
            <div className="mt-5 flex justify-between items-center w-full md:w-120 lg:w-135 border border-white/30 bg-white/40 backdrop-blur-md px-3 py-3 rounded-md">
              <input
                type="text"
                readOnly
                className="bg-transparent outline-none text-zinc-300 w-full md:w-120 lg:w-full"
                value={`http://localhost:5555/${generatedNewUrl}`}
              />

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="px-2 text-lg text-zinc-300"
              >
                <FaRegCopy />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
