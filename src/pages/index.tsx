import ColoredSidebar from "@/components/ColoredSidebar/ColoredSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeHeroHeader from "@/components/HomeHeroHeader/HomeHeroHeader";

export default function Home() {
  return (
    <>
      <Header />
      <ColoredSidebar isShort={false} showIcon={true} />
      <main className="main">
        <HomeHeroHeader />
        {/* <LoremIpsum /> */}
      </main>

      <Footer />
    </>
  );
}

export function LoremIpsum() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque tempore
      odio dolores eum iste beatae quos voluptatem quam molestias iure maxime
      consequuntur eaque, nostrum non illum, facere adipisci, placeat et.
      Quibusdam delectus eius facere eaque, pariatur nobis nisi, facilis
      incidunt recusandae odio modi, quaerat aliquam iste molestias officiis
      corrupti et neque dolores in quisquam impedit error id consectetur animi?
      Corrupti. Earum, adipisci aliquid doloremque unde sit eligendi doloribus
      eum veritatis itaque ad quos atque dolores? Alias itaque dolorem
      voluptatibus earum? Unde recusandae cum natus eos officiis dolores soluta
      reiciendis nesciunt? Consectetur id distinctio corrupti. Consectetur
      expedita veritatis pariatur ipsum hic eligendi quas aliquid omnis nam
      saepe harum dolorum ea, vel tenetur error recusandae ullam veniam,
      explicabo, voluptas optio similique! Mollitia. Obcaecati recusandae
      commodi ex ea ipsa tenetur praesentium, omnis laudantium dolorem,
      consequatur accusantium! Praesentium aliquid quasi, autem at quia,
      adipisci reiciendis necessitatibus repellat elige
      <br />
      <br />
      sit eligendi doloribus eum veritatis itaque ad quos atque dolores? Alias
      itaque dolorem voluptatibus earum? Unde recusandae cum natus eos officiis
      dolores soluta reiciendis nesciunt? Consectetur id distinctio corrupti.
      Consectetur expedita veritatis pariatur ipsum hic eligendi quas aliquid
      omnis nam saepe harum dolorum ea, vel tenetur error recusandae ullam
      veniam, explicabo, voluptas optio similique! Mollitia. Obcaecati
      recusandae commodi ex ea ipsa tenetur praesentium, omnis laudantium
      dolorem, consequatur accusantium! Praesentium aliquid quasi, autem at
      quia, adipisci reiciendis necessitatibus repellat elige
      <br />
      <br />
      Earum, adipisci aliquid doloremque unde sit eligendi doloribus eum
      veritatis itaque ad quos atque dolores? Alias itaque dolorem voluptatibus
      earum? Unde recusandae cum natus eos officiis dolores soluta reiciendis
      nesciunt? Consectetur id distinctio corrupti. Consectetur expedita
      veritatis pariatur ipsum hic eligendi quas aliquid omnis nam saepe harum
      dolorum ea, vel tenetur error recusandae ullam veniam, explicabo, voluptas
      optio similique! Mollitia. Obcaecati recusandae commodi ex ea ipsa tenetur
      praesentium, omnis laudantium dolorem, consequatur accusantium!
      Praesentium aliquid quasi, autem at quia, adipisci reiciendis
      necessitatibus repellat elige
    </div>
  );
}
