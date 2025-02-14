import React from "react";
import { cn } from "@/lib/utils";

interface TempoLogoProps extends React.SVGProps<SVGSVGElement> {}

export function TempoLogo({ className, ...props }: TempoLogoProps) {
  return (
    <svg
      viewBox="0 0 552 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path d="M0 0H551.324L509.316 60H42.0117L0 0Z" fill="currentColor" />
      <path
        d="M56.0196 80.0001H223.391V130L91.0312 130L56.0196 80.0001Z"
        fill="currentColor"
      />
      <path
        d="M323.391 80.0001H495.313L460.305 130H323.391V80.0001Z"
        fill="currentColor"
      />
      <path
        d="M303.832 7.26521L303.391 520L273.391 560L243.391 520L243.832 7.00005L303.832 7.26521Z"
        fill="currentColor"
      />
      <path
        d="M373.196 80.0001V440L323.391 500V80.0001H373.196Z"
        fill="currentColor"
      />
      <path
        d="M223.391 80.0001V500L173.391 440L173.639 80.0001H223.391Z"
        fill="currentColor"
      />
    </svg>
  );
}
