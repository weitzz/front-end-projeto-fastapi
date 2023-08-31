import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-center lg:text-left">
      <div className="text-gray-700 text-center p-4">
        <div className="mb-6 text-center text-slate-400">
          <p>feito por</p>
          <h5 className="font-bold mb-2.5 text-slate-300">
            Tatiane Weitzel
          </h5>
          <ul className="list-none mb-0 text-neutral-100 flex flex-row items-center justify-center">
            <li className=' flex flex-col items-center justify-between p-2.5'>
              <a href="https://github.com/weitzz" target="_blank">
                <Image src="/github.svg" alt="link para o github" width={40} height={40} />
              </a>
            </li>
            <li className=' flex flex-col items-center justify-between p-2.5'>
              <a
                href="https://www.linkedin.com/in/tatiane-weitzel/"
                target="_blank"
              >
                <Image src="/linkedin.svg" alt="link para o linkedin" width={40} height={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
