import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css'; // Assuming you store the CSS in Home.css
const Home = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  useEffect(() => {
    const worksLink = document.querySelector('.works');
    const howItWorksSection = document.getElementById('how-it-works');

    const toggleHowItWorks = (e) => {
      e.preventDefault();
      if (howItWorksSection.style.display === 'none' || howItWorksSection.style.display === '') {
        howItWorksSection.style.display = 'block';
      } else {
        howItWorksSection.style.display = 'none';
      }
    };

    const closeHowItWorks = (e) => {
      const isClickInside = howItWorksSection.contains(e.target) || worksLink.contains(e.target);
      if (!isClickInside && howItWorksSection.style.display === 'block') {
        howItWorksSection.style.display = 'none';
      }
    };

    worksLink.addEventListener('click', toggleHowItWorks);
    document.addEventListener('click', closeHowItWorks);

    return () => {
      worksLink.removeEventListener('click', toggleHowItWorks);
      document.removeEventListener('click', closeHowItWorks);
    };
  }, []);

  const handleNavigationWithAlert = (path) => {
    alert("Ready to roll? Log in to find or offer the perfect ride!"); // Show alert to user
    navigate(path); // Redirect to the login page
  };

  return (
    <div className="body">
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="#">CarpoolNow</a>
          </div>
          <ul className="nav-links">
            <li><a href="#" className="works">How It Works</a></li>
            <li><a href="#" onClick={() => handleNavigationWithAlert('/login')}>Find a Ride</a></li> {/* Show alert and navigate to login */}
            <li><a href="#" onClick={() => handleNavigationWithAlert('/login')}>Offer a Ride</a></li> {/* Show alert and navigate to login */}
            <li><a href="#" onClick={() => navigate('/login')}>Login</a></li>
            <li><a href="#" className="signup-btn" onClick={() => navigate('/login')}>Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <div id="how-it-works" style={{ display: 'none' }}>
        <h2>How It Works</h2>
        <p>Our carpooling platform connects drivers with passengers who share similar routes.</p>
        <p>To get started, sign up and search for a ride or offer your ride. It's that simple!</p>
      </div>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Find Your Perfect Carpool Ride</h1>
            <p>Save money, reduce your carbon footprint, and make new friends by sharing rides with others.</p>
            <button onClick={() => navigate('/login')} className="cta-button">Get Started</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-item">
            <img src="use.png" alt="Easy to Use" />
            <h2>Easy to Use</h2>
            <p>Quickly find and offer rides with our user-friendly platform.</p>
          </div>
          <div className="feature-item">
            <img src="encrypted (1).png" alt="Secure" />
            <h2>Secure</h2>
            <p>Your safety is our priority. Verified drivers and secure payment options.</p>
          </div>
          <div className="feature-item">
            <img src="flexibility (1).png" alt="Flexible" />
            <h2>Flexible</h2>
            <p>Choose from a variety of rides that fit your schedule and needs.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="about.html">About Us</a>
            <a href="contact.html">Contact</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-of-service.html">Terms of Service</a>
          </div>
          <div className="social-media">
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="instagram.png" alt="Instagram" /></a>
          </div>
          <p>&copy; 2024 CarpoolNow. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
