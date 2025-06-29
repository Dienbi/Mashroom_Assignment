import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-600 rounded-full px-3 py-1 text-white font-bold text-lg shadow-md">Assign<span className="text-blue-300">ment</span></div>
      </div>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-gray-200 hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/comments" className="text-gray-200 hover:text-blue-400 transition-colors">Comments</Link>
      </div>
    </nav>
  );
}
