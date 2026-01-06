function Features() {
  return (
    <section
      id="features"
      className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful Features
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need for fast, secure, and real-time communication.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <FeatureCard
          title="Real-Time Messaging"
          description="Instant message delivery using Socket.io with low latency and high reliability."
        />

        <FeatureCard
          title="Online Status"
          description="See who is online in real time with socket-connected user presence."
        />

        <FeatureCard
          title="Responsive Design"
          description="Optimized for mobile, tablet, and desktop with WhatsApp-like UI behavior."
        />

        <FeatureCard
          title="Secure Authentication"
          description="User authentication with protected routes and encrypted credentials."
        />

        <FeatureCard
          title="Clean Chat UI"
          description="Modern and minimal chat interface focused on usability and clarity."
        />

        <FeatureCard
          title="Scalable Architecture"
          description="Built with MERN stack following clean and scalable component structure."
        />

      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default Features;
