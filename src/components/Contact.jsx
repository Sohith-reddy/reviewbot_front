import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack, Paper, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GradientBackground from './GradientBackground';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';


const Alert = ({ status, message }) => {
    const variants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 }
    };

    const colors = {
        success: 'bg-green-50 text-green-800 border-green-200',
        error: 'bg-red-50 text-red-800 border-red-200',
        loading: 'bg-blue-50 text-blue-800 border-blue-200'
    };

    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-24 right-4 rounded-lg border px-4 py-3 shadow-lg ${colors[status]} flex items-center gap-2 z-50`}
                >
                    {status === 'success' && <CheckCircleIcon className="text-green-600" />}
                    {status === 'error' && <ErrorIcon className="text-red-600" />}
                    <p className="font-medium">{message}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        status: null,
        message: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ status: 'loading', message: 'Sending message...' });

        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitStatus({
                status: 'success',
                message: 'Message sent successfully!'
            });
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ status: null, message: '' });
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                status: 'error',
                message: 'Failed to send message. Please try again.'
            });

            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ status: null, message: '' });
            }, 5000);
        }
    };


    return (
        <GradientBackground>
            <Alert status={submitStatus.status} message={submitStatus.message} />
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