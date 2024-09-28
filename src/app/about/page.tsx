import ECard from "../components/cards/hover-card/ECard";
import ReactiveCardOneSide from "../components/cards/hover-card/ReactiveCardOneSide";
import ReactiveCardTwoSide from "../components/cards/hover-card/ReactiveCardTwoSide";


export default function About() {
  return (
    <>
      <h1 className="mb-4">About Us</h1>
      <h2 className="mb-4">About Me</h2>
      <h3 className="mb-4">About Me</h3>
      <h4 className="mb-4">About Me</h4>
      <h5 className="mb-4">About Me</h5>
      <h6 className="mb-4">About Me</h6>
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
