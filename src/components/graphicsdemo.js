export default function GraphicsDemo({ explanation, path, expTop }) {
  return (
    <section className="relative group">
      {expTop && (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-t-2xl border-x border-t border-indigo-200/60 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-300/20 to-blue-300/20 rounded-full blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-300" />
              <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase">
                Insights
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-300 to-transparent" />
            </div>

            <div className="text-gray-800 leading-relaxed font-medium [&_ul]:list-none [&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li:before]:content-['‣'] [&_li:before]:text-indigo-500 [&_li:before]:font-bold [&_li:before]:flex-shrink-0">
              {explanation}
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <iframe
          src={path}
          width="100%"
          height="600"
          className={`w-full border-x border-indigo-200/60 bg-white transition-all duration-300 ${
            expTop ? "" : "rounded-t-2xl border-t"
          } ${!expTop ? "rounded-b-2xl border-b" : ""}`}
          loading="lazy"
        />

        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-indigo-400/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-indigo-400/40 rounded-tr-2xl" />
      </div>

      {!expTop && (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-b-2xl border-x border-b border-indigo-200/60 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-300/20 to-blue-300/20 rounded-full blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-300" />
              <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase">
                Insights
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-300 to-transparent" />
            </div>

            <div className="text-gray-800 leading-relaxed font-medium [&_ul]:list-none [&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li:before]:content-['→'] [&_li:before]:text-indigo-500 [&_li:before]:font-bold [&_li:before]:flex-shrink-0">
              {explanation}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
