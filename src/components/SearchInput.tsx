'use client';

interface SearchInputProps {
  className? : string,
  placeholder : string,
}

export default function SearchInput({className, placeholder} : SearchInputProps) : React.ReactElement
{
  const handleSubmit = (e: any): void => {
    const inputForm = e.target.querySelector("input[name=q]");

    if(!inputForm.value) {
      e.preventDefault();
      inputForm.value = placeholder;
      e.target.submit();
    }
  }

  return (
    <form action="" method="get" onSubmit={handleSubmit}>
      <div className={"flex items-center px-3 py-2 overflow-hidden rounded-full " + className}>
        <span className="icon">
          <svg className="fill-neutral-800" width="24px" height="24px" viewBox="0 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0.651 0.609 0.54 0.498A0.27 0.27 0 1 0 0.498 0.54l0.11 0.11a0.03 0.03 0 0 0 0.043 0 0.03 0.03 0 0 0 0 -0.042M0.33 0.54a0.21 0.21 0 1 1 0.21 -0.21 0.21 0.21 0 0 1 -0.21 0.21"
            />
          </svg>
        </span>
        <input name="q" type="text" className="ml-2 w-full outline-none bg-transparent" placeholder={placeholder} />
      </div>
    </form>
  );
}