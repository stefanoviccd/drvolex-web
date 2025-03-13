
// Function to fetch image URLs from image host platform
const fetchImageUrls = async (folderName, cursor = "", pageSize = 10) => {
  try {
      /*const response = await axios.get('http://localhost:5000/fetch-images', {
        params: { folderName, cursor, pageSize }
      });*/
      const response = await fetch('/.netlify/functions/proxy?folderName='+{folderName}+'&cursor='+{cursor}+'&pageSize='+pageSize);
      
    return {
      images: response.json().data.images,
      nextCursor: response.json().data.nextCursor,
    };
  } catch (error) {
    console.error("Error fetching images from host:", error);
    return { images: [], nextCursor: null };
  }
};

export { fetchImageUrls };