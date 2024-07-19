import React from "react";

import Image from "next/image";
import Link from "next/link";
import SearchInput from "@components/SearchInput";

export default function Footer () : React.ReactElement
{
  return (
    <footer className="w-full *:px-28 *:text-sm">
      <section className="py-16 grid grid-flow-col gap-16 border-t-2 border-neutral-500 border-dashed">
        <div className="flex flex-col">
          <SearchInput 
            placeholder="Cari tempat terdekat" 
            className="w-80 shadow-lg"
          />
          <div className="flex mt-6 items-center justify-between">
            <Image
              className="h-16 w-max"
              src={"/img/logo.png"}
              alt="Logo on footer"
              width={80}
              height={60}
            />
            <ul className="grid grid-cols-3 gap-6">
              <li className="instagram">
                <Link className="group" href={"https://instagram.com/rmn.zit"} target="blank">
                  <svg fill="#000000" width="32px" height="32px" viewBox="0 0 0.96 0.96" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                    <path
                      className="fill-neutral-500 group-hover:fill-fuchsia-600 transition-all"
                      d="M0.694 0.218a0.048 0.048 0 1 0 0.048 0.048 0.048 0.048 0 0 0 -0.048 -0.048m0.184 0.097a0.304 0.304 0 0 0 -0.018 -0.097 0.196 0.196 0 0 0 -0.046 -0.071 0.188 0.188 0 0 0 -0.071 -0.046 0.292 0.292 0 0 0 -0.097 -0.019C0.602 0.08 0.589 0.08 0.48 0.08s-0.122 0 -0.165 0.002a0.292 0.292 0 0 0 -0.097 0.019 0.192 0.192 0 0 0 -0.071 0.046 0.188 0.188 0 0 0 -0.046 0.071 0.292 0.292 0 0 0 -0.019 0.097C0.08 0.358 0.08 0.371 0.08 0.48s0 0.122 0.002 0.165a0.292 0.292 0 0 0 0.019 0.097 0.188 0.188 0 0 0 0.046 0.071 0.192 0.192 0 0 0 0.071 0.046 0.292 0.292 0 0 0 0.097 0.019C0.358 0.88 0.371 0.88 0.48 0.88s0.122 0 0.165 -0.002a0.292 0.292 0 0 0 0.097 -0.019 0.188 0.188 0 0 0 0.071 -0.046 0.194 0.194 0 0 0 0.046 -0.071 0.304 0.304 0 0 0 0.018 -0.097c0 -0.042 0.002 -0.056 0.002 -0.165s0 -0.122 -0.002 -0.165M0.806 0.64a0.224 0.224 0 0 1 -0.014 0.074 0.122 0.122 0 0 1 -0.03 0.046 0.128 0.128 0 0 1 -0.046 0.03 0.224 0.224 0 0 1 -0.074 0.014c-0.04 0.002 -0.055 0.002 -0.16 0.002s-0.12 0 -0.16 -0.002a0.228 0.228 0 0 1 -0.078 -0.012 0.132 0.132 0 0 1 -0.044 -0.03 0.12 0.12 0 0 1 -0.03 -0.046 0.22 0.22 0 0 1 -0.016 -0.076c0 -0.04 -0.002 -0.055 -0.002 -0.16s0 -0.12 0.002 -0.16a0.22 0.22 0 0 1 0.014 -0.076A0.12 0.12 0 0 1 0.2 0.2a0.124 0.124 0 0 1 0.044 -0.032A0.228 0.228 0 0 1 0.32 0.154c0.04 0 0.055 -0.002 0.16 -0.002s0.12 0 0.16 0.002a0.224 0.224 0 0 1 0.074 0.014 0.122 0.122 0 0 1 0.048 0.032 0.124 0.124 0 0 1 0.03 0.044 0.224 0.224 0 0 1 0.014 0.076c0.002 0.04 0.002 0.055 0.002 0.16s0 0.12 -0.002 0.16M0.48 0.275A0.205 0.205 0 1 0 0.686 0.48 0.205 0.205 0 0 0 0.48 0.275m0 0.338A0.133 0.133 0 1 1 0.613 0.48 0.133 0.133 0 0 1 0.48 0.613"
                    />
                  </svg>
                </Link>
              </li>
              <li className="facebook">
                <Link className="group" href={"https://instagram.com/rmn.zit"} target="blank">
                  <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="stroke-neutral-500 group-hover:stroke-blue-600 transition-all"
                      d="M22.667 2.667h-4a6.667 6.667 0 0 0 -6.667 6.667v4H8v5.333h4v10.667h5.333v-10.667h4l1.333 -5.333h-5.333V9.333a1.333 1.333 0 0 1 1.333 -1.333h4z" 
                      stroke="currentColor" 
                      strokeWidth="2.16" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li className="twitter">
                <Link className="group" href={"https://instagram.com/rmn.zit"} target="blank">
                  <svg width="32px" height="32px" viewBox="0 0 0.96 0.96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      className="stroke-neutral-500 group-hover:stroke-blue-400 transition-all"
                      d="m0.84 0.26 0.06 -0.12 -0.1 0.04c-0.24 -0.16 -0.327 0.04 -0.34 0.16C0.284 0.34 0.16 0.22 0.12 0.16c-0.128 0.24 0.06 0.44 0.2 0.52 -0.02 0.04 -0.28 0.08 -0.28 0.08 0.66 0.24 0.8 -0.26 0.8 -0.5" 
                      stroke="currentColor" 
                      strokeWidth="0.07" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h6 className="mb-3 font-semibold">Rekomendasi Pencarian</h6>
          <ul className="*:mb-3 *:hover:*:underline">
            <li>
              <Link href={"?q=dekat%20kampus"}>Dekat Kampus</Link>
            </li>
            <li>
              <Link href={"?q=lokasi%20terfavorit"}>Lokasi Terfavorit</Link>
            </li>
            <li>
              <Link href={"?q=tempat%20wisata"}>Tempat Wisata</Link>
            </li>
            <li>
              <Link href={"?q=tengah%20kota"}>Tengah Kota</Link>
            </li>
            <li>
              <Link href={"?q=harga%20termurah"}>Harga Termurah</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h6 className="mb-3 font-semibold">Dukungan</h6>
          <ul className="*:mb-3 *:hover:*:underline">
            <li>
              <Link href={"/bantuan"}>Bantuan Pengguna</Link>
            </li>
            <li>
              <Link href={"/kebijakan-privasi"}>Kebijakan Privasi</Link>
            </li>
            <li>
              <Link href={"/bantuan/pendaftaran-tempat"}>Daftarkan Tempatmu</Link>
            </li>
            <li>
              <Link href={"/bantuan/pemesanan"}>Pemesanan</Link>
            </li>
            <li>
              <Link href={"/join-partner"}>Partnership</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h6 className="mb-3 font-semibold">Layanan</h6>
          <ul className="*:mb-3 *:hover:*:underline">
            <li>
              <Link href={"/user"}>Perlu Tempat Beristirahat?</Link>
            </li>
            <li>
              <Link href={"/dashboard/owner"}>Memiliki Tempat Istirahat?</Link>
            </li>
            <li>
              <Link href={"/dashboard/third-party"}>Ingin Jadi Pihak Ketiga</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex items-center py-2 border-t-2 border-neutral-500 border-dotted">
        <span>Copyright <span>&copy;</span> 2024 KostFast.app - All right reserved.</span>
      </div>
    </footer>
  );
}