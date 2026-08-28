import Links from "./Links";

function Card() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-inter text-white">
      <main className="bg-[#1f1f1f] rounded-2xl w-full max-w-[350px] p-10 text-center">
        <img
          src="/avatar-jessica.jpeg "
          alt=""
          className="rounded-full mx-auto mb-4"
        />

        <h1 className="text-2xl font-bold mb-1">Jessica Randall</h1>
        <p className="mt-2 font-semibold text-[#c5f82a] text-sm mb-4">
          London, United Kingdom
        </p>
        <p className="text-sm mb-6">Front-end developer </p>

        <Links />
      </main>
    </div>
  );
}

export default Card;
