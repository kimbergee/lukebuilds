import Image from "next/image";
import { Navigation } from "../components/nav";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-16">
      {/* <Navigation /> */}
      <div className="flex flex-col items-center">
        <div className="soon-box text-center">
          <p className="yellow-tag">Coming soon</p>
        </div>
        <Image
          src="/lightLogo.svg"
          width={150}
          height={150}
          alt="luke builds blocks logo"
          className="logo-blocks"
        />
        <p className="name-tag">luke builds</p>
        <div className="flex justify-center name">
          {/* <Image
            src="/lukeBuildsWhite.svg"
            width={500}
            height={500}
            alt="luke builds text logo"
            className="logo-text"
          /> */}
          {/* <Image
            src="/lightLogo.svg"
            width={80}
            height={80}
            alt="luke builds blocks logo"
            className="logo-blocks"
          /> */}
        </div>
        {/* <div className="flex">
          <Image
            src="/honeycomb-slate.svg"
            width={300}
            height={300}
            alt="luke honeycomb logo"
            className="logo-honeycomb"
          />
        </div> */}
      </div>
    </main>
  );
}
