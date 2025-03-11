
const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;

// Your Cloudinary credentials
const CLOUD_NAME = 'drvolex';
const API_KEY = '472596674168419';
const API_SECRET = 'q-rBZ04-i0YPcicGeYGjwh9NU8M';

app.use(cors());

app.get('/fetch-images', async (req, res) => {
    const {folderName, cursor = "", pageSize = 10} = req.query; // Get the page and pageSize from query parameters
    try {

      const { images, nextCursor } = await fetchImagesFromCloudinary(folderName, cursor, pageSize);
  
      // Send image data and pagination info back to the frontend
      res.json({
        images,
        nextCursor, // Send the next cursor for pagination
        pageSize,
      });
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  });


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







app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});