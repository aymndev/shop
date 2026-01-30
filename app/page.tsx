

import { Bebas_Neue, Montserrat, Noto_Sans, Zalando_Sans_Expanded } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','700'], variable: '--font-montserrat' });
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto' });
const zalandoSans = Zalando_Sans_Expanded({ subsets: ['latin'], variable: '--font-zalando' });



export default function Home() {
  return (
    <div
  // import Menu from "../app/components/Menu";
      className="relative h-[600px] bg-cover bg-center"
      
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

        {/* CONTENT ON TOP */}
        <div className="relative z-10">
          <section className="h-[550px]  mr-[880px] flex items-center justify-center text-white">
            <h1 className="text-[#FFFFFF] text-6xl tracking-wide leading-relaxed uppercase">GET START YOUR FAVRIOT SHOPINF</h1>
          </section>
          <button className="  ml-[350px]  text-[#ffffff] rounded-[15px] border-0 -translate-y-[170px] bg-[#000000] px-[25px] py-[15px] rounded-md hover:bg-[#ffffff] hover:text-[#000000] ">BUY NOW</button>
        </div>
    </div>
  );
}
