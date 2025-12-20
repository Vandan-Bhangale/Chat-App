import image1 from "../assets/Image1.webp";

function Hero() {
  return (
    <>
      <div className="container flex flex-col justify-center align-center h-dvh">
        <div className="headline text-center">
            <h1 className="text-red-500 text-4xl">Your new way to</h1>
            <h1>communicate</h1>
        </div>
        
        <div className="featureLine">
            <p>Stay connected with people with same interest anywhere in the world.</p>
            <p>Be free to speak in group chats.</p>
        </div>

        <button className="btn btn-warning">Get Started</button>

        <div className="HeroImg">
            <img src={image1} alt="Image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
