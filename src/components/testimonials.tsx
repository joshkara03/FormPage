import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Tempo Labs has completely transformed how we build our frontend. The AI integration is seamless and intuitive.",
    author: "John Doe",
    role: "CTO, TechCorp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
  {
    text: "The visual development experience combined with AI is revolutionary. It's exactly what we needed!",
    author: "Alice Smith",
    role: "Lead Developer, StartupX",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
  },
  {
    text: "Game-changing platform for our development team. The AI assistance is spot-on.",
    author: "Mike Johnson",
    role: "VP Engineering, TechFlow",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
  },
  {
    text: "The combination of visual editing and AI code generation is brilliant. It's the future of web development.",
    author: "Sarah Chen",
    role: "Frontend Architect, InnovateCo",
    image:
      "https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_512.png",
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
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="h-10 w-10 rounded-full object-cover"
              />
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
