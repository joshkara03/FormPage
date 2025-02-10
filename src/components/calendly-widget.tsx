import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex-1 h-full">
      <div
        className="calendly-inline-widget w-full h-full rounded-lg overflow-hidden"
        data-url="https://calendly.com/d/cpqn-4vz-jcj/tempo-labs-intro"
        style={{ minHeight: "100%" }}
      />
    </div>
  );
}
