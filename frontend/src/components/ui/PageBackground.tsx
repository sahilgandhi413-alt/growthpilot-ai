export default function PageBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      <div className="absolute -top-44 -left-44 h-[700px] w-[700px] rounded-full bg-indigo-600/10 blur-[180px]" />

      <div className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="absolute bottom-0 left-1/3 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[180px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}