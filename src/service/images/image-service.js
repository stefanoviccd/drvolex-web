

// Function to fetch image URLs from image host platform
const fetchImageUrls = async (folderName, cursor = "", pageSize = 10) => {
  try {
  
      var url = '/.netlify/functions/proxy?folderName='+folderName+'&pageSize='+pageSize
      if (cursor !== null) {
        url = url+'&cursor='+cursor;
      }

      const response = fetch(url);
      const json = await response.json();
      
    return {
      images: json.images,
      nextCursor: json.nextCursor,
    };
  } catch (error) {
    console.error("Error fetching images from host:", error);
    return { images: [], nextCursor: null };
  }
};

export { fetchImageUrls };