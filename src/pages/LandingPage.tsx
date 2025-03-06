import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">
                Secure Chat Verifier
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Connected to Hedera</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Mina Proof Ready</span>
                </span>
              </div>
              <div className="flex items-center space-x-4 ml-6">
                <Link
                  to="/auth/signin"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Secure, Private, and Verifiable Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decentralized messaging platform where privacy meets verifiability
            through blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Privacy First
            </h3>
            <p className="text-gray-600">
              Protect your identity and messages with zero-knowledge proofs
              powered by Mina Protocol.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Verifiable Trust
            </h3>
            <p className="text-gray-600">
              Ensure participant legitimacy through Hedera's decentralized
              ledger without compromising privacy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Seamless Experience
            </h3>
            <p className="text-gray-600">
              Enjoy fast and reliable messaging optimized by Hylé
              infrastructure.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            // add the user connection logic
            to="/auth/signin"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Secure Chat
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
