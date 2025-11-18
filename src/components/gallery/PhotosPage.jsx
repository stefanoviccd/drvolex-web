/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useCallback } from "react";
import Divider from "../divider/Divider";
import Fancybox from "../Fancybox";
import "./photosPage.css";
import { fetchImageUrls } from "../../service/images/image-service";
import Loading from "../loader/Loading";
import Photo from "./Photo";

function PhotosPage({ folderName }) {
  const [images, setImages] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

    const fetchImages = useCallback(async () => {
      if (isLoading || !hasMore){
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetchImageUrls(folderName, nextCursor, page);
        const newImages = response.images || [];
        if (newImages.length === 0) {
          setHasMore(false);
        }
        setImages((prevImages) => [...prevImages, ...newImages]); // Set images
        setNextCursor(response.nextCursor); // Set next cursor for pagination
        setPage((prevPage) => {prevPage ++});
        console.log("page " + page)
      } catch (error) {
        console.log(error)
      } finally {
          setIsLoading(false);
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, isLoading, hasMore]);

    const handleScroll = useCallback(() => {
// Calculate the distance from the top of the viewport to the bottom of the page
    const scrollPosition = document.documentElement.scrollTop + window.innerHeight;
    // Calculate the total height of the content
    const totalHeight = document.documentElement.offsetHeight;
    
    // Check if the user is within 100px of the bottom
    const isNearBottom = scrollPosition >= totalHeight - 100; 

    // If near the bottom AND not currently loading AND there's more data to fetch
    if (isNearBottom && !isLoading && hasMore) {
      fetchImages();
    }
        }, [isLoading, hasMore, page, fetchImages]);

    useEffect(() => {
    // Start with the first page load
    fetchImages();
  }, []);

useEffect(() => {
    // Attach the event listener to the window
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: Remove the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

 if (isLoading) {
    return (
      <div className="fancybox">
        <Divider></Divider>
        <Loading />
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="loader">
        <Divider></Divider>
        <p>Trenutno nema slika iz ove grupe.</p>
      </div>
    );
  }

  return (
    <div className="fancybox">
      <Divider></Divider>
      <div className="container">
        <Fancybox className="fancybox">
          {images.map((img) => (
            <Photo imageUrl={img.url}></Photo>
          ))}
        </Fancybox>
      </div>
      
  
    </div>
  );


  /*const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);
  const [page, setPage] = useState(1); // Track current page
  const pageSize = 20; // Set page size
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  var [prev] = useState(<GrCaretPrevious />);
  var [next] = useState(<GrCaretNext />);

  const fetchImages = async () => {
      try {
        if (!hasMore) return;
        setLoading(true);
        const response = await fetchImageUrls(folderName, nextCursor, pageSize);
        const newImages = response.images;
        if (!newImages) {
          setHasMore(false);
        }
        setImages(...images, ...newImages); // Set images
        setNextCursor(response.nextCursor); // Set next cursor for pagination
        setLoading(false);
      } catch (error) {
        console.log("bla")
        setLoading(false);
        setHasMore(false);
      }
    };

  // Fetch images on component mount and page change
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

   useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchImages();
        }
      },
      { threshold: 1.0 } // Trigger when the entire element is visible
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [hasMore, loading, fetchImages]);

  if (loading) {
    return (
      <div className="fancybox">
        <Divider></Divider>
        <Loading />
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="loader">
        <Divider></Divider>
        <p>Trenutno nema slika iz ove grupe.</p>
      </div>
    );
  }

  return (
    <div className="fancybox">
      <Divider></Divider>
      <div className="container">
        <Fancybox className="fancybox">
          {images.map((img) => (
            <Photo imageUrl={img.url}></Photo>
          ))}
        </Fancybox>
      </div>
       <div ref={observerTarget} style={{ height: '1px' }}></div> {}
    </div>
  );
  */
}

export default PhotosPage;
