import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // Import useParams to get ID from URL
import Footer from "../components/Footer";
import Navbar_Regulator from "../components/NavBar_Regulator";

const Remove = () => {
    const [report, setReport] = useState(null);  // State to hold the fetched report data
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [removalReason, setRemovalReason] = useState('');  // Capture the reason for removal
    const { id } = useParams();  // Extract report ID from URL
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            setErrorMessage('Invalid report ID');
            return;
        }

        const fetchReport = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/reports/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Send user token if needed
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setReport(data);  // Set the report data to state
                } else {
                    setErrorMessage('Failed to fetch report details.');
                }
            } catch (error) {
                setErrorMessage('Network error. Please try again later.');
            }
        };

        fetchReport();
    }, [id]);  // Re-run the effect if id changes

    const handleRemove = async () => {
        setErrorMessage('');  // Clear previous errors
        setLoading(true);  // Start loader

        try {
            const response = await fetch('/api/collectors/remove/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Send user token if needed
                },
                body: JSON.stringify({
                    collector_name: report?.collector_name,  // Send the dynamic collector name
                    reason: removalReason  // Send reason for removal
                })
            });

            if (response.ok) {
                alert('Collector removed successfully');
                navigate('/listreport');  // Redirect to the list of reports
            } else {
                setErrorMessage('Failed to remove the collector.');
            }
        } catch (error) {
            setErrorMessage('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (!report) return <p>Loading...</p>;  // Show loading while fetching report data

    return (
        <div className="w-full h-full">
            <Navbar_Regulator />
            <div className="flex flex-col bg-[#016a70] h-[50vh]" style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "50px" }}>
                <h1 className="text-[#FFFDF7] font-poppins w-full text-7xl font-bold mt-[150px] text-center">Remove Collector</h1>
                <div className="flex justify-center items-start flex-grow mt-6">
                    <div className="bg-white font-bold rounded-lg shadow-lg p-6 w-[90%] h-200 max-w-3xl z-10 relative flex flex-col justify-center">
                        {/* Display the fetched collector information */}
                        <p>Reported Collector: {report.collector_name || 'N/A'}</p>
                        <p>Email Address: {report.collector_email || 'N/A'}</p>
                        <p>Address: {report.collector_address || 'N/A'}</p>
                        <p>Reason: {report.reason || 'N/A'}</p>
                        <p>Comments: {report.comments || 'N/A'}</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-center items-start flex-grow mt-6">
                    <div className="bg-white font-bold rounded-lg shadow-lg p-6 w-[90%] h-200 max-w-3xl z-10 relative flex flex-col justify-center">
                        <p>Reason for Removal:</p>
                        <textarea
                            className="mt-4 w-full p-2 border border-grey-300 rounded"
                            rows="4"
                            placeholder="Enter reason here..."
                            value={removalReason}
                            onChange={(e) => setRemovalReason(e.target.value)}  // Capture the reason for removal
                        ></textarea>
                        <div className="flex justify-center mt-4">
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}  {/* Show error message if any */}
                            <button
                                className="rounded-lg bg-[#5574ff] w-[251px] h-[52px] shadow-xl text-white p-3 font-medium"
                                onClick={handleRemove}
                                disabled={loading}
                            >
                                {loading ? 'Removing...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Remove;
