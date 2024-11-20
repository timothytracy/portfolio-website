import About from "./About";
import ExperienceGraph from "./components/graph/ExperienceGraph";
import Portfolio from "./Portfolio";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <div className="flex flex-col md:overflow-scroll bg-neutral-200 dark:bg-neutral-900">
      <About></About>
      <Portfolio></Portfolio> 

      
    
    </div>
   
  );
}
