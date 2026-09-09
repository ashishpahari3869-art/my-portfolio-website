import { Star } from "lucide-react";

export default function Stars({ rating = 5, size = 14, className = "" }) {
  return (
    <div
      className={`flex gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={
            i < rating
              ? "fill-gold-400 text-gold-400"
              : "fill-transparent text-current opacity-25"
          }
        />
      ))}
    </div>
  );
}
