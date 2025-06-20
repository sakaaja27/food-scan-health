import { useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";
export default function ContentImage() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="relative w-60 h-60 mx-auto">
      <Image
        image={image}
        fileInputRef={fileInputRef}
        onImageUpload={handleImageUpload}
      ></Image>
      <button
        onClick={handleButtonClick}
        className="absolute bottom-1 right-5 bg-white p-3 rounded-full shadow-lg"
      >
        <BsCamera className="text-blue-500 w-7 h-7" />
      </button>
    </div>
  );
}

function Image({ image, onImageUpload, fileInputRef }) {
  return (
    <div className="rounded-full overflow-hidden w-full h-full">
      {image ? (
        <img
          src={image}
          alt="Image Preview"
          className="w-full h-auto object-cover shadow-md"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No Image</span>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={onImageUpload}
      />
    </div>
  );
}
