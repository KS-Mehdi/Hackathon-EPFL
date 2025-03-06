import React from "react";
import { Shield, Lock, Users, Zap, CheckCircle, Globe, Building, Network } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">Secure Chat Verifier</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Connected to Hedera</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Mina Proof Ready</span>
                </span>
              </div>
              <Link
                to="/auth/signin"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Secure, Private, and Verifiable <br className="hidden md:block" />
                Communication Platform
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Experience the future of secure messaging where privacy meets blockchain verification.
                Protect your conversations with zero-knowledge proofs and decentralized trust.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/auth/signin"
                  className="inline-flex items-center px-8 py-3 border-2 border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Start Secure Chat
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center px-8 py-3 border-2 border-transparent bg-white rounded-md text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Secure Chat Verifier?</h3>
              <p className="text-xl text-gray-600">Cutting-edge security features powered by blockchain technology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Lock className="w-8 h-8 text-blue-500 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Privacy First</h4>
                </div>
                <p className="text-gray-600">
                  End-to-end encryption and zero-knowledge proofs ensure your messages and identity remain private.
                  Powered by Mina Protocol's zk-SNARKs technology.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-500 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Verifiable Trust</h4>
                </div>
                <p className="text-gray-600">
                  Hedera's decentralized ledger ensures participant legitimacy without compromising privacy.
                  Every message is verifiable and tamper-proof.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-500 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Lightning Fast</h4>
                </div>
                <p className="text-gray-600">
                  Optimized by Hylé infrastructure for instant message delivery and real-time verification.
                  Scalable for enterprise use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Perfect For Every Secure Communication Need</h3>
              <p className="text-xl text-gray-600">Trusted by organizations and communities worldwide</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Building className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Teams</h4>
                <p className="text-gray-600">Secure communication for sensitive business operations and R&D teams.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Globe className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">NGOs & Activists</h4>
                <p className="text-gray-600">Protected channels for sensitive communications and coordination.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Network className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">DAOs & Web3</h4>
                <p className="text-gray-600">Decentralized governance and community management with verified membership.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Private Communities</h4>
                <p className="text-gray-600">Exclusive groups with verified access and protected conversations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Backed by Leading Blockchain Technology</h3>
              <p className="text-xl text-gray-600">Built on proven and trusted platforms</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Mina Protocol</h4>
                <p className="text-gray-600">World's lightest blockchain for efficient zero-knowledge proofs</p>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Hedera Hashgraph</h4>
                <p className="text-gray-600">Enterprise-grade public network with fast finality</p>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Hylé Infrastructure</h4>
                <p className="text-gray-600">Optimized message delivery and blockchain integration</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience Secure Communication?</h3>
            <p className="text-xl text-blue-100 mb-8">Join thousands of users who trust Secure Chat Verifier</p>
            <Link
              to="/auth/signin"
              className="inline-flex items-center px-8 py-3 border-2 border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start Secure Chat Now
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Secure Chat Verifier</span>
              </div>
              <p className="text-sm">Privacy-first communication platform powered by blockchain technology</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Technology</h5>
              <ul className="space-y-2 text-sm">
                <li>Mina Protocol</li>
                <li>Hedera Hashgraph</li>
                <li>Hylé Infrastructure</li>
                <li>Zero-Knowledge Proofs</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 Secure Chat Verifier. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
