import Image from "next/image";
import { MoveRight, PhoneCall } from "lucide-react";
import { 
  ContainerStagger, 
  ContainerAnimated, 
  GalleryGrid, 
  GalleryGridCell 
} from "@/components/cta-section-with-gallery";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background font-sans dark:bg-background overflow-hidden relative selection:bg-primary selection:text-primary-foreground">
      <main className="w-full flex items-center justify-center min-h-screen relative px-6 py-24 sm:py-32 lg:px-8">
        {/* Dynamic Theme Glow effect (optional aesthetic) */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#E87F24] to-[#73A5CA] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl w-full">
          <ContainerStagger className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <ContainerAnimated>
                <div className="mb-6 inline-flex rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  Welcome to the Future of Learning
                </div>
              </ContainerAnimated>
              
              <ContainerAnimated>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
                  Transforming Education for the <span className="text-primary italic">Better</span>
                </h1>
              </ContainerAnimated>
              
              <ContainerAnimated>
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Empower your learning journey with our innovative platform. Collaborate, learn, and grow with world-class resources designed to help you succeed in a fast-paced digital world.
                </p>
              </ContainerAnimated>
              
              <ContainerAnimated className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Start Free Trial
                  <MoveRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href="#"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-secondary-foreground bg-secondary shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-inset ring-black/10 dark:ring-white/10"
                >
                  Contact Sales
                  <PhoneCall className="w-4 h-4 ml-1" />
                </a>
              </ContainerAnimated>
            </div>

            {/* Right Gallery */}
            <ContainerAnimated className="w-full flex justify-center lg:justify-end">
              <GalleryGrid className="w-full max-w-[500px]">
                <GalleryGridCell index={0}>
                  <Image
                    src="/hero1.png"
                    alt="Students collaborating"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-110"
                  />
                </GalleryGridCell>
                <GalleryGridCell index={1}>
                  <Image
                    src="/hero2.png"
                    alt="Coding hands"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-110"
                  />
                </GalleryGridCell>
                <GalleryGridCell index={2}>
                  <Image
                    src="/hero3.png"
                    alt="Modern classroom"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-110"
                  />
                </GalleryGridCell>
                <GalleryGridCell index={3}>
                  <Image
                    src="/hero4.png"
                    alt="Futuristic education"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-110"
                  />
                </GalleryGridCell>
              </GalleryGrid>
            </ContainerAnimated>

          </ContainerStagger>
        </div>
      </main>
    </div>
  );
}
