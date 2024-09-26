import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useLocation } from 'react-router-dom'; // Import useLocation to detect route changes
import logo from './logo.png'; // Import the image correctly
import styles from './navbar.module.css'; // Correct way to import CSS module
import { Link } from 'react-router-dom';
import ddimg from './ddimg.svg';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Access the current route location

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Effect to reset visibility when the route changes
  useEffect(() => {
    setIsVisible(false); // Close the dropdown on route change
  }, [location]);

  return (
    <>
      <nav className={styles.heyy} style={{ position: 'fixed', zIndex: 40 }}>
        <Link to="/">
          <img className="h-[75px] self-start mt-[5px]" src={logo} alt="Logo" />
        </Link>

        <ul className="list-none flex justify-center items-center gap-[50px] mx-auto hidden md:flex">
          <li
            onClick={toggleVisibility}
            className="text-white hover:cursor-pointer hover:underline decoration-blue-500 underline-offset-4"
          >
            Our Services
            <i
              className={`bi bi-chevron-down transition-transform duration-300 relative ml-1 ${isVisible ? 'rotate-180' : ''}`}
              style={{ display: 'inline-block' }} // Ensure the element is displayed correctly
            ></i>
          </li>
          <Link to="/Whoweare">
            <li className="text-white hover:cursor-pointer hover:underline decoration-blue-500 underline-offset-4">
              Who we are
            </li>
          </Link>
          <li className="text-white hover:cursor-pointer hover:underline decoration-blue-500 underline-offset-4">
            Case studies
          </li>
        </ul>

        <Link
          to="/Contact"
          className="text-white mr-4 border-solid border-red border-[2px] p-[5px] rounded-[30px] hidden md:flex hover:bg-white hover:text-black"
        >
          Book an Appointment
        </Link>
      </nav>

      <div className="h-[60px] bg-slate-500"></div>

      <div
        className={`fixed top-0 left-0 w-[100%] bg-black transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } z-20`}
        style={{
          height: '500px',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          top: '60px',
          padding: '20px',
        }}
      >
        <div style={{ width: '20%' }}>
          <img src={ddimg} alt="" />
        </div>

        <div
          style={{
            width: '80%',
            height: '100%',
            backgroundColor: 'pink',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div className="bg-slate-500 h-[80%] w-[30%] justify-center flex-col flex">
            <h3 className="text-[22px]">IT Services</h3>

            <ul>
              <h4>Website Development</h4>
            </ul>

            <ul>
              <h4>App Development</h4>
            </ul>
          </div>

          <div className="bg-gray-600 h-[80%] w-[30%] items-center flex-col gap-2 flex">
            <Link to="/BusinessConsultancy">
              <h3 className="text-[22px]">Business Consultancy</h3>
            </Link>

            <ul>
              <li className="text-center white">Operational Consulting</li>
              <li className="text-center white">Strategy Consulting</li>
              <li className="text-center white">Price Strategy Consulting</li>
              <li className="text-center white">Sales Consulting</li>
              <li className="text-center white">Human Resource Consulting</li>
              <li className="text-center white">Management Consulting</li>
              <li className="text-center white">Sustainability Consulting</li>
              <li className="text-center white">Data Analysis Consulting</li>
              <li className="text-center white">Marketing Consulting</li>
            </ul>
          </div>

          <div className="bg-gray-600 h-[80%] w-[30%] items-center flex-col gap-2 flex">
            <Link to="/SocialMediaManagement">
              <h3 className="text-[22px]">Social Media Management</h3>
            </Link>
            <ul>
              <li className="text-center white">Video Editing</li>
              <li className="text-center white">Graphic Designing</li>
              <li className="text-center white">Social Media Account Management</li>
              <li className="text-center white">Public Relations</li>
              <li className="text-center white">Social Media Advertising</li>
              <li className="text-center white">Social Media Strategy Development</li>
              <li className="text-center white">Digital Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
