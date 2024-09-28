import ECard from "../components/cards/hover-card/ECard";
import ReactiveCardOneSide from "../components/cards/hover-card/ReactiveCardOneSide";
import ReactiveCardTwoSide from "../components/cards/hover-card/ReactiveCardTwoSide";


export default function About() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="space-y-4">
        <p>
          Welcome to our About page. Here you can add your content, such as
          paragraphs, images, or any other components you'd like to include.
        </p>
        <p>
          The layout will adjust based on the screen size, working seamlessly
          with the responsive Header component.
        </p>
      </div>

      <ReactiveCardOneSide></ReactiveCardOneSide>
      <ReactiveCardTwoSide></ReactiveCardTwoSide>
      <div className="flex">
      <ECard></ECard>
      <ECard></ECard>
      <ECard></ECard>
      <ECard></ECard>
      </div>
      <div className="flex">
      <ECard></ECard>
      <ECard></ECard>
      <ECard></ECard>
      <ECard></ECard>
      </div>
      
      </>
    
   
  );
}
