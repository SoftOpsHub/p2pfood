import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 overflow-hidden">
      {/* Enhanced Header with Navigation */}
      <header className={`transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white/80 backdrop-blur-sm'
        } border-b border-gray-200 sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="P2PFood Logo" className="h-12 w-12 rounded-full" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                P2PFood
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">How It Works</a>
              <a href="#download" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Download</a>
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-red-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-opacity">Get Started</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Animation */}
        <section className="relative overflow-hidden pt-16 sm:pt-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center py-16 sm:py-24">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up">
                Share Food,
                <br />
                <span className="bg-gradient-to-r from-red-600 via-orange-500 to-green-600 bg-clip-text text-transparent animate-gradient">
                  Build Community
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
                Connect with your neighbors to share homemade meals and reduce food waste.
                Join the P2P food revolution today!
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
                <DownloadButton
                  platform="Google Play"
                  icon={
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  }
                  href="https://play.google.com/store/apps/details?id=com.p2pfood&hl=en"
                  color="from-green-500 to-green-600"
                />

                <DownloadButton
                  platform="App Store"
                  icon={
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  }
                  href="https://apps.apple.com/pk/app/p2pfood/id6753209561"
                  color="from-gray-800 to-black"
                />
              </div>

              {/* Stats Section */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <StatCard number="🚀" label="Newly Launched" />
                <StatCard number="🌱" label="Growing Community" />
                <StatCard number="♻️" label="Mission: Reduce Food Waste" />
                <StatCard number="🏙️" label="Starting in 1 City" />
              </div>

            </div>
          </div>
        </section>
        {/* Key Features Section */}
        <section id="features" className="py-20 bg-white/50">

          <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  <span className="text-5xl">🍽️</span> Key Features
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everything you need to share, discover, and enjoy homemade meals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <KeyFeature
                  icon="🏠"
                  title="Share Your Homemade Dishes"
                  description="Share your homemade dishes with nearby neighbors"
                />
                <KeyFeature
                  icon="🔍"
                  title="Browse Local Meals"
                  description="Browse and order local home-cooked meals"
                />
                <KeyFeature
                  icon="👨‍🍳"
                  title="Kitchen Profile"
                  description="Set up your own kitchen profile and menu"
                />
                <KeyFeature
                  icon="💬"
                  title="Real-time Chat"
                  description="Real-time chat with food providers"
                />
                <KeyFeature
                  icon="⭐"
                  title="Ratings & Trust"
                  description="Rate dishes and build community trust"
                />
                <KeyFeature
                  icon="📍"
                  title="Location-Based Discovery"
                  description="Location-based discovery of nearby kitchens"
                />
                <KeyFeature
                  icon="📦"
                  title="Order Tracking"
                  description="Order tracking and delivery options"
                />
                <KeyFeature
                  icon="❤️"
                  title="Save Favorites"
                  description="Favorite dishes and kitchens"
                />
                <KeyFeature
                  icon="💳"
                  title="Secure Payments"
                  description="Secure payment processing"
                />
                <KeyFeature
                  icon="🎁"
                  title="Free Meal Sharing"
                  description="Home kitchens can offer free dishes to share kindness, reduce food waste, and support the community."
                />

              </div>
            </div>
          </section>
        </section>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose P2PFood?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of joining our food sharing community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              emoji="🤝"
              title="Peer to Peer"
              description="Connect directly with your neighbors to share delicious homemade food"
              borderColor="border-red-100"
              delay="0"
            />

            <FeatureCard
              emoji="♻️"
              title="Reduce Waste"
              description="Help reduce food waste while enjoying variety in your meals"
              borderColor="border-orange-100"
              delay="200"
            />

            <FeatureCard
              emoji="🌍"
              title="Build Community"
              description="Strengthen your local community through food sharing"
              borderColor="border-green-100"
              delay="400"
            />
          </div>
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Get started in 3 simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 transform -translate-y-1/2"></div>

              <StepCard
                step={1}
                title="Sign Up"
                description="Create your profile and set your food preferences"
                icon="📱"
              />

              <StepCard
                step={2}
                title="Browse & Connect"
                description="Find food shared by neighbors in your area"
                icon="🔍"
              />

              <StepCard
                step={3}
                title="Share & Enjoy"
                description="Pick up delicious homemade meals or share your own"
                icon="🍽️"
              />
            </div>
          </div>
        </section>

        {/* App Screenshots Section */}
        {/* <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">See P2PFood in Action</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our beautiful and intuitive interface
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AppScreenshot 
                title="Browse Meals"
                description="Discover delicious homemade meals shared by your neighbors"
                imagePath="src/assets/s1.jpg"
              />
              
              <AppScreenshot 
                title="Connect & Chat"
                description="Communicate directly with food providers in your area"
                imagePath="src/assets/s2.jpg"
              />
              
              <AppScreenshot 
                title="Share Your Food"
                description="Easily list your meals and reach your community"
                imagePath="src/assets/s3.jpg"
              />
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Built with Community in Mind
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                P2PFood is in its early stage, focused on building a safe, transparent,
                and meaningful food-sharing experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Early Access"
                role="Beta Phase"
                content="P2PFood is currently in early access. We’re actively improving the platform based on real user feedback."
                avatar="🧪"
              />

              <TestimonialCard
                name="Our Commitment"
                role="Core Values"
                content="We prioritize safety, trust, and transparency from day one."
                avatar="🛡️"
              />

              <TestimonialCard
                name="Our Mission"
                role="Why We Exist"
                content="Our mission is to reduce food waste and bring people together through shared meals."
                avatar="🌱"
              />
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section id="download" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-red-500 via-orange-400 to-green-500 p-1 rounded-3xl">
              <div className="bg-white rounded-3xl p-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Join the Food Revolution?</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Download the app today and start sharing delicious moments with your neighbors.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <DownloadButton
                    platform="Google Play"
                    icon={
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    }
                    href="https://play.google.com/store/apps/details?id=com.p2pfood&hl=en"
                    color="from-green-500 to-green-600"
                  />

                  <DownloadButton
                    platform="App Store"
                    icon={
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                    }
                    href="https://apps.apple.com/pk/app/p2pfood/id6753209561"
                    color="from-gray-800 to-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="P2PFood Logo" className="h-12 w-12 rounded-full" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
                  P2PFood
                </h1>
              </div>
              <p className="text-gray-400">
                Connecting communities through the joy of shared food.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">info@softopshub.com</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2026 P2PFood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components
interface DownloadButtonProps {
  platform: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

function DownloadButton({ platform, icon, href, color }: DownloadButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 px-8 py-4 bg-gradient-to-r ${color} hover:shadow-2xl text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto`}
    >
      {icon}
      <div className="text-left">
        <div className="text-xs uppercase tracking-wide opacity-90">GET IT ON</div>
        <div className="text-xl font-bold">{platform}</div>
      </div>
    </a>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center animate-fade-in-up">
      <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  borderColor: string;
  delay: string;
}

function FeatureCard({ emoji, title, description, borderColor, delay }: FeatureCardProps) {
  return (
    <div className={`animate-fade-in-up animation-delay-${delay} bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${borderColor}`}>
      <div className="text-6xl mb-6 animate-bounce-slow">{emoji}</div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: string;
}

function StepCard({ step, title, description, icon }: StepCardProps) {
  return (
    <div className="text-center relative animate-fade-in-up">
      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto relative z-10">
        {step}
      </div>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-5xl mb-4">{avatar}</div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-gray-500 text-sm">{role}</div>
      </div>
    </div>
  );
}

interface KeyFeatureProps {
  icon: string;
  title: string;
  description: string;
}

function KeyFeature({ icon, title, description }: KeyFeatureProps) {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}



export default App;