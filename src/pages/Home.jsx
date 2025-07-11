import { useEffect, useState } from "react";
import CommentCard from "../components/CommentCard";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.css"
export default function Home() {
  const [cardsData, setCardsData] = useState([[], []]);
  const [setIndex, setSetIndex] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.slice(0, 6).map((comment) => ({
          name: comment.name,
          role: comment.email,
          quote: comment.body,
        }));
        setCardsData([
          formattedData.slice(0, 3),
          formattedData.slice(3, 6),
        ]);
      });
  }, []);

  const handlePrev = () => setSetIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  const handleNext = () => setSetIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));

  if (!cardsData[0].length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 items-center justify-between">
        {/* Left Side: Introduction */}
        <div className="flex-1 max-w-md text-left">
          <div className="mb-6">
            <span className="uppercase text-blue-400 tracking-widest text-xs font-semibold">Welcome Mashroom</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">I am Dhia Borji</h1>
            <p className="mt-5 text-gray-300 text-lg">This project is my humble try to create the assignment that you gave me.</p>
          </div>
          <div className="flex gap-4 mt-6">
            <div className="card">
              <span>Contact</span>
               <a className="social-link" href="https://www.facebook.com/dhia.borji/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000000"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </a>
              <a className="social-link" href="https://www.instagram.com/dhiaborji/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#000000"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/dhia-borji-85b116183/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#000000"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
              </a>
              <a className="social-link" href="https://github.com/Dienbi" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="#000000"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Cards Carousel */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex gap-6">
            <AnimatePresence mode="wait">
              {cardsData[setIndex].map((card, idx) => (
                <motion.div
                  key={card.name + idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <CommentCard {...card} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex gap-4 mt-8">
            <button onClick={handlePrev} className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-full shadow transition-all">←</button>
            <button onClick={handleNext} className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-full shadow transition-all">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
