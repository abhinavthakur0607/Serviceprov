import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [requests, setRequests] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const requestsResponse = await axios.get('http://localhost:3001/requests');
        const ratingsResponse = await axios.get('http://localhost:3001/ratings');
        const paymentsResponse = await axios.get('http://localhost:3001/payments');

        setRequests(requestsResponse.data);
        setRatings(ratingsResponse.data);
        setPayments(paymentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Service Provider Dashboard</h1>

      {/* Display KPIs and other relevant information */}
      <div>
        <h2>OPERATION KPI's</h2>
        {/* Implement and display operation KPIs based on requests */}
        {/* Display productivity, revenue, etc. */}
      </div>

      <div>
        <h2>QUALITY of Services KPIs</h2>
        {/* Implement and display ratings, repeat/revisits, canceled requests */}
      </div>

      <div>
        <h2>SPEED OF SERVICE KPIs</h2>
        {/* Implement and display request turnaround time, speed of service */}
      </div>

      <div>
        <h2>Financial KPIs</h2>
        {/* Implement and display payment to platform, earnings, payouts */}
      </div>

      <div>
        <h2>Business Opportunities</h2>
        {/* Implement and display reminders for upcoming routine preventive maintenance */}
      </div>
    </div>
  );
}

export default App;
