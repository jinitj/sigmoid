import SparklesPreview from "../../../components/sparkles-demo";
import { Button } from "../../components/ui/button";
import ServicesFeatures from "../../../components/services-features";

export default function V2Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Sparkles */}
      <section className="relative">
        <SparklesPreview />
        <div className="absolute top-0 left-0 right-0 z-30 p-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">Sigmoid</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-indigo-400 transition-colors">Services</a>
              <a href="#work" className="text-white hover:text-indigo-400 transition-colors">Our Work</a>
              <a href="#about" className="text-white hover:text-indigo-400 transition-colors">About</a>
              <a href="#pricing" className="text-white hover:text-indigo-400 transition-colors">Pricing</a>
              <a href="#contact" className="text-white hover:text-indigo-400 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="text-white text-sm">+91 98765 43210</span>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Free Strategy Call</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Full-Stack Digital Marketing Agency for Tech Startups & Scale-Ups
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategy-first, performance-driven marketing that scales your business from startup to industry leader
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-3 px-8">Book Free Consultation</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-3 px-8">View Our Work</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Sigmoid Section */}
      <section className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Why Choose Sigmoid?</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            We&apos;re not just another agency. We&apos;re your growth partners with a proven track record.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tech-First Approach</h3>
              <p className="text-gray-400">Deep understanding of SaaS, fintech, and emerging tech markets</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-gray-400">Average 340% increase in qualified leads within 6 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full-Stack Team</h3>
              <p className="text-gray-400">Strategists, designers, developers, and growth experts under one roof</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Startup Speed</h3>
              <p className="text-gray-400">Agile methodology with enterprise-quality deliverables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Our Services</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for tech companies and startups
          </p>
          <ServicesFeatures />
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Founder</h2>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-2xl font-bold text-white">Rahul Sharma</h3>
                <p className="text-xl text-indigo-400">Founder & Chief Growth Officer</p>
                <p className="text-lg leading-relaxed">
                  With over 12 years of experience scaling tech companies from seed to Series C, Rahul has worked with industry leaders including Flipkart, Paytm, and Byju&apos;s. He holds an MBA from IIM Bangalore and has personally driven over $50M in revenue growth for startups.
                </p>
                <p className="text-lg leading-relaxed">
                  Previously Head of Growth at a Y Combinator-backed fintech startup, Rahul understands the unique challenges of scaling in competitive markets. His data-driven approach has helped 200+ startups achieve sustainable growth.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm">Ex-Flipkart</span>
                  <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm">IIM Bangalore</span>
                  <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm">Y Combinator</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">Founder Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AK</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Amit Kumar</h4>
                  <p className="text-gray-400">CEO, TechFlow</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                &ldquo;Sigmoid transformed our marketing completely. We went from 50 leads/month to 500+ qualified leads in just 4 months. Their understanding of SaaS marketing is exceptional.&rdquo;
              </p>
              <div className="text-emerald-400 font-bold">340% increase in qualified leads</div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">PS</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Priya Singh</h4>
                  <p className="text-gray-400">CMO, FinanceAI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                &ldquo;The team&apos;s strategic approach and execution speed is unmatched. They helped us achieve product-market fit faster than we ever imagined possible.&rdquo;
              </p>
              <div className="text-emerald-400 font-bold">$2.8M ARR in 18 months</div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">VG</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Vikram Gupta</h4>
                  <p className="text-gray-400">Founder, EduTech Pro</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                &ldquo;From brand positioning to performance marketing, Sigmoid handled everything. Our customer acquisition cost dropped by 60% while conversion rates doubled.&rdquo;
              </p>
              <div className="text-emerald-400 font-bold">60% reduction in CAC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">Case Studies</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Real results from real partnerships. See how we&apos;ve helped startups scale successfully.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enhanced case studies with more detail */}
            <div className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-black border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">TechFlow SaaS</h3>
                  <p className="text-white/80 mb-3 max-w-xs">B2B project management platform scaling from startup to market leader</p>
                  <div className="flex items-center space-x-2 text-xs text-white/70">
                    <span className="px-2 py-1 bg-white/20 rounded-full">Lead Gen</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">Content Marketing</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">Performance Ads</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-white">
                    <p className="font-medium">Challenge: Low lead quality, high CAC</p>
                    <p>Result: 340% increase in qualified leads, 45% reduction in CAC</p>
                    <p className="mt-1 text-indigo-300 underline underline-offset-2">View full case study →</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-black border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">FinanceAI</h3>
                  <p className="text-white/80 mb-3 max-w-xs">AI-powered personal finance app achieving product-market fit</p>
                  <div className="flex items-center space-x-2 text-xs text-white/70">
                    <span className="px-2 py-1 bg-white/20 rounded-full">Product Marketing</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">User Acquisition</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">Brand Strategy</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-white">
                    <p className="font-medium">Challenge: Low user retention, unclear positioning</p>
                    <p>Result: $2.8M ARR, 75% improvement in user retention</p>
                    <p className="mt-1 text-blue-300 underline underline-offset-2">View full case study →</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-black border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">EduTech Pro</h3>
                  <p className="text-white/80 mb-3 max-w-xs">Online learning platform scaling across India&apos;s tier-2 cities</p>
                  <div className="flex items-center space-x-2 text-xs text-white/70">
                    <span className="px-2 py-1 bg-white/20 rounded-full">Regional Marketing</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">Community Building</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">Conversion Optimization</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-white">
                    <p className="font-medium">Challenge: High CAC in competitive market</p>
                    <p>Result: 60% reduction in CAC, doubled conversion rates</p>
                    <p className="mt-1 text-pink-300 underline underline-offset-2">View full case study →</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-black border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">HealthTech Solutions</h3>
                  <p className="text-white/80 mb-3 max-w-xs">Digital health platform connecting patients with specialists</p>
                  <div className="flex items-center space-x-2 text-xs text-white/70">
                    <span className="px-2 py-1 bg-white/20 rounded-full">Trust Building</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">User Education</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">Retention Marketing</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-white">
                    <p className="font-medium">Challenge: Building trust in sensitive healthcare market</p>
                    <p>Result: 200% increase in user engagement, 85% retention rate</p>
                    <p className="mt-1 text-green-300 underline underline-offset-2">View full case study →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Startup?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 200+ startups that have transformed their growth with Sigmoid&apos;s data-driven marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-4 px-8">Start Your Growth Journey</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-4 px-8">Schedule Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Sigmoid</h3>
              <p className="text-gray-400">
                Full-stack digital marketing agency helping tech startups scale from seed to Series C.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Growth Marketing</li>
                <li>Brand Strategy</li>
                <li>Performance Ads</li>
                <li>Content Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Case Studies</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>hello@sigmoid.studio</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sigmoid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 