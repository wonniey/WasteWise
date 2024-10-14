import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NameOrFilter_GeneralUser = () => {
    const location = useLocation(); // Get the current location

    return (
        <nav
            className="flex justify-center items-center left-0 right-0 mx-auto z-10 border-[#B7B7B7]"
            style={{
                width: "618px",
                height: "83px",
                borderRadius: "5px",
                borderWidth: "1px", // Border width
                backgroundColor: "#FFF", // Background color of the toggle bar
                flexShrink: 0,
                top: "40px", // Adjust its distance from the top
            }}
        >
            {/* Toggle Buttons: Name and Filters */}
            <div className="flex space-x-10 justify-center items-center">
                {/* Name Button */}
                <Link
                    to="/Search_GeneralUser"
                    className={`flex justify-center items-center px-6 py-2 rounded-lg ${
                        (location.pathname === '/Search_PublicUser' || location.pathname === '/Search_GeneralUser')
                            ? 'border-[#016A70] bg-[#016A70] text-white shadow-md'
                            : 'border-[#B7B7B7] bg-white text-black'
                    }`}
                    style={{
                        width: "271px",
                        height: "52px",
                        fontSize: "22px",
                        fontWeight: "400",
                        lineHeight: "normal",
                        borderWidth: "1px", // Border width
                        boxShadow: location.pathname === '/Search_GeneralUser' ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" : "none",
                    }}
                >
                    Name
                </Link>

                {/* Filter Button */}
                <Link
                    to="/SearchByFilter_GeneralUser"
                    className={`flex justify-center items-center px-6 py-2 rounded-lg ${
                        (location.pathname === '/SearchByFilter_PublicUser' || location.pathname === '/SearchByFilter_GeneralUser' || location.pathname === '/AfterFilter_GeneralUser')
                            ? 'border-[#016A70] bg-[#016A70] text-white shadow-md'
                            : 'border-[#B7B7B7] bg-white text-black'
                    }`}
                    style={{
                        width: "271px",
                        height: "52px",
                        fontSize: "22px",
                        fontWeight: "400",
                        lineHeight: "normal",
                        borderWidth: "1px", // Border width
                        boxShadow: (location.pathname === '/SearchByFilter_GeneralUser' || location.pathname === '/AfterFilter_GeneralUser') ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" : "none",
                    }}
                >
                    Filters
                </Link>
            </div>
        </nav>
    );
};

export default NameOrFilter_GeneralUser;
