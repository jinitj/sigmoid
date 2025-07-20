import { Button } from "../../components/ui/button";
import { SparklesCore } from "../../../components/ui/sparkles";

export default function MinimalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-4xl">
            Sigmoid
          </div>
        </div>
      </header>

      {/* Philosophy Section with Background Collage */}
      <section className="relative px-6 py-32 text-center overflow-hidden mb-20">
        {/* Background Collage - Larger & Neater */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="flex animate-scroll opacity-40">
            {/* First set */}
            <div className="flex gap-8 min-w-full items-center justify-center py-8">
              {/* India Ad 1 - Video */}
              <div className="w-64 h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/IndiaAd1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* India Ad 2 - Image */}
              <div className="w-56 h-84 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd2.jpeg" 
                  alt="India Advertising Campaign 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* India Ad 3 - Image */}
              <div className="w-72 h-108 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd3.png" 
                  alt="India Advertising Campaign 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* India Ad 4 - Image */}
              <div className="w-60 h-90 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd4.png" 
                  alt="India Advertising Campaign 4" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Repeat for more frames */}
              <div className="w-68 h-102 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd2.jpeg" 
                  alt="India Advertising Campaign 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-64 h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd3.png" 
                  alt="India Advertising Campaign 3" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 min-w-full items-center justify-center py-8">
              {/* India Ad 1 - Video */}
              <div className="w-64 h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/IndiaAd1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* India Ad 2 - Image */}
              <div className="w-56 h-84 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd2.jpeg" 
                  alt="India Advertising Campaign 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* India Ad 3 - Image */}
              <div className="w-72 h-108 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd3.png" 
                  alt="India Advertising Campaign 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* India Ad 4 - Image */}
              <div className="w-60 h-90 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd4.png" 
                  alt="India Advertising Campaign 4" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Repeat for more frames */}
              <div className="w-68 h-102 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd2.jpeg" 
                  alt="India Advertising Campaign 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-64 h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src="/IndiaAd3.png" 
                  alt="India Advertising Campaign 3" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-xl leading-relaxed">
              if you&apos;re building something that matters, we want to help you tell that story.
              <br />
              come, tell us about what you&apos;re building and we will ask you:
            </p>
            
            <h2 className="text-3xl md:text-5xl font-light italic text-white leading-tight">
              &ldquo;why restrict the creative you?&rdquo;
            </h2>
          </div>
          
          <Button 
            variant="outline" 
            className="bg-white text-black border-white text-lg py-6 px-12 rounded-full hover:bg-gray-100 mt-12"
          >
            Let's Talk
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              lets build something 
              <br />
              <span className="italic">extraordinary.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              comprehensive growth marketing solutions for ambitious companies
            </p>
            
            <Button 
              variant="outline" 
              className="bg-white text-black border-white text-lg py-6 px-12 rounded-full hover:bg-gray-100"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-left">
              <h2 className="text-2xl font-light mb-6">growth marketing</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                from strategy to execution, we scale your startup through data-driven campaigns, 
                performance marketing, and conversion optimization. this includes paid ads, 
                organic growth, and retention strategies, all designed for maximum impact.
              </p>
            </div>
            
            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-left">
              <h2 className="text-2xl font-light mb-6">brand at scale</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                for startups looking to build recognition fast. our brand engines 
                deliver high-impact, consistent messaging for tech companies, with end-to-
                end brand strategy, visual identity, and market positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Examples Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                we don&apos;t just run campaigns. we think about your entire growth engine.
                <br /><br />
                from the moment someone discovers your brand to the point they become 
                a loyal customer, we optimize every touchpoint.
              </p>
              <p className="text-gray-500 text-sm italic">
                → showcasing our creative approach
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/videdo1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">creative vision in motion</p>
                <p className="text-gray-500 text-xs">our storytelling approach</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-black rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/smallBig2.webp" 
                  alt="Small Big Visual" 
                  className="w-full h-full object-cover object-bottom-left"
                />
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-gray-400 text-lg leading-relaxed">
                every startup is different. that&apos;s why we don&apos;t believe in one-size-fits-all solutions.
                <br /><br />
                we take the time to understand your unique challenges, market position, 
                and growth goals before crafting a strategy that actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Portfolio */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-lg">
              → presenting to you our creative vision. a series of emotional expressions 
              <br />
              <span className="italic">through visual storytelling.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-black rounded-2xl overflow-hidden shadow-lg">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/IndiaAd1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-400 text-sm">cultural storytelling</p>
              <p className="text-gray-300 text-xs">emotional brand connection</p>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-black rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/IndiaAd2.jpeg" 
                  alt="India Advertising Campaign 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 text-sm">visual narrative</p>
              <p className="text-gray-300 text-xs">brand expression</p>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-black rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/IndiaAd3.png" 
                  alt="India Advertising Campaign 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 text-sm">creative direction</p>
              <p className="text-gray-300 text-xs">strategic storytelling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-light text-gray-400 mb-8">ready to be our first success story?</h2>
          
          <p className="text-gray-500 text-sm mb-12 max-w-2xl mx-auto">
            we&apos;re building something extraordinary and looking for ambitious founders 
            who want to be part of our journey from the beginning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
            <div className="w-48 h-20 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">your startup here</span>
            </div>
            <div className="w-48 h-20 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">your brand here</span>
            </div>
            <div className="w-48 h-20 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">your company here</span>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-500 text-xs italic">
              these aren&apos;t development mistakes — they&apos;re placeholders for our next clients. let&apos;s grow together.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-2xl font-light">sigmoid is now a growth-native agency.</h2>
          
          <div className="space-y-8 text-left max-w-3xl mx-auto">
            <p className="text-gray-400 text-lg leading-relaxed">
              we started as a team of growth-obsessed professionals with a mission to help 
              startups scale sustainably. our approach combines data-driven strategies with 
              creative storytelling, driving not just awareness, but revenue and retention. 
              we wanted to do more, but the traditional agency model felt limiting. 
              we didn&apos;t like constraints.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              6 months back, we started investing time and capital into building state 
              of the art <span className="italic text-white">growth engines</span> in-house. 
              proprietary systems that can scale startups faster than ever before.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              today, we&apos;re building the future of startup growth. one extraordinary 
              company at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-light text-white relative z-20 mb-8">
            ready to start your growth story?
          </h2>
          
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
          
          <div className="relative z-20 mt-8">
            <Button 
              variant="outline" 
              className="bg-white text-black border-white text-lg py-6 px-12 rounded-full hover:bg-gray-100"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 