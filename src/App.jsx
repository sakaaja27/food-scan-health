import ResultGenerate from "./assets/components/ContentGenerate/result";
import ContentImage from "./assets/components/ContentImage/content";
import GenerateImage from "./assets/components/GenerateImage/generate";
import HeadingText from "./assets/components/HeadingText/heading";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-yellow-50 p-8 rounded-lg max-w-md w-full shadow-lg">
        <HeadingText></HeadingText>
        <ContentImage></ContentImage>
        <GenerateImage></GenerateImage>
        <ResultGenerate></ResultGenerate>
      </div>
    </div>
  );
}






