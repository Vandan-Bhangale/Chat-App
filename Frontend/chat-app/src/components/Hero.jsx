import image1 from "../assets/Image1.webp";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-dvh text-center">
        <div className="headline">
          <h1 className="text-5xl font-bold">Your new way to</h1>
          <h1 className=" mt-4 text-4xl font-bold bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Communicate</h1>
        </div>

        <div className="featureLine mt-6 opacity-50">
          <p>
            Stay connected with people with same interest anywhere in the world.
          </p>
          <p>Be free to speak in group chats.</p>
        </div>

        <button className="btn btn-warning mt-8 border rounded-2xl h-10 w-30 font-bold text-white">Get Started</button>

        <div className="HeroImg mt-8 inline-block p-0.75 rounded-xl bg-linear-to-r from-orange-500 via-yellow-500 to-red-500">
          <img src={image1} alt="Image" className="w-64 md:w-96 lg:w-125 border-none rounded-2xl"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
