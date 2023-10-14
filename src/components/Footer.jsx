import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-[url(bg/bgFooter.jpg)] flex justify-around items-center py-20 bg-cover">
      <img src="logo.svg" alt="" />
      <button className="text-gray-100 border rounded-lg w-28 h-10">
        contato
      </button>
      <div>
        <div className="flex w-full gap-4 justify-center">
          <a href="">
            <AiFillLinkedin className="text-gray-100" />
          </a>
          <a href="">
            <AiFillFacebook className="text-gray-100" />
          </a>
          <a href="">
            <AiFillInstagram className="text-gray-100" />
          </a>
        </div>
        <p className="text-gray-100">Sign-up for our newsletter</p>
      </div>
    </footer>
  );
}

export default Footer;
