const axios = require('axios');

const API_KEY = '472596674168419';
const API_SECRET = 'q-rBZ04-i0YPcicGeYGjwh9NU8M';

exports.handler = async function(event, context) {
    try {
        const { folderName, cursor, pageSize } = event.queryStringParameters;

        const { images, nextCursor } = await fetchImagesFromCloudinary(folderName, cursor, 12);
    
        // Send image data and pagination info back to the frontend
        
        return {
          images,
          nextCursor,
          pageSize,
        };
      } catch (error) {
        console.error('Error fetching images:', error);
       return {
        "images": []
       }
      }
 
};

const fetchImagesFromCloudinary = async (folderName, nextCursor = "", pageSize = 10) => {
    const maxResults = pageSize;
    const cursor = `&next_cursor=${nextCursor}`;
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/drvolex/resources/by_asset_folder?asset_folder=${folderName}&max_results=${maxResults}${cursor}`;
  
    try {
      const response = await axios.get(
        cloudinaryUrl,
         {
        headers: {
          Authorization: `Basic ${Buffer.from(API_KEY + ':' + API_SECRET).toString('base64')}`,
        },
      });
  
      return {
        images: response.data.resources,
        nextCursor: response.data.next_cursor,
      };
    } catch (error) {
      console.error('Error fetching images from Cloudinary:', error);
      return { images: [], nextCursor: null };
    }
  };
