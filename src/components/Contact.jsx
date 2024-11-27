import { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Paper, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GradientBackground from './GradientBackground';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <GradientBackground>

            <Box
                sx={{
                    minHeight: '100vh',
                    pt: 20,
                    pb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 'bold', mb: 6 }}
                    >
                        Contact Us
                    </Typography>

                    <Grid container spacing={4}>
                        {/* Contact Information */}
                        <Grid item xs={12} md={4}>
                            <Stack spacing={4}>
                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <EmailIcon color="primary" />
                                        <Box>
                                            <Typography variant="h6">Email</Typography>
                                            <Typography color="text.secondary">support@reviewbot.com</Typography>
                                        </Box>
                                    </Stack>
                                </Paper>

                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <PhoneIcon color="primary" />
                                        <Box>
                                            <Typography variant="h6">Phone</Typography>
                                            <Typography color="text.secondary">+91 8985744139</Typography>
                                        </Box>
                                    </Stack>
                                </Paper>

                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <LocationOnIcon color="primary" />
                                        <Box>
                                            <Typography variant="h6">Address</Typography>
                                            <Typography color="text.secondary">
                                                Saroonagar,500035
                                                <br />
                                                Hyderabad, Telangana
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Stack>
                        </Grid>

                        {/* Contact Form */}
                        <Grid item xs={12} md={8}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" gutterBottom>
                                                Send us a Message
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                sx={{ mt: 2 }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </GradientBackground>
    );
}