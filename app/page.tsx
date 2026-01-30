import Menu from "../app/components/Menu";


export default function Home() {
  return (
    <div
      className="relative h-[760px] bg-cover bg-center"
      
      style={{
        
        backgroundImage:`linear-gradient(
          rgba(0,0,0,0.4),
          rgba(0,0,0,0.4)
        ),
          url('/brunette-girl-green-fur-coat-old-hall-with-column-railings.jpg')`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* bg-black/50 = black with 50% opacity */}

      {/* MENU AND CONTENT ON TOP */}
      <div className="relative z-10">
        <Menu />

        <section className="h-screen flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome!</h1>
        </section>
      </div>
    </div>
  );
}
