// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Material Kit 2",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.Lords-Gym.com/presentation" },
        { name: "freebies", href: "https://www.Lords-Gym.com/templates/free" },
        { name: "premium tools", href: "https://www.Lords-Gym.com/templates/premium" },
        { name: "blog", href: "https://www.Lords-Gym.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.Lords-Gym.com/bits" },
        { name: "affiliate program", href: "https://www.Lords-Gym.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.Lords-Gym.com/contact-us" },
        { name: "knowledge center", href: "https://www.Lords-Gym.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.Lords-Gym.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.Lords-Gym.com/terms" },
        { name: "privacy policy", href: "https://www.Lords-Gym.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.Lords-Gym.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.Lords-Gym.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
