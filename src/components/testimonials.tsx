import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Tempo Labs has completely transformed how we build our frontend. The AI integration is seamless and intuitive.",
    author: "John Doe",
    role: "CTO, TechCorp",
    initials: "JD",
  },
  {
    text: "The visual development experience combined with AI is revolutionary. It's exactly what we needed!",
    author: "Alice Smith",
    role: "Lead Developer, StartupX",
    initials: "AS",
  },
  {
    text: "Game-changing platform for our development team. The AI assistance is spot-on.",
    author: "Mike Johnson",
    role: "VP Engineering, TechFlow",
    initials: "MJ",
  },
  {
    text: "The combination of visual editing and AI code generation is brilliant. It's the future of web development.",
    author: "Sarah Chen",
    role: "Frontend Architect, InnovateCo",
    initials: "SC",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        const { scrollTop, scrollHeight } = scrollRef.current;
        const firstSetHeight = scrollHeight / 3;

        if (scrollTop >= firstSetHeight) {
          scrollRef.current.scrollTop = 0;
        } else {
          scrollRef.current.scrollTop += 1;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      ref={scrollRef}
      className="space-y-6 mt-12 h-[400px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {[...testimonials, ...testimonials, ...testimonials].map(
        (testimonial, i) => (
          <Card
            key={i}
            className="p-6 bg-[#18181B] border-[#27272A] transition-all duration-300"
          >
            <p className="text-[#E4E4E7] mb-4 text-lg">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 rounded-full bg-[#6448EF] flex items-center justify-center font-medium text-white w-[30] w-10">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-medium text-[#E4E4E7]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#71717A]">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ),
      )}
    </div>
  );
}
