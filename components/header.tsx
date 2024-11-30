// import Image from "next/image";

// interface NavigationLink {
//   label: string;
//   isActive?: boolean;
// }

// export const Header: React.FC = () => {
//   const navigationLinks: NavigationLink[] = [
//     { label: "HOME", isActive: true },
//     { label: "EXPLORE" },
//     { label: "ABOUT" },
//     { label: "CONTACT" },
//   ];

//   return (
//     <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-20 py-1 w-full text-center bg-zinc-900 max-md:px-5 max-md:max-w-full">
//       {/* Logo Section */}
//       <div className="flex gap-4 justify-center items-center py-5 text-3xl font-semibold tracking-tight leading-none text-white">
//         <Image
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d0e470a7140b8270860b53b1a45e284e4ee863a61096d1a360ab7cab2fea71?placeholderIfAbsent=true&apiKey=6fa44ce921db4247b418bfc7505f2ef0"
//           alt=""
//           width={39}
//           height={39}
//           className="object-contain shrink-0 self-stretch my-auto aspect-[1.63] w-[39px]"
//         />
//         <div className="self-stretch my-auto">Safe Zone</div>
//       </div>

//       {/* Navigation Section */}
//       <div className="flex items-center text-base font-bold tracking-tight leading-none whitespace-nowrap text-neutral-400">
//         {navigationLinks.map((link, index) => (
//           <div
//             key={index}
//             className={`gap-2.5 self-stretch p-5 my-auto ${
//               link.isActive ? "text-white" : ""
//             }`}
//           >
//             {link.label}
//           </div>
//         ))}
//       </div>
//     </header>
//   );
// };

// export default Header;

import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";

interface NavigationLink {
  label: string;
  isActive?: boolean;
}

export const Header: React.FC = () => {
  const navigationLinks: NavigationLink[] = [
    { label: "HOME", isActive: true },
    { label: "EXPLORE" },
    { label: "ABOUT" },
    { label: "CONTACT" },
  ];

  return (
    <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-20 py-1 w-full text-center bg-secondary max-md:px-5 max-md:max-w-full h-[70px]">
      {/* Logo Section */}
      <div className="flex gap-4 justify-center items-center py-5 text-3xl font-semibold tracking-tight leading-none text-primary">
        <Image
          src="/logo.ico"
          alt=""
          width={39}
          height={39}
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.63] w-[39px]"
        />
        <div className="self-stretch my-auto">Safe Zone</div>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center text-base font-bold tracking-tight leading-none whitespace-nowrap text-muted-foreground">
        {navigationLinks.map((link, index) => (
          <div
            key={index}
            className={`gap-2.5 self-stretch p-5 my-auto ${
              link.isActive ? "text-primary" : ""
            }`}
          >
            {link.label}
          </div>
        ))}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
