import ConsultForm from "@/components/ConsultForm";

function Contact() {
  return (
    <>
      <div className="flex justify-center p-8">
        <div className="flex flex-col items-center gap-8 max-w-screen-lg">
          <div className="flex items-center gap-4 text-nowrap text-xl font-bold w-full">
            <hr className="border-orange-500 w-full" />
            <h1>Contact Us</h1>
            <hr className="border-orange-500 w-full" />
          </div>
          <ConsultForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
