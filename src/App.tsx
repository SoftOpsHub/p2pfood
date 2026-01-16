import { useEffect, useState } from 'react';
import './App.css';

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
      <header className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      } border-b border-gray-200 sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img src="/src/assets/logo.png" alt="P2PFood Logo" className="h-12 w-12 rounded-full" />
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
                <StatCard number="10K+" label="Meals Shared" />
                <StatCard number="5K+" label="Happy Users" />
                <StatCard number="2.5T" label="Food Saved" />
                <StatCard number="50+" label="Cities" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white/50">
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
        </section>

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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Sarah M."
                role="Food Enthusiast"
                content="P2PFood changed how I eat! I've discovered amazing local dishes and made new friends."
                avatar="👩‍🍳"
              />
              
              <TestimonialCard 
                name="John D."
                role="Environmentalist"
                content="Reducing food waste has never been this delicious and community-driven!"
                avatar="👨‍🌾"
              />
              
              <TestimonialCard 
                name="Maria L."
                role="Home Cook"
                content="Sharing my cooking with neighbors brings me so much joy and appreciation."
                avatar="👩‍🍳"
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
                    href="https://www.apple.com/app-store/"
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
              <img src="/src/assets/logo.png" alt="P2PFood Logo" className="h-12 w-12 rounded-full" />
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">hello@p2pfood.com</p>
              <div className="flex gap-4 mt-4">
                <SocialIcon platform="twitter" />
                <SocialIcon platform="instagram" />
                <SocialIcon platform="facebook" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2026 P2PFood. All rights reserved. Made with ❤️ for food lovers everywhere.</p>
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

interface AppScreenshotProps {
  title: string;
  description: string;
  imagePath: string;
}

function AppScreenshot({ title, description, imagePath }: AppScreenshotProps) {
  return (
    <div className="group animate-fade-in-up">
      <div className="bg-gradient-to-br from-red-100 to-green-100 rounded-3xl p-2 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="aspect-[9/16] relative bg-gray-100 flex items-center justify-center">
            <img 
              src={imagePath} 
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-gray-400">
                      <svg class="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      <p class="text-sm">Add your app screenshot here</p>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface SocialIconProps {
  platform: 'twitter' | 'instagram' | 'facebook';
}

function SocialIcon({ platform }: SocialIconProps) {
  const icons = {
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    facebook: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  };

  return (
    <a href="#" className="text-gray-400 hover:text-white transition-colors">
      {icons[platform]}
    </a>
  );
}

export default App;