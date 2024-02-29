import { useState } from "react";
import SearchImages from "./Apis";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

function SeachApp() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default SeachApp;
