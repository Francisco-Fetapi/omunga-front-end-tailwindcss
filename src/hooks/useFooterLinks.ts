interface Link {
  label: string;
  href: `/${string}`;
}

type Title = "Home" | "Sobre" | "Contactos";

export default function useFooterLinks() {
  const links: Record<Title, Link[]> = {
    Home: [{ label: "Blogs", href: "/blogs" }],
    Sobre: [
      { label: "Quem somos", href: "/sobre#quem-somos" },
      { label: "O projeto Omunga", href: "/sobre#o-projeto" },
    ],
    Contactos: [{ label: "faleconnosco@gmail.com", href: "/#" }],
  };

  const titles = Object.keys(links) as Title[];

  return { links, titles };
}
