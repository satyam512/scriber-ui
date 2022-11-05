import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <nav className="bg-black h-16 flex items-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Image src="/logo.png" alt="logo" width={60} height={60} />
            <span className="text-2xl font-bold">scriber</span>
          </div>
        </div>
      </nav>
      <div className="flex-1 flex flex-col justify-center container mx-auto">
        <div className="grid grid-cols-2 place-items-center">
          <div>
            <h1 className="text-7xl font-extrabold tracking-tight">
              Bid adeu to all your{" "}
              <span className="text-white">Licensing hassles</span>
            </h1>
            <Link
              href="/auth"
              className="text-xl font-bold bg-dark py-3 px-6 mt-4 block w-max text-white"
            >
              Let&apos;s go!
            </Link>
          </div>
          <Image src="/hero.png" alt="hero" width={800} height={800} />
        </div>
      </div>
    </div>
  );
}
