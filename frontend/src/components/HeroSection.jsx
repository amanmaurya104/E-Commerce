import { Link } from 'react-router-dom';
import bgImage from '../assets/file.jpg';

export default function HeroSection() {
    return (
        <div
          className="h-[80vh] flex flex-col items-center justify-center bg-cover bg-center text-white text-center px-4"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h1 className="text-4xl md:text-6xl font-comic mb-4 drop-shadow-lg animate-zoom">
            Unleash the Hero in You
          </h1>
          <p className="text-lg md:text-xl font-orbit text-yellow-100 mb-6 max-w-2xl drop-shadow-md">
            Shop exclusive comic superhero tees with a Starry Night twist!
          </p>
          <Link
            to="/products"
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transform transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      );
    }
