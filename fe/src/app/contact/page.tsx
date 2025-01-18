import ContactForm from "@/components/contact/form";

export default function Page() {
  return (
    <div className="flex flex-col p-8 gap-4  h-screen">
      <ContactForm />
      <h1 className="text-2xl font-bold">Get in touch</h1>
      <p>850.490.5147</p>
      <p>shelley@shelleybphotography.com</p>
    </div>
  );
}
