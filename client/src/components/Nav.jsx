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

      <a
        class="btn btn-primary"
        href="https://github.com/Nia-Emani"
        role="button"
        target="_blank"
      >
        Github
      </a>
      <a
        class="btn btn-primary"
        href="https://drive.google.com/file/d/1L3C8mPWdbCw-mQoe-WBzQSfDa2mj4Hd8/view?usp=sharing"
        role="button"
        target="_blank"
      >
        Resume
      </a>
      <a
        class="btn btn-primary"
        href="https://www.linkedin.com/in/niaemanidickson/"
        role="button"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  );
}
