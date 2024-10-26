import Image from "next/image";
import Herosection from "./component/Herosection";
import Partners from "./component/Partners";
import Solutions from "./component/Solutions";
import Features from "./component/Features";
import Community from "./component/Community";
import Encryption from "./component/Encryption";
import Insights from "./component/Insights";
import Footer from "./component/Footer";
import BookDemo from "./component/BookDemo";
import Navbar from "./component/Navbar";
import Footer2 from "./component/Footer2";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Partners/>
    <Solutions/>
    <Features/>
    <Community/>
    <Encryption/>
    <Insights/>
    <BookDemo/>
    <Footer/>
    <Footer2/>
    
    </>
  );
}
