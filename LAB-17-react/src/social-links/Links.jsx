import Link from "./Link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/" },
  { name: "Frontend Mentor", url: "https://frontendmentor.io/" },
  { name: "LinkedIn", url: "https://linkedin.com/" },
  { name: "Twitter", url: "https://twitter.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
];

function Links() {
  return (
    <ul className="space-y-4">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <Link link={link} />
        </li>
      ))}
    </ul>
  );
}

export default Links;
