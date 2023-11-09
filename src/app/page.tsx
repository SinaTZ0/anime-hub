import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-dark-blue bg-[url('/images/s1rs2.webp')] bg-cover bg-bottom bg-no-repeat">
      <div id="Title" className="p-5">
        <p className="text-right text-6xl leading-normal text-slate-50">
          سلام به
        </p>
        <p className="text-right text-6xl font-bold leading-normal text-red-400">
          انیمه هاب
        </p>
        <p className="text-right text-6xl leading-normal text-slate-50">
          خوش آمدید
        </p>
      </div>
      <div id="BButton" className="ml-[20vw] mt-[10vh]">
        <Button
          variant="outline"
          className="rounded-full border-2 bg-transparent px-10 py-7 text-2xl text-slate-100 focus:bg-transparent focus:text-slate-100 active:bg-amber-400"
        >
          ورود
        </Button>
      </div>
    </div>
  );
}
