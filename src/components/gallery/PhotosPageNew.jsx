import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Divider from "../divider/Divider";
import Fancybox from "../Fancybox";
import Photo from "./Photo";
import "./photosPage.css";
import { fetchImageUrls } from "../../service/images/image-service";
import Loading from "../loader/Loading";
import { IoChevronUpCircleSharp } from "react-icons/io5";

const PhotosPageNew = ({ folderName }) => {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);
  const itemsPerPage = 12;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchImageUrls(folderName, nextCursor, 20);
        setItems(response.images || []);
        setNextCursor(response.nextCursor)
        setImages(response.images.slice(0, itemsPerPage));

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
          setIsLoading(false);
        }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchMoreData = () => {
    if (images.length >= items.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setImages((prevItems) => [
        ...prevItems,
        ...items.slice(prevItems.length, prevItems.length + itemsPerPage),
      ]);
    }, 500);
  };

  const optimizeUrl = (url) => {
      return url.split(folderName)[0] + "w_400,c_fill,f_auto,q_auto" + url.split(folderName)[1]
  }

  const scrollToTheTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
  }

   if (isLoading && images.length === 0) {
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
    <InfiniteScroll
      dataLength={images.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={ <Loading />}
      endMessage={<div className='div-back-to-the-top'>
         <button className='btn-back-to-top'
             onClick={scrollToTheTop}><IoChevronUpCircleSharp /><br /> Nazad na početak</button>
      </div>
     }
    >
    <div>
       <Divider></Divider>
       <div className="container">
            <Fancybox className="fancybox">
                {images.map((img) => ( <Photo imageUrl={optimizeUrl(img.url)}></Photo> ))}
            </Fancybox>
      </div>
    </div>

    </InfiniteScroll>
  );
};
export default PhotosPageNew;