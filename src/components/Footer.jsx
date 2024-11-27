import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e293b', // Changed to a dark blue shade
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 4, sm: 8 }}
          justifyContent="space-between"
        >
          {/* Company Info */}
          <Stack spacing={2} flex={1}>
            <Typography variant="h6" gutterBottom>
              ReviewBot
            </Typography>
            <Typography variant="body2">
              Transforming code reviews with AI-powered insights and automated analysis.
            </Typography>
          </Stack>
          
          {/* Quick Links */}
          <Stack spacing={2} flex={1}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" sx={{ '&:hover': { color: '#94a3b8' } }}>Home</Link>
              <Link href="/features" color="inherit" sx={{ '&:hover': { color: '#94a3b8' } }}>Features</Link>
              <Link href="/pricing" color="inherit" sx={{ '&:hover': { color: '#94a3b8' } }}>Pricing</Link>
              <Link href="/team" color="inherit" sx={{ '&:hover': { color: '#94a3b8' } }}>Team</Link>
              <Link href="/contact" color="inherit" sx={{ '&:hover': { color: '#94a3b8' } }}>Contact</Link>
            </Stack>
          </Stack>
          
          {/* Social Links */}
          <Stack spacing={2} flex={1}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton 
                color="inherit" 
                aria-label="GitHub"
                sx={{ '&:hover': { color: '#94a3b8' } }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="LinkedIn"
                sx={{ '&:hover': { color: '#94a3b8' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="Twitter"
                sx={{ '&:hover': { color: '#94a3b8' } }}
              >
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        
        <Box 
          sx={{ 
            mt: 4, 
            pt: 2, 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} ReviewBot. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;