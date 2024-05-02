import Image from "next/image";
import Presentation from "./sections/home/Presentation";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <Header />
      <Presentation />
      <div className="min-h-[100vh] w"></div>
      <div className="min-h-[100vh] w"></div>
      <div className="min-h-[100vh] w"></div>
    </div>
  );
};
