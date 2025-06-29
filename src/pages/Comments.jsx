import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import styles from "./comments.css"
export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => {
        setComments(data.slice(0, 50));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        setLoading(false);
      });
  }, []);

  const swiperRef = useRef(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 relative">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Community Feedback</h2>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={false} // Disable default navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full max-w-7xl mx-auto"
      >
        {comments.map((comment, index) => (
          <SwiperSlide key={comment.id} style={{ width: '350px', height: '400px' }}>
            <div className="group relative cursor-pointer overflow-hidden bg-gray-800 rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12 h-full flex flex-col justify-between">
              <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500">
                  <svg
                    className="h-12 w-12 text-white transition-all"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
                <div className="space-y-6 pt-6 text-lg leading-8 text-gray-300 transition-all duration-500 group-hover:text-white">
                    <h3 className="font-semibold text-2xl text-blue-400 line-clamp-2 group-hover:text-white">{comment.name}</h3>
                    <p className="text-md text-gray-400 mb-4 group-hover:text-white">{comment.email}</p>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white">{comment.body}</p>
                </div>
                <div className="pt-6 text-lg font-semibold leading-7">
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="button"
        >
          <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="button"
        >
           <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>
    
    </div>
  );
}