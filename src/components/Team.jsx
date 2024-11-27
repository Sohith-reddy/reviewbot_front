import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import GradientBackground from './GradientBackground';

const teamMembers = [
  {
    id: 1,
    name: 'MS Charan',
    role: 'Project Lead',
    description: 'Expert in AI and machine learning with 8 years of experience.',
    image: '/assets/team/charan.jpg'
  },
  {
    id: 2,
    name: 'Sudheep Bhaskar',
    role: 'Senior Developer',
    description: 'Full-stack developer specialized in React and Node.js.',
    image: '/assets/team/sudheep.jpg'
  },
  {
    id: 3,
    name: 'Telukoti Vishal',
    role: 'UX Designer',
    description: 'Creating intuitive and beautiful user experiences.',
    image: '/assets/team/vishal.jpg'
  },
  {
    id: 4,
    name: 'B.R Sohith',
    role: 'Backend Engineer',
    description: 'Specialized in scalable architecture and API design.',
    image: '/assets/team/jagan.jpg'
  },
  {
    id: 5,
    name: 'Mantri Yeshwanth',
    role: 'Data Scientist',
    description: 'Expert in data analysis and machine learning models.',
    image: '/assests/team/yesh.jpg'
  },
  {
    id: 6,
    name: 'Sudhamsh Bootla',
    role: 'Frontend Developer',
    description: 'Passionate about creating responsive and accessible web applications.',
    image: '/assets/team/arjun.jpg'
  }
];

const Team = () => {
  return (
    <GradientBackground>
      <Box sx={{ pt: 20, pb: 8, px: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 5,
                  },
                }}
              >
                <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 120, height: 120 }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {member.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    color="primary"
                    sx={{ fontWeight: 'medium' }}
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </GradientBackground>
  );
};

export default Team;