import { FaShoppingBag } from "react-icons/fa";
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from "react-icons/bs"

export const Footer = () => {
    return (<footer className="bg-primary text-gray-100 body-font">
    {/* <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left" data-aos="fade-right" data-aos-duration="500">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <FaShoppingBag className="text-xl lg:text-3xl text-blue-600"/>
          <span className="ml-3 text-xl text-white">e-commerce</span>
        </a>
        <p className="mt-2 text-sm text-gray-300 capitalize">Everything you need for your family, in one place </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4" data-aos="flip-right" data-aos-duration="500">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4" data-aos="flip-left" data-aos-duration="500">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4" data-aos="fade-left" data-aos-duration="500">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </div> */}
    <div className="bg-gray-900">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">&copy;copyright developped by - 
          <a href="# cursor-pointer" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Tahina rkts</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500">
            <BsFacebook className="text-xl"/>
          </a>
          <a className="ml-3 text-gray-500">
            <BsInstagram className="text-xl"/>
          </a>
          <a className="ml-3 text-gray-500">
            <BsTwitter className="text-xl"/>
          </a>
          <a className="ml-3 text-gray-500">
            <BsLinkedin className="text-xl"/>
          </a>
        </span>
      </div>
    </div>
  </footer>);
}