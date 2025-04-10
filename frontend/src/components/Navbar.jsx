import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Zidio</h1>
        <ul className="flex space-x-6 font-semibold">
           <li>🦸 <Link to="/" className="hover:text-yellow-300">Home</Link></li>
           <li>🛒 <Link to="/products" className="hover:text-yellow-300">Products</Link></li>
           <li>🔐 <Link to="/login" className="hover:text-yellow-300">Login</Link></li>
         <li>🆕 <Link to="/signup" className="hover:text-yellow-300">Signup</Link></li>
        </ul>

      </div>
    </nav>
  );
}
