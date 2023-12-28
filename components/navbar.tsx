import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="bg-transparent text-white py-[12px] ml-7">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="https://www.instadm.ai/">
          <div className="flex items-center">
            <Image
              alt="instaDM logo"
              width={48}
              height={51}
              src="/sz-logo.png"
              className="rounded-full mr-[4px]"
            />
            <p className="text-[25px] font-bold tracking-normal">InstaDM</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
