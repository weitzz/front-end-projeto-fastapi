
const Footer = () => {
  return (
    <footer className="bg-sky-600 text-center lg:text-left">
      <div className="text-gray-700 text-center p-4">
        <div className="mb-6 text-center">
            <p>feito por</p>
          <h5 className="font-bold mb-2.5 text-neutral-100">
            Tatiane Weitzel
          </h5>
          <ul className="list-none mb-0 text-neutral-100 flex flex-row items-center justify-center">
            <li className=' flex flex-col items-center justify-between p-2.5'>
              <a href="https://github.com/weitzz" target="_blank">
                <img src="/github.svg" alt="link para o github" />
              </a>
            </li>
            <li className=' flex flex-col items-center justify-between p-2.5'>
              <a
                href="https://www.linkedin.com/in/tatiane-weitzel/"
                target="_blank"
              >
                <img src="/linkedin.svg" alt="link para o linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
