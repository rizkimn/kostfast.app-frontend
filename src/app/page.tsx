import Image from "next/image";
import Link from "next/link";
import SearchInput from "@components/SearchInput";

import "@assets/style/home-style.css";

interface CardProps 
{
  // src : string,
  // name : string,
  // address : string,
  price : number,
  ratings : number,
}

function Card({price, ratings}: CardProps) : React.ReactElement
{
  function toCurrency(x: number) : string
  {
    let result = x.toString();
    if (x >= 1000000000) {
      result = parseFloat((x / 1000000000).toFixed(3)).toString().replace(/\.0$/, '') + "M";
    } else if (x >= 1000000) {
      result = parseFloat((x / 1000000).toFixed(3)).toString().replace(/\.0$/, '') + "jt";
    } else if (x > 1000) {
      result = parseFloat((x / 1000).toFixed(3)).toString().replace(/\.0$/, '') + "rb";
    }

    result = result.replace('.', ',');

    const currency = result.slice(-2);

    if (result.split(",")[1] === "000"+currency) {
      result = result.split(",")[0]+currency;
    }

    return "Rp" + result + "/bln";
  }

  return (
    <div className="card flex flex-col">
      <div className="card-image bg-neutral-100 mb-1 overflow-hidden flex items-center justify-center rounded-2xl">
        <Image 
          className="size-full object-cover"
          src={"/img/not-found.jpg"}
          alt="Image of Card"
          width={150}
          height={100}
        />
      </div>
      <div className="card-body">
        <h3 className="font-medium max-sm:text-sm">Nama Tempat</h3>
        <h4 className="max-sm:text-xs">Alamat</h4>
      </div>
      <div className="mt-6 max-sm:mt-3 card-more flex max-sm:flex-col-reverse items-center max-sm:items-start max-sm:text-sm justify-between">
        <span className="font-medium">{toCurrency(price)}</span>
        <span className="ratings flex items-center px-2 max-sm:px-0">
          {
            [...Array(Math.floor(ratings))].map((item, index) => {
              return (
                <svg key={index} className="max-sm:w-[12px]" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    className="fill-yellow-500"
                    d="M22 9.81a1 1 0 0 0-.83-.69l-5.7-.78-2.59-4.81a1 1 0 0 0-1.76 0L8.57 8.34l-5.7.78a1 1 0 0 0-.82.69 1 1 0 0 0 .28 1l4.09 3.73-1 5.24a1 1 0 0 0 1.46 1.12L12 18.38l5.12 2.52a1 1 0 0 0 .44.1 1 1 0 0 0 1-1.18l-1-5.24 4.09-3.73A1 1 0 0 0 22 9.81"
                  />
                </svg>
              )
            })
          }
          {
            [...Array(5-Math.floor(ratings))].map((item, index) => {
              return (
                <svg key={index} className="max-sm:w-[12px]" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    className="fill-none stroke-yellow-500"
                    d="M22 9.81a1 1 0 0 0-.83-.69l-5.7-.78-2.59-4.81a1 1 0 0 0-1.76 0L8.57 8.34l-5.7.78a1 1 0 0 0-.82.69 1 1 0 0 0 .28 1l4.09 3.73-1 5.24a1 1 0 0 0 1.46 1.12L12 18.38l5.12 2.52a1 1 0 0 0 .44.1 1 1 0 0 0 1-1.18l-1-5.24 4.09-3.73A1 1 0 0 0 22 9.81"
                  />
                </svg>
              )
            })
          }
        </span>
      </div>
    </div>
  );
}

export default function Home() : React.ReactElement {
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
  //       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  //         Get started by editing&nbsp;
  //         <code className="font-mono font-bold">src/app/page.tsx</code>
  //       </p>
  //       <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
  //         <a
  //           className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{" "}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className="dark:invert"
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
  //       <Image
  //         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>

  //     <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Docs{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Find in-depth information about Next.js features and API.
  //         </p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Learn{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Learn about Next.js in an interactive course with&nbsp;quizzes!
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Templates{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Explore starter templates for Next.js.
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Deploy{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // );
  const places = [1,2,3,4,5];
  return (
    <main>
      <section className="hero-section">
        <div className="hero-wrapper flex flex-col items-center justify-center">
          <SearchInput placeholder="Kosan dekat kampus" className="max-md:w-[80vw] w-[40vw] bg-white/60 border-2 border-white shadow-lg shadow-white/60 text-sm backdrop-blur-sm"/>
        </div>
      </section>
      <section className="max-md:px-6 px-28 py-24">
        <h2 className="text-xl font-semibold text-center mb-16">Rekomendasi Sekitar Sini!</h2>
        <div className="grid max-sm:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-6">
          {
            places.map((place, i) => {
              return <Card key={i} price={120000} ratings={3} />
            })
          }
        </div>
      </section>
      <section className="max-md:flex max-md:flex-col md:grid md:grid-cols-2 gap-2 py-20 mb-20">
        <div className="w-full h-[66vh] max-md:h-[36vh] rounded-r-[36px] max-md:rounded-r-full overflow-hidden bg-neutral-100">
          <Image
            className="size-full object-cover"
            src={"https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="section cover image"
            width={300}
            height={300}
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="text-[2.5rem] italic">Temukan kenyamanan <span className="text-sky block underline decoration-golden">tempat istirahat</span> terbaik yang tak pernah terlupakan.</h2>
          <Link href={"/maps"} className="w-max mt-6 flex items-center px-4 py-2 border-2 border-golden bg-white relative before:absolute before:top-0 before:left-0 before:z-[-1] before:size-full before:translate-x-[4px] hover:before:translate-x-[8px] before:translate-y-[4px] hover:before:translate-y-[8px] before:border-2 before:border-inherit before:transition-all">
            <span className="icon">
              <svg className="flex" width="24px" height="24px" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg">
                <path 
                  className="fill-sky"
                  d="M0.487 0.058c0.02 0.015 0.033 0.04 0.039 0.066a0.03 0.03 0 0 1 0.002 0.001l0.061 0.028a0.02 0.02 0 0 1 0.012 0.018v0.371a0.02 0.02 0 0 1 -0.025 0.019l-0.17 -0.048 -0.202 0.056a0.02 0.02 0 0 1 -0.011 0L0.014 0.517a0.02 0.02 0 0 1 -0.014 -0.019V0.12c0 -0.013 0.013 -0.023 0.026 -0.019l0.171 0.05 0.087 -0.027q0.002 -0.001 0.004 -0.001c0.003 -0.02 0.013 -0.039 0.028 -0.057 0.019 -0.022 0.051 -0.035 0.083 -0.036 0.033 -0.002 0.058 0.005 0.087 0.028M0.04 0.146v0.336l0.146 0.043V0.189zm0.246 0.018 -0.06 0.018v0.338l0.152 -0.042v-0.099c0 -0.011 0.009 -0.02 0.02 -0.02s0.02 0.009 0.02 0.02v0.095l0.142 0.04V0.184l-0.034 -0.016q-0.001 0.005 -0.002 0.01A0.183 0.183 0 0 1 0.492 0.242l-0.074 0.093a0.02 0.02 0 0 1 -0.032 -0.001l-0.069 -0.101q-0.017 -0.024 -0.024 -0.043a0.111 0.111 0 0 1 -0.006 -0.025m0.115 -0.095c-0.022 0.001 -0.044 0.01 -0.055 0.022 -0.013 0.015 -0.019 0.029 -0.02 0.043 -0.002 0.017 0 0.029 0.004 0.041 0.003 0.009 0.009 0.02 0.019 0.034l0.054 0.079 0.057 -0.072a0.144 0.144 0 0 0 0.025 -0.05c0.007 -0.025 -0.004 -0.062 -0.024 -0.078 -0.021 -0.016 -0.037 -0.021 -0.061 -0.02m0.004 0.021c0.033 0 0.06 0.027 0.06 0.059a0.06 0.06 0 0 1 -0.06 0.059c-0.033 0 -0.06 -0.027 -0.06 -0.059s0.027 -0.059 0.06 -0.059m0 0.04a0.02 0.02 0 0 0 -0.02 0.02c0 0.011 0.009 0.02 0.02 0.02a0.02 0.02 0 0 0 0.02 -0.02 0.02 0.02 0 0 0 -0.02 -0.02"
                />
              </svg>
            </span>
            <span className="text ml-2">Telusuri Peta</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
