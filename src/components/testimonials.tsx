import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Tempo helped us build in 30 minutes what other developers were quoting me 2 weeks to build. We now move really, really quickly as a company with Tempo handling UI/UX",
    author: "Aaron Myran",
    role: "Co-founder, Chorus AI",
    image:
      "https://bzcxxroyylqcbnrgyxhx.supabase.co/storage/v1/object/public/TempoBookFrom//1738937344102.jfif",
  },
  {
    text: "What really blew us away was how quickly the designs were done and how fast we were able to get them implemented into our Webapp. We are incredibly happy with the price and value we're getting form Tempo. sometimes we wonder if they're even making money on us",
    author: "Ronald Ding",
    role: "CTO, Shadeform YC23",
    image:
      "https://bzcxxroyylqcbnrgyxhx.supabase.co/storage/v1/object/public/TempoBookFrom//1deaec552b7f744f94d76b79ae296d69016a5577.jpg",
  },
  {
    text: "Thank you Tempo! The developement time for my company internal system was months for simple features. Now, I'm leading the UI and the Devs only work on the API. In 1 week, I can deliver insane quanity of work!",
    author: "M-Sants on Reddit",
    role: " ",
    image:
      "https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_512.png",
  },
  {
    text: "Today's meeting was top-notch. Tempo was proactive and putting forth great ideas and results for our website",
    author: "Joseph Chakkalakal",
    role: "Director of Market Selection, NOVOS FiBER",
    image:
      "https://bzcxxroyylqcbnrgyxhx.supabase.co/storage/v1/object/public/TempoBookFrom//1609351006115.jfif",
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
