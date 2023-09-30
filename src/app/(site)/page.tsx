import { HomeContent } from "@/components/home-content";
import { AnimateEnter } from "@/components/utils/animate-enter";

export default function Home() {
  return (
    <>
      <section className="w-full sm:h-full sm:min-h-[calc(100vh_-_85px)] flex text-center justify-center pt-20">
        <AnimateEnter className="flex flex-col items-center justify-center p-8">
          <HomeContent />
        </AnimateEnter>
      </section>
    </>
  );
}
