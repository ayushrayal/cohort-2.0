let Navbar = () => {
  return React.createElement("nav", { className: "navbar" }, [
    aboutMe,
    portfolio,
    service,
    contactUs,
    right
  ]);
};
let aboutMe = React.createElement("a", { className: "a" }, "About Me");
let portfolio = React.createElement("a", { className: "a" }, "Portfolio");
let service = React.createElement("a", { className: "a" }, "Service");
let contactUs = React.createElement("a", { className: "a" }, "Contact Us");
let right = React.createElement("a",{className:"a"},"Book A Call");
export default Navbar;
