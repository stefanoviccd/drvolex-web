/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import Divider from "../divider/Divider";
import Fancybox from "../Fancybox";
import "./photosPage.css";
import { fetchImageUrls } from "../../service/images/image-service";
import Loading from "../loader/Loading";
import Photo from "./Photo";

function PhotosPage({ folderName }) {
  const [images, setImages] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [ready, setReady] = useState(false);
  const [count, setCount] = useState(5);

    const fetchImages = async () => {
      try {
        const response = await fetchImageUrls(folderName, nextCursor, count);
        const newImages = response.images || [];
        setImages((prevImages) => [...prevImages, ...newImages]); // Set images
        setNextCursor(response.nextCursor); // Set next cursor for pagination
      } catch (error) {
        console.log(error)
      }
    };

useEffect(() => {
    setImagesLoaded(imagesLoaded + 1);
    if (imagesLoaded === totalImages) {
      setReady(true);
      setCount(5);
    }
  },
[totalImages]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
    
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000
          && ready
        ) {
        
          //setReady(false);
          fetchImages();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
 
  window.addEventListener("scroll", handleScroll)
  return () => {
    window.removeEventListener("scroll", handleScroll);
  }
},
[ready]
);

useEffect(
  () => {
    setTotalImages(images.length)
  }, [images]
);

 if (!ready) {
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
