export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <div className="h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at center, #3b82f620 2px, transparent 2px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { number: "5+", suffix: "Thousand", label: "ALERTS SENT SO FAR" },
            { number: "5+", suffix: "Thousand", label: "USERS" },
            { number: "20+", suffix: "Thousand", label: "CITIES" },
          ].map((stat, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-px animate-border rounded-2xl bg-gradient-to-r from-blue-500/30 via-white/10 to-blue-500/30 bg-[length:400%_100%]" />
              </div>

              {/* Content */}
              <div className="relative space-y-4 rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                <div className="text-center">
                  <div className="relative">
                    <span className="text-5xl font-bold text-white">
                      {stat.number}
                    </span>
                    <span className="ml-1 text-2xl font-medium text-blue-400">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-medium tracking-wider text-gray-400">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-1 -top-1 h-20 w-20 animate-pulse">
                  <div className="absolute h-full w-full rounded-full bg-blue-500/20 blur-md" />
                </div>
                <div className="absolute -bottom-2 -left-2 h-16 w-16 animate-pulse">
                  <div className="absolute h-full w-full rounded-full bg-blue-400/10 blur-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
