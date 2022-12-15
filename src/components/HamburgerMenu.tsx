import { useState } from "react";

export interface ItemProps {
  title: string;
  href: string;
}

const Item: React.FC<ItemProps> = ({ title, href }) => {
  return (
    <li>
      <a
        className="text-white font-regular text-2xl tracking-wide "
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export const HamburgerMenu: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    const scroll = open;
    setOpen(!scroll);
    document.body.style.overflow = scroll ? "unset" : "hidden";
  };

  return (
    <li className="flex items-center ml-auto md:hidden xl:hidden">
      <div>
        <img
          src="/img/icon-hamburger.svg"
          height="20"
          width="24"
          className="cursor-pointer"
          onClick={() => openMenu()}
        />
        {open && (
          <div className="absolute top-[95px] left-0 w-full h-full bg-black bg-opacity-70">
            <ul className="py-12 px-6 flex flex-col gap-8 bg-black w-full">
              <Item title="OUR COMPANY" href="/" />
              <Item title="LOCATIONS" href="/" />
              <Item title="CONTACT" href="/" />
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};
