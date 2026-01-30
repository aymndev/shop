"use client"

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./Menu.css"

export default function Menu() {
    const [search, setSearch] = useState("");
    const pathname = usePathname();
    const isHome = pathname === "/";

    // nav positioning differs on home (over hero) vs other pages
    const navClass = isHome
        ? "w-full bg-transparent absolute top-0 left-0 z-20"
        : "w-full bg-white fixed top-0 left-0 z-20 shadow-sm";

    return (
        <div id="my-container" className="bg-[#000000]">
            <div id="my-menu">
                <nav className={navClass}>
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">About</Link>
                </nav>
            </div>

            {/* Only show the search/input controls on the home page */}
            {isHome && (
                <div id="my-input">
                    <button>All Catrgoty</button>
                    <input
                        className="ml-[15px] !border-0"
                        type="text"
                        value={search}
                        placeholder="Search products..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>Search</button>
                    <img src="/shopping-cart.png" height={30} width={30} alt="Card" />
                    <p>Card</p>
                </div>
            )}
        </div>
    );
}