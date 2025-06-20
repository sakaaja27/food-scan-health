import { BsCamera } from "react-icons/bs";
export default function App() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-yellow-50 p-8 rounded-lg max-w-md w-full shadow-lg">
        <ContentImage></ContentImage>
        <GenerateImage></GenerateImage>
      </div>
    </div>
  );
}

function ContentImage() {
  return (
    <div className="relative w-60 h-60 mx-auto">
      <Image></Image>
      <button className="absolute bottom-1 right-5 bg-white p-3 rounded-full shadow-lg">
        <BsCamera className="text-blue-500 w-7 h-7" />
      </button>
    </div>
  );
}

function Image() {
  return (
    <div className="rounded-full overflow-hidden w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        alt="Beautiful Landscape"
        className="w-full h-auto objcet-cover shadow-md"
      />
    </div>
  );
}

function GenerateImage() {
  return (
    <div className="mt-6 flex justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
        Generate Image
      </button>
    </div>
  );
}
