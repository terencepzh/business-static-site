function Footer() {
  return (
    <div className="bg-blue-900 text-white text-sm w-full mt-auto">
      <div className="flex flex-col justify-center items-center gap-8 p-8">
        <div className="flex justify-evenly w-[80%] max-w-sm">
          <img src="facebook.svg" alt="Facebook" />
          <img src="twitter.svg" alt="X" />
          <img src="instagram.svg" alt="Instagram" />
          <img src="linkedin.svg" alt="LinkedIn" />
        </div>
        <p>© 2024 Lennon - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
