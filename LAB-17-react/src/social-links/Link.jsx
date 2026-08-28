function Link({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      className="w-full block rounded-lg bg-[#333333]
     py-3 font-semibold text-white transition 
     hover:bg-[#c5f82a] hover:text-[#141414]"
    >
      {link.name}
    </a>
  );
}

export default Link;
