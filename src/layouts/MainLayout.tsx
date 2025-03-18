import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`py-4 bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <Container>
          <Header />
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform transition-transform md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="font-bold text-lg text-primary">Menu</div>
          <button
            className="p-2 text-gray-700 focus:outline-none rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="block p-3 rounded-lg text-primary font-medium hover:bg-gray-50"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="block p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/community"
                className="block p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="block p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                Pricing
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t flex flex-col space-y-3">
            <Button variant="outline" size="medium">
              Login
            </Button>
            <Button variant="primary" size="medium">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-16 pb-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a href="/" className="inline-block mb-6">
                <span className="text-white font-bold text-2xl">Nexcent</span>
              </a>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Copyright © Nexcent ltd.
                <br />
                All rights reserved
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.2,5.8c-0.8,0.4-1.7,0.6-2.6,0.7c0.9-0.6,1.6-1.5,2-2.5c-0.9,0.5-1.8,0.9-2.9,1.1c-0.8-0.9-2-1.4-3.3-1.4c-2.5,0-4.5,2-4.5,4.5c0,0.4,0,0.7,0.1,1C7.5,9,4.2,7.3,2,4.6C1.5,5.3,1.2,6.1,1.2,7c0,1.6,0.8,2.9,2,3.8c-0.7,0-1.4-0.2-2-0.6c0,0,0,0,0,0.1c0,2.2,1.6,4,3.6,4.4c-0.4,0.1-0.8,0.2-1.2,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,1.8,2.2,3.1,4.1,3.1c-1.5,1.2-3.4,1.9-5.5,1.9c-0.4,0-0.7,0-1.1-0.1c2,1.3,4.3,2,6.8,2c8.1,0,12.6-6.7,12.6-12.6c0-0.2,0-0.4,0-0.6C20.8,7.5,21.6,6.7,22.2,5.8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h9.6v-7.7h-2.6v-3h2.6V9.4c0-2.6,1.6-4,3.9-4c1.1,0,2.1,0.1,2.3,0.1v2.7h-1.6c-1.3,0-1.5,0.6-1.5,1.5v1.9h3l-0.4,3h-2.6V22h5.1c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.9c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.9,0.1s-3.6,0-4.9-0.1c-1.2-0.1-1.8-0.2-2.2-0.4c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.9s0-3.6,0.1-4.9c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,12,2.2M12,0C8.7,0,8.3,0,7.1,0.1c-1.3,0.1-2.2,0.3-3,0.6C3.4,1,2.7,1.4,2,2.1C1.3,2.8,1,3.4,0.6,4.1c-0.3,0.8-0.5,1.7-0.6,3C0,8.3,0,8.7,0,12s0,3.7,0.1,4.9c0.1,1.3,0.3,2.2,0.6,3C1,20.6,1.4,21.3,2.1,22c0.7,0.7,1.3,1,2,1.4c0.8,0.3,1.7,0.5,3,0.6C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c1.3-0.1,2.2-0.3,3-0.6c0.7-0.3,1.4-0.7,2.1-1.4c0.7-0.7,1-1.3,1.4-2c0.3-0.8,0.5-1.7,0.6-3C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9c-0.1-1.3-0.3-2.2-0.6-3c-0.3-0.7-0.7-1.4-1.4-2.1c-0.7-0.7-1.3-1-2-1.4c-0.8-0.3-1.7-0.5-3-0.6C15.7,0,15.3,0,12,0L12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z M18.4,4.2c-0.8,0-1.4,0.6-1.4,1.4S17.6,7,18.4,7c0.8,0,1.4-0.6,1.4-1.4S19.2,4.2,18.4,4.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.2,0H1.8C0.8,0,0,0.8,0,1.8v20.4c0,1,0.8,1.8,1.8,1.8h20.4c1,0,1.8-0.8,1.8-1.8V1.8C24,0.8,23.2,0,22.2,0z M7.2,20.4H3.6V9h3.6V20.4z M5.4,7.6c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1C7.5,6.6,6.5,7.6,5.4,7.6z M20.4,20.4h-3.6v-5.6c0-1.3,0-3-1.9-3c-1.9,0-2.1,1.4-2.1,2.9v5.7H9.4V9h3.4v1.6h0c0.5-0.9,1.6-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5L20.4,20.4L20.4,20.4z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/help-center"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/legal"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/status"
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Stay up to date</h3>
              <div className="mt-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 text-white px-4 py-2 rounded-l-lg focus:outline-none flex-grow"
                  />
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default MainLayout;
