import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  // Animation styles for fade-in and slide-up effect
  const animationStyle = {
    animation: 'fadeInUp 1s ease-out forwards',
    opacity: 0,
    '@keyframes fadeInUp': {
      '0%': { transform: 'translateY(30px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        padding: '3rem 0',
      }}
    >
      {/* Main Content Container */}
      <Container maxWidth="lg">
        {/* Welcome Hero Section */}
        <Box
          sx={{
            ...animationStyle,
            textAlign: 'center',
            marginBottom: '4rem',
            padding: '3rem 2rem',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              marginBottom: '1.5rem',
              fontSize: isSmallScreen ? '2.5rem' : 'clamp(2.5rem, 6vw, 3.5rem)',
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Employee Management Hub
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '2.5rem',
              fontSize: isSmallScreen ? '1.1rem' : 'clamp(1.1rem, 3vw, 1.4rem)',
              color: '#555',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Streamline your workforce management with our comprehensive, modern solution
          </Typography>
          <Button
            component={Link}
            to="/dashboard"
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              color: 'white',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(30, 60, 114, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a3460, #24477a)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(30, 60, 114, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Launch Dashboard
          </Button>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                ...animationStyle,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                borderRadius: 3,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent sx={{ padding: '2rem' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    color: '#1e3c72',
                    fontSize: '1.4rem',
                  }}
                >
                  👥 Employee Management
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: '2rem',
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  Comprehensive employee profiles with advanced search, filtering, and real-time updates.
                </Typography>
                <Button
                  component={Link}
                  to="/employees"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
                    color: 'white',
                    borderRadius: 2,
                    padding: '0.8rem 1.5rem',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1a3460, #24477a)',
                    },
                  }}
                >
                  Explore Employees
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                ...animationStyle,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                borderRadius: 3,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent sx={{ padding: '2rem' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    color: '#1e3c72',
                    fontSize: '1.4rem',
                  }}
                >
                  🏢 Department Control
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: '2rem',
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  Organize departments efficiently with hierarchical structure and team insights.
                </Typography>
                <Button
                  component={Link}
                  to="/departments"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
                    color: 'white',
                    borderRadius: 2,
                    padding: '0.8rem 1.5rem',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1a3460, #24477a)',
                    },
                  }}
                >
                  Manage Departments
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                ...animationStyle,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                borderRadius: 3,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent sx={{ padding: '2rem' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    color: '#1e3c72',
                    fontSize: '1.4rem',
                  }}
                >
                  📊 Analytics Dashboard
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: '2rem',
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  Powerful analytics with interactive charts and workforce insights.
                </Typography>
                <Button
                  component={Link}
                  to="/dashboard"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
                    color: 'white',
                    borderRadius: 2,
                    padding: '0.8rem 1.5rem',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1a3460, #24477a)',
                    },
                  }}
                >
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Benefits Section */}
        <Box
          sx={{
            ...animationStyle,
            marginTop: '5rem',
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: '2rem',
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Choose Our Platform? 🚀
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '900px',
              margin: '0 auto',
              fontSize: '1.1rem',
              color: '#666',
              lineHeight: 1.8,
            }}
          >
            Built with modern technologies and user experience in mind. Our Employee Management Hub provides intuitive interfaces, real-time data
            synchronization, and powerful analytics to help you make informed decisions about your workforce.
          </Typography>
        </Box>

        <Box
          sx={{
            ...animationStyle,
            marginTop: '3rem',
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: '2rem',
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            📚 Documentation & Support
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '900px',
              margin: '0 auto 2.5rem auto',
              fontSize: '1.1rem',
              color: '#666',
              lineHeight: 1.8,
            }}
          >
            Access comprehensive documentation, API references, and implementation guides. Get started quickly with our detailed setup instructions and best
            practices.
          </Typography>
          <Button
            href="https://github.com/S-Sharvesh/Employee-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              color: 'white',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(30, 60, 114, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a3460, #24477a)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(30, 60, 114, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            📖 View Documentation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
