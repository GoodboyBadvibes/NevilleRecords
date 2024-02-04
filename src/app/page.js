import Image from "next/image";

export default function Home() {
  return (
    <>
       <main className="flex justify-between bg-black">
        <div>
          <Image src={'/nevillerecordslogo.png'} alt="logo" width={100} height={100}/>
        </div>
        <div>

        </div>
       </main>

    </>
  );
}
