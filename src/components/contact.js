import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwvavd");
  if (state.succeeded) {
    return (
      <p className="w-full text-center py-5 text-lg text-white">
        Thanks for contacting me! I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Feel free to reach out to me with any opportunities, or just to
            chat! 😊
          </p>
        </div>
        <div className="max-w-md mx-auto mt-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="Message from personal website"
            />
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Anakin Skywalker"
                required
                type="text"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="darthvader@sith.com"
                required
                type="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="This will be a day long remembered. It has seen the end of Kenobi. It will soon see the end of the Rebellion."
                required
                rows={5}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              disabled={state.submitting}
              className="text-black font-semibold rounded-lg bg-white w-full py-3 text-sm hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
