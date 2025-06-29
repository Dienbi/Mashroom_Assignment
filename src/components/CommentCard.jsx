import { motion } from "framer-motion";

export default function CommentCard({ name, role, quote }) {
  return (
    <motion.div
      // We use the "group" class here to allow child elements to react to the parent's hover state
      className="group relative flex flex-col justify-between w-[300px] h-[360px] p-8 rounded-3xl border border-gray-700 bg-gray-900 overflow-hidden transition-all duration-500 hover:border-blue-500 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0_#2563eb]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {/* Header Section */}
      <div>
        {/* FIX: Added line-clamp to prevent long names from overflowing */}
        <strong className="text-xl font-bold text-white line-clamp-2">{name}</strong>
        {/* FIX: Added line-clamp to prevent long emails from overflowing */}
        <p className="text-sm text-gray-400 line-clamp-1">{role}</p>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-start gap-4">
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-blue-400"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z" />
        </svg>
        {/* FIX: Added line-clamp to prevent the main quote from overflowing */}
        <p className="text-base text-gray-300 leading-relaxed line-clamp-5">{quote}</p>
        <button className="relative text-base font-bold text-white cursor-pointer overflow-hidden
                         before:absolute before:content-[''] before:w-full before:h-px before:bg-blue-500 before:bottom-0 before:left-0
                         before:scale-x-0 before:origin-right before:transition-transform before:duration-300
                         group-hover:before:scale-x-100 group-hover:before:origin-left">
          <span> View more </span>
        </button>
      </div>
    </motion.div>
  );
}