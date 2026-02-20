import Index from "./(pages)/home/page";
import Growth from "./components/(Home)/growth";
import Idea from "./components/(Home)/idea";
import TechHub from "./components/(Home)/techhub";
import TrustUs from "./components/(Home)/trustus";
 
  

export default function Home() {
  return (
    <div>
      <Index />
      <TechHub />
      <Idea/>
      <TrustUs/>
      <Growth />
    </div>
  );
}
