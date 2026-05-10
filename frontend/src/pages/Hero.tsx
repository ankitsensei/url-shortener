import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";

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
      </div>
    </div>
  );
};

export default Hero;
