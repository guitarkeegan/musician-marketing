"use client";

import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);

    try {
        
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      if ((await res.json()).message === "We already have this email!"){
        setErrorMessage("We have this email already")
        setTimeout(() => {
            setErrorMessage("")
        }, 4000);
      } else {
        setResponseMessage("You've signed up to our mailing list!!")
        setTimeout(() => {
          setResponseMessage("")
          setEmail("")
        }, 4000);
      }
      
    } catch (error) {
        setErrorMessage("There was a problem signing up, we may have this email already")
        setTimeout(() => {
            setErrorMessage("")
        }, 4000);
        
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="ml-12 mt-[162px] text-lg text-thin">
        {responseMessage &&
        <p className="text-green-500">{responseMessage}</p>
        }
        {errorMessage &&
        <p className="text-red-600">{errorMessage}</p>
        }
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
