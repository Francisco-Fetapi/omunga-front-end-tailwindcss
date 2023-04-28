interface Link {
  label: string;
  href: `/${string}`;
}

export default function useHeaderLinks() {
  const links: Link[] = [
    { label: "Página Inicial", href: "/" },
    { label: "Artigos", href: "/artigos" },
    { label: "Sobre", href: "/sobre" },
  ];

  return links;
}
