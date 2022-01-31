import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">
        <img
          className="portfolio-logo"
          src="https://lh3.googleusercontent.com/vxORRw3d_UrsZtqkZc_jxFQsNgFMrK1a6JCxTxQYJm1vwIt-0giyAbnyNXQKNEYZtfjYWWIv8mNtxgKS7Cv5fNZ3syxrp5WcYBSzfM8P16_70KOM_7C-zIKcYedwDqgt50nNcNDNcAc=h55"
          alt="Nia-Emani Portfolio Logo"
        />
      </Link>
      <p>About</p>
      <p>Projects</p>
      <p>Resume</p>
      <p>Contact</p>
    </div>
  );
}
