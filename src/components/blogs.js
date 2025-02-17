import BlogCards from "./blogcard";

export default function Blog() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Blog
          </h2>
          <p className="mx-auto pb-3 max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My thoughts recently!
          </p>
          <BlogCards />
        </div>
      </div>
    </section>
  );
}
