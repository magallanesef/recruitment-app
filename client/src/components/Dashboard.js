// Import React hooks for state and side effects
    import { useState, useEffect } from 'react';
    // Import Bar chart component from react-chartjs-2
    import { Bar } from 'react-chartjs-2';
    // Import Chart.js components for chart functionality
    import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
    // Import Material-UI components for layout and styling
    import { Container, Typography, Box } from '@mui/material';

    // Register Chart.js components to enable chart features
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    // Dashboard component to display a bar chart of recruitment logs by activity
    function Dashboard() {
      // Initialize chartData state to store labels and datasets for the chart
      const [chartData, setChartData] = useState({
        labels: [], // Activity names (e.g., "Weeding")
        datasets: [] // Data for the chart (e.g., counts)
      });

      // useEffect to fetch data when the component mounts
      useEffect(() => {
        // Fetch recruitment log data from the backend API
        fetch('http://localhost:5000/api/recruitment-logs/by-activity')
          .then((response) => response.json()) // Parse JSON response
          .then((data) => {
            // Extract activity names (or "Unknown" if null)
            const labels = data.map((item) => item.activity || 'Unknown');
            // Extract count of logs per activity
            const counts = data.map((item) => item.count);
            // Update chartData state with labels and dataset
            setChartData({
              labels,
              datasets: [
                {
                  label: 'Recruitment Logs by Activity', // Chart legend
                  data: counts, // Number of logs per activity
                  backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar fill color
                  borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
                  borderWidth: 1 // Border thickness
                }
              ]
            });
          })
          .catch((error) => console.error('Error fetching data:', error)); // Log errors
      }, []); // Empty dependency array means run once on mount

      // Render the dashboard UI
      return (
        // Container centers content with a medium max width
        <Container maxWidth="md">
          {/* Box adds margin for spacing */}
          <Box sx={{ mt: 4 }}>
            {/* Heading for the dashboard */}
            <Typography variant="h4" gutterBottom>
              Recruitment Dashboard
            </Typography>
            {/* Box sets chart height */}
            <Box sx={{ height: '400px' }}>
              {/* Bar chart displaying recruitment logs by activity */}
              <Bar
                data={chartData} // Chart data (labels and datasets)
                options={{
                  responsive: true, // Adjusts chart to container size
                  maintainAspectRatio: false, // Allows custom height
                  plugins: {
                    legend: { position: 'top' }, // Show legend at top
                    title: { display: true, text: 'Recruitment Logs by Activity' } // Chart title
                  }
                }}
              />
            </Box>
          </Box>
        </Container>
      );
    }

    // Export the Dashboard component for use in App.js
    export default Dashboard;