import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://shelleybressmanphotography.pixieset.com/contact-form/cf_4nROji1n2R7UUt2HR50OHztaDt4J/embed"
      ></Script>
      <div
        id="pixieset-contact-form"
        className="*:!overflow-y-scroll *:!h-[130rem]"
      ></div>
      <div className="flex flex-col p-8 gap-4   bg-white">
        <h1 className="text-2xl font-bold">Get in touch</h1>
        <p>850.490.5147</p>
        <p>info@shelleyandblaine.com</p>
      </div>
    </>
  );
}
