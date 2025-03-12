import React, {useState, useEffect} from 'react';
import Divider from '../divider/Divider';
import Fancybox from '../Fancybox';
import "./photosPage.css";
import { fetchImageUrls } from '../../service/images/image-service';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import Loading from '../loader/Loading';


function PhotosPage({folderName}) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);
  const [page, setPage] = useState(1); // Track current page
  const pageSize =12; // Set page size


  var [prev]=useState(<GrCaretPrevious />);
  var [next]=useState(<GrCaretNext />);


  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetchImageUrls(folderName, nextCursor, pageSize);

      setImages(response.images); // Set images
      setNextCursor(response.nextCursor); // Set next cursor for pagination
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  // Fetch images on component mount and page change
  useEffect(() => {
    fetchImages();
  }, [page]); 

  // Handle pagination button clicks
  const handleNextPage = (e) => {
    if (nextCursor) {
      setPage(page + 1);
    } else {
      e.preventDefault()
    }
  };

  const handlePreviousPage = (e) => {
      if (page > 1) {
      setPage(page - 1);
    } else {
      e.preventDefault()
    }
  };

 if (loading) {
  return  <div className='fancybox'>
    <Divider></Divider>
    <Loading  />
  </div>
 }

  return  <div className='fancybox'>
    <Divider></Divider>
    <div className="container">
  <Fancybox className="fancybox">
  {
    images.map(img=>(
        <div className="item"><a  data-fancybox="gallery" href={img.url} ><img src={img.url} alt={img.display_name} className="gallery-image"></img></a></div>
      ))}
     
  </Fancybox>
</div>
<ul className="pagination">
    <li className="page-item">
              <a href="#" className='page-link' onClick={(e)=>handlePreviousPage(e)}>
                {prev}
              </a>
          </li>
          <li className="page-item">
              <a href="#" className='page-link' onClick={(e)=>handleNextPage(e)}>
                {next}
              </a>
          </li>
     
  </ul>

</div>;
  
}

export default PhotosPage