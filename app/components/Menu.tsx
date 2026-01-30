"use client"

import Link from "next/link";
import { useState } from "react";
import "./Menu.css"


export default function Menu() {
    const [search, setSearch]= useState("");
    return (
        <div id="my-container">
            <div id="my-menu">
                <nav className=" bg-pink-400 w-full bg-transparent absolute top-0 left-0 z-20">
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">About</Link>
                    
                </nav>
            </div>
            <div id="my-input">
                <button>All Catrgoty</button>
                <input
                    className="ml-[15px] border-[5px]"
                    type="text"
                    value={search}
                    placeholder="Search products..."
                    onChange={(e)=>setSearch(e.target.value)}
                
                />
                <button>Search</button>
                <img
                    src="/shopping-cart.png"
                    height={30}
                    width={30}
                    alt="Card"
                
                />
                <p>Card</p>
            </div>
        </div>
    );
}