// Import useState hook from React for managing form state
    import { useState } from 'react';
    // Import Material-UI components for form inputs and styling
    import { TextField, Button, Container, Typography, Box } from '@mui/material';

    // CompanyForm component for adding new companies via a form
    function CompanyForm() {
      // Initialize formData state to store input values (name, contact_person, etc.)
      const [formData, setFormData] = useState({
        name: '',
        contact_person: '',
        phone: '',
        location: '',
        crop_activities: ''
      });
      // Initialize error state to display validation or server errors
      const [error, setError] = useState('');

      // Handle input changes by updating formData state
      const handleChange = (e) => {
        // Update the specific field (e.g., name) with the input value
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      // Handle form submission to send data to the backend
      const handleSubmit = async () => {
        // Validate that the required name field is not empty
        if (!formData.name) {
          setError('Company name is required');
          return;
        }

        try {
          // Send a POST request to the backend API to create a company
          const response = await fetch('http://localhost:5000/api/companies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData) // Convert formData to JSON
          });

          // Check if the request was successful
          if (response.ok) {
            // Show success message and reset the form
            alert('Company added successfully!');
            setFormData({
              name: '',
              contact_person: '',
              phone: '',
              location: '',
              crop_activities: ''
            });
            setError(''); // Clear any previous errors
          } else {
            // Display error if the server rejects the request
            setError('Failed to add company');
          }
        } catch (err) {
          // Handle network or server connection errors
          setError('Error connecting to server');
        }
      };

      // Render the form UI
      return (
        // Container centers the form with a max width
        <Container maxWidth="sm">
          {/* Box adds margin for spacing */}
          <Box sx={{ mt: 4 }}>
            {/* Heading for the form */}
            <Typography variant="h4" gutterBottom>
              Add Company
            </Typography>
            {/* Display error message if error state is set */}
            {error && <Typography color="error">{error}</Typography>}
            {/* TextField for company name (required) */}
            <TextField
              label="Company Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            {/* TextField for contact person */}
            <TextField
              label="Contact Person"
              name="contact_person"
              value={formData.contact_person}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            {/* TextField for phone number */}
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            {/* TextField for location */}
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            {/* TextField for crop activities */}
            <TextField
              label="Crop Activities"
              name="crop_activities"
              value={formData.crop_activities}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            {/* Submit button with custom green color */}
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: '#388e3c', '&:hover': { backgroundColor: '#2e7d32' } }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Container>
      );
    }

    // Export the CompanyForm component for use in App.js
    export default CompanyForm;