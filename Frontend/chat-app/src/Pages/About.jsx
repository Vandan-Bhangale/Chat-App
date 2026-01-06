function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Talkie
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-10 text-center">
          Talkie is a real-time chat application designed to deliver fast,
          secure, and seamless communication across devices. The application
          follows a mobile-first approach and focuses on clean UI, performance,
          and scalability.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3">
              Why This Project?
            </h3>
            <p className="text-gray-400">
              This project was built to gain hands-on experience with real-time
              systems, WebSockets, and responsive UI design used in modern chat
              applications.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3">
              Tech Stack
            </h3>
            <p className="text-gray-400">
              React, Tailwind CSS, Node.js, Express.js, MongoDB, Socket.io
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3">
              Key Learnings
            </h3>
            <p className="text-gray-400">
              Real-time data handling, state-driven UI, socket-based presence,
              and mobile-first responsive layouts.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3">
              Future Improvements
            </h3>
            <p className="text-gray-400">
              Message reactions, media sharing, typing indicators, and message
              read receipts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
