import axios from 'axios';

// image host platform credentials
const cloudName = 'drvolex';
const apiKey = '472596674168419'; 
const apiSecret = 'q-rBZ04-i0YPcicGeYGjwh9NU8M';

// Function to fetch image URLs from image host platform
const fetchImageUrls = async (folderName) => {
  try {
    const getImagesUrl = "https://api.cloudinary.com/v1_1/drvolex/resources/by_asset_folder?asset_folder=drvolex/kitchens";
    const response = await axios.get(
      getImagesUrl,
      {
        params: {
          max_results: 100,
        },
        headers: {
          'Authorization': 'Basic NDcyNTk2Njc0MTY4NDE5OnEtckJaMDQtaTBZUGNpY0dlWUdqd2g5TlU4TQ==',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
       
        },
      }
    );





    // Map and return the image URLs from host response
    return response.data.resources.map(img => img.url);
  } catch (error) {
    console.error("Error fetching images from host:", error);
    return [];
  }
};

export { fetchImageUrls };