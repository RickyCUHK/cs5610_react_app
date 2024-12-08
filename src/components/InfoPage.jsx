import React from 'react';

const TeamInfoPage = () => {
  return (
    <div className="p-8 bg-brand-primary min-h-screen text-white">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Team Information</h1>
        <p className="text-lg font-medium text-brand-secondary">Meet the amazing members and explore the resources!</p>
      </header>

      <section className="mb-12 bg-brand-secondary p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-brand-tertiary pb-2">Team Members</h2>
        <ul className="space-y-4">
          <li className="bg-white text-brand-primary py-4 px-6 rounded-md shadow-md font-semibold">
            Riqi Huang - SEC 04 Fall 2024 [SJO-2-TR] NUID: 002833357
          </li>
          <li className="bg-white text-brand-primary py-4 px-6 rounded-md shadow-md font-semibold">
            Zexi Chen - SEC 04 Fall 2024 [SJO-2-TR] NUID: 002844380
          </li>
        </ul>
      </section>

      <section className="bg-brand-tertiary p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">Useful Links</h2>
        <ul className="space-y-4">
          <li className="bg-white text-brand-tertiary py-4 px-6 rounded-md shadow-md font-semibold">
            <a
              href="https://github.com/RickyCUHK/cs5610_react_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:underline"
            >
              GitHub Repository for React.js
            </a>
          </li>
          <li className="bg-white text-brand-tertiary py-4 px-6 rounded-md shadow-md font-semibold">
            <a
              href="https://github.com/RickyCUHK/cs5610_backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:underline"
            >
              GitHub Repository for Node.js
            </a>
          </li>
        </ul>
      </section>

      <footer className="mt-12 text-center">
      <footer className="mt-12 text-center">
        <p className="text-sm text-brand-secondary mb-4">Crafted with care by the team.</p>
        <button
            onClick={() => window.history.back()}
            className="bg-brand-secondary text-white px-16 py-4 rounded-lg shadow-md hover:bg-brand-tertiary transition-colors text-lg font-bold"
        >
            Go Back
        </button>
        </footer>
      </footer>
    </div>
  );
};

export default TeamInfoPage;
