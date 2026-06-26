export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Soft blobs */}
      <div
        className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(circle at center, rgba(37,99,235,0.35), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[720px] h-[720px] rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.25), transparent 60%)",
          filter: "blur(80px)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[520px] h-[520px] rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(circle at center, rgba(96,165,250,0.22), transparent 60%)",
          filter: "blur(70px)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(2,6,23,0) 0%, rgba(2,6,23,0.85) 70%)",
        }}
      />
    </div>
  );
}
