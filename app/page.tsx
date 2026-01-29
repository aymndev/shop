import Image from "next/image";
import Menu from "../app/components/Menu";
import "./page.css";

export default function Home() {
  return (
    <div id="container">
      <div className="hero">
        <Image
          src="/brunette-girl-green-fur-coat-old-hall-with-column-railings.jpg"
          alt="Model in green coat"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hero-content">
          <Menu />
          <h1 className="hero-title">Welcome to My Store</h1>
        </div>
      </div>
    </div>
  );
}
