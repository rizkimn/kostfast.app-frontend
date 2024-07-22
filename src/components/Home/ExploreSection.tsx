import Image from "next/image";
import Link from "next/link";

export default function ExploreSection() : React.ReactElement
{
  return (
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
        <Link href={"/peta"} className="w-max mt-6 flex items-center px-4 py-2 border-2 border-golden bg-white relative before:absolute before:top-0 before:left-0 before:z-[-1] before:size-full before:translate-x-[4px] hover:before:translate-x-[8px] before:translate-y-[4px] hover:before:translate-y-[8px] before:border-2 before:border-inherit before:transition-all">
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
  );
}