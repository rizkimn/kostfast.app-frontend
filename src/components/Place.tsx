import Link from "next/link";
import Image from "next/image";

export interface PlaceProps
{
  imgSrc : string,
  name : string,
  slug : string,
  address : string,
  price : number,
  ratings : number,
  billingCycle : 'monthly' | 'annual',
}

export default function Place({name, imgSrc, address, price, ratings, billingCycle, slug}: PlaceProps) : React.ReactElement
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

    const cycle = billingCycle == "annual" ? "thn" : "bln";

    return "Rp" + result + "/" + cycle;
  }

  function slugToLink(slug: string) : string
  {
    return "/home/"+slug;
  }

  return (
    <div className="card flex flex-col max-w-[300px]">
      <Link href={slugToLink(slug)} className="card-image bg-neutral-100 mb-1 overflow-hidden flex items-center justify-center rounded-2xl">
        <Image 
          className="size-full object-cover aspect-[3/2]"
          src={imgSrc}
          alt={"Image of " + name}
          width={150}
          height={100}
        />
      </Link>
      <div className="card-body p-2 pt-0 rounded-xl hover:bg-neutral-100">
        <Link href={slugToLink(slug)}>
          <h3 className="font-medium max-sm:text-sm">{name}</h3>
          <h4 className="max-sm:text-xs">{address}</h4>
        </Link>
        <div className="mt-2 max-sm:mt-1 card-more flex max-sm:flex-col-reverse items-center max-sm:items-start max-sm:text-sm justify-between">
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
    </div>
  );
}