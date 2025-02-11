import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function CalendlyWidget() {
  const [searchParams] = useSearchParams();
  const utmSource = searchParams.get("utm_source") || "direct";

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
        data-url={`https://calendly.com/d/crgj-w4r-3qc/tempo-introduction-agent?utm_source=${utmSource}`}
        style={{ minHeight: "100%" }}
      />
    </div>
  );
}
