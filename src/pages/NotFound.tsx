import React from 'react';
    import { Link } from 'react-router-dom';

    export default function NotFound() {
      return (
        <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-6xl font-serif text-neutral-900 mb-4">404</h1>
          <p className="text-xl text-neutral-600 mb-8">This dimension does not exist.</p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
      );
    }