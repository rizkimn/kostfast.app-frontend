import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() : React.ReactElement {
  return (
    <header className="w-full flex items-center justify-between py-3 max-sm:py-2 px-6 md:px-28 bg-white">
      <span className="logo">
        <Image 
          src={"/img/logo.png"}
          alt="Logo of KostFast.app"
          width={65}
          height={40}
          className="h-10 w-full"
        />
      </span>
      <nav className="cta-buttons flex items-center *:mx-1 text-sm">
        <Link href={"/maps"} className="flex items-center group px-3">
          <span className="icon overflow-hidden">
            <svg className="md:translate-x-6 md:group-hover:translate-x-0 transition-all" width="24px" height="24px" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg">
              <path 
                className="fill-golden"
                d="M0.487 0.058c0.02 0.015 0.033 0.04 0.039 0.066a0.03 0.03 0 0 1 0.002 0.001l0.061 0.028a0.02 0.02 0 0 1 0.012 0.018v0.371a0.02 0.02 0 0 1 -0.025 0.019l-0.17 -0.048 -0.202 0.056a0.02 0.02 0 0 1 -0.011 0L0.014 0.517a0.02 0.02 0 0 1 -0.014 -0.019V0.12c0 -0.013 0.013 -0.023 0.026 -0.019l0.171 0.05 0.087 -0.027q0.002 -0.001 0.004 -0.001c0.003 -0.02 0.013 -0.039 0.028 -0.057 0.019 -0.022 0.051 -0.035 0.083 -0.036 0.033 -0.002 0.058 0.005 0.087 0.028M0.04 0.146v0.336l0.146 0.043V0.189zm0.246 0.018 -0.06 0.018v0.338l0.152 -0.042v-0.099c0 -0.011 0.009 -0.02 0.02 -0.02s0.02 0.009 0.02 0.02v0.095l0.142 0.04V0.184l-0.034 -0.016q-0.001 0.005 -0.002 0.01A0.183 0.183 0 0 1 0.492 0.242l-0.074 0.093a0.02 0.02 0 0 1 -0.032 -0.001l-0.069 -0.101q-0.017 -0.024 -0.024 -0.043a0.111 0.111 0 0 1 -0.006 -0.025m0.115 -0.095c-0.022 0.001 -0.044 0.01 -0.055 0.022 -0.013 0.015 -0.019 0.029 -0.02 0.043 -0.002 0.017 0 0.029 0.004 0.041 0.003 0.009 0.009 0.02 0.019 0.034l0.054 0.079 0.057 -0.072a0.144 0.144 0 0 0 0.025 -0.05c0.007 -0.025 -0.004 -0.062 -0.024 -0.078 -0.021 -0.016 -0.037 -0.021 -0.061 -0.02m0.004 0.021c0.033 0 0.06 0.027 0.06 0.059a0.06 0.06 0 0 1 -0.06 0.059c-0.033 0 -0.06 -0.027 -0.06 -0.059s0.027 -0.059 0.06 -0.059m0 0.04a0.02 0.02 0 0 0 -0.02 0.02c0 0.011 0.009 0.02 0.02 0.02a0.02 0.02 0 0 0 0.02 -0.02 0.02 0.02 0 0 0 -0.02 -0.02"
              />
            </svg>
          </span>
          <span className="max-md:hidden text ml-2 underline">Buka Peta</span>
        </Link>
        <Link href={"/register"} className="flex items-center w-[86px] max-md:w-[34px] py-1 rounded border-2 border-sky text-sky font-medium overflow-hidden group">
        <div className="wrapper flex items-center w-[172px] md:group-hover:translate-x-[-50%] transition-all">
            <span className="max-md:hidden text flex items-center justify-center w-[86px]">Daftar</span>
            <span className="icon flex items-center justify-center w-[86px] max-md:w-[32px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path 
                  className={"stroke-sky"}
                  d="M3 4.5v14.993" 
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                />
                <path 
                  className={"stroke-sky"}
                  d="M21 9v10.5M6 1.5h7.5" 
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  className={"stroke-sky"}
                  d="M6 22.5h12" 
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                />
                <path 
                  className={"stroke-sky"}
                  d="M21 19.5c.008 1.498-1.5 3-3 3"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path transform="scale(-1 1)" 
                  className={"stroke-sky"}
                  d="M-3 19.5c0 1.5-1.5 3-3 3"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path transform="scale(-1)" 
                  className={"stroke-sky"}
                  d="M-3-4.498C-3-3-4.5-1.533-6-1.5"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  className={"stroke-sky"}
                  d="M20.992 9.007 13.5 1.5" 
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path transform="scale(-1 1)" 
                  className={"stroke-sky"}
                  d="M-13.5 6c-.005 1.492-1.506 3-3 3"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  className={"stroke-sky"}
                  d="M13.5 6V1.5m3 7.5H21" 
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  className={"stroke-sky"}
                  d="M6 19.5h4.5m-4.5-3h7.5m-7.5-3h4.5"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
        <Link href={"/login"} className="flex items-center w-[86px] max-md:w-[34px] py-1 rounded border-2 border-sky bg-sky text-white overflow-hidden group">
          <div className="wrapper flex items-center w-[172px] md:group-hover:translate-x-[-50%] transition-all">
            <span className="max-md:hidden text flex items-center justify-center w-[86px]">Masuk</span>
            <span className="icon flex items-center justify-center w-[86px] max-md:w-[32px]">
              <svg width="24px" height="24px" viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  className="stroke-white"
                  d="M0.42 0.12h0.105c0.092 0 0.09 0.12 0.09 0.24s0.002 0.24 -0.09 0.24H0.42m0.03 -0.24H0.09m0.36 0 -0.12 0.12m0.12 -0.12 -0.12 -0.12" 
                  strokeWidth="0.045" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
}