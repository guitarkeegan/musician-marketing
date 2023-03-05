"use client";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function SignUpForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    
    
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="ml-12 mt-[162px] text-lg text-thin">
      <form onSubmit={handleSubmit} className="flex flex-row">
        <input
          className="md:w-[600px] bg-transparent text-white border-b-2 focus-within:cursor-text outline-0 cursor-pointer"
          placeholder="EMAIL ADDRESS"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
        <div className="text-6xl text-white -ml-10 hover:opacity-50">
          <button>
            <BsArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}
