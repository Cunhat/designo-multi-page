import { useState } from "react";

export interface ItemProps {
  title: string;
  href: string;
}

const Item: React.FC<ItemProps> = ({ title, href }) => {
  return (
    <li>
      <a className="text-white" href={href}>
        {title}
      </a>
    </li>
  );
};

export const HamburgerMenu: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);
  return (
    <li className="flex items-center ml-auto md:hidden xl:hidden">
      <div>
        <img
          src="/img/icon-hamburger.svg"
          height="20"
          width="24"
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className="absolute top-[95px] left-0 w-full h-full bg-black bg-opacity-70">
            <ul className="py-12 px-6 flex flex-col gap-8 bg-black w-full">
              <Item title="Teste" href="/" />
              <Item title="Teste" href="/" />
              <Item title="Teste" href="/" />
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};
