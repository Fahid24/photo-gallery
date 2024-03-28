import ImageCard from "@/components/ImageCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-48 ">
      <div className="hero  min-h-screen  ">
        <div className="hero-content mx-auto grid gap-9 justify-center justify-items-center lg:flex-row">
          <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/397352471_308045648848659_5730269260959944174_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeERZGu5BFg0O3brKc3qIYICCufPqizhGLoK58-qLOEYutb1YdDAzvdNDwl-gvSqd1Tf4IXDlS2SRTsNG1sx-BNV&_nc_ohc=0mFShSMvb2AAX-wQW33&_nc_ht=scontent.fdac24-2.fna&oh=00_AfA9B3Hu71f_FXSrhPdv3VqhrbxI3j1LeoVLJxJT3GY_ig&oe=660AEF2C" className="max-w-sm mask mask-hexagon shadow-2xl" />
          <div className="max-w-96 text-center">
            <h1 className="text-5xl font-bold">About me!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="px-4 py-2 rounded-full text-white bg-black">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
