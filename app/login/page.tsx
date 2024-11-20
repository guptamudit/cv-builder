"use client";
import { signIn } from "next-auth/react";
import imag1 from "../fonts/resume-builder-image.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-gray-900 h-screen flex gap-0 p-9">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to Create Awesome Resume
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <button
              onClick={() => signIn("github")}
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image src={imag1} width={500} height={500} alt="Description" />;
      </div>
    </div>
  );
}
