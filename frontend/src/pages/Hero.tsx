import { useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";
import { FaRegCopy } from "react-icons/fa";

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
      alert("Link Copied!");
    } catch (err) {
      console.log(err);
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
