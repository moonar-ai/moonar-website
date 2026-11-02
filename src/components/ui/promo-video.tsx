import { cn } from "@/lib/utils";

export function PromoVideo({
  src,
  poster,
  title,
  className,
}: {
  src?: string;
  poster?: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-surface",
        className,
      )}
    >
      {src ? (
        <video
          src={src}
          poster={poster}
          title={title}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-14 w-14 text-accent-secondary"
            fill="currentColor"
          >
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-secondary">
            Video coming soon
          </span>
        </div>
      )}
    </div>
  );
}
