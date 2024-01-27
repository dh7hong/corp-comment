import myLogo from "../images/logo.svg";

export default function Logo() {
  return <a href="/" className="logo">
    <img src={myLogo} alt="logo" />
  </a>;
}
