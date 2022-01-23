import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";

const Home = () => {
  return (
    <main id="home">
      <h1 className="text-neutral-50 font-bold text-h1 mt-5">
        Hi, I am Frank 👋
      </h1>
      <h2 className="text-neutral-100 font-medium text-h2 mt-1">
        Full-Stack Developer
      </h2>
      <p className="text-neutral-200 text-normal mt-8">
        I am a freshman studying computer science at{" "}
        <span className="underline decoration-cyan-500">
          Northwestern University
        </span>
        . I enjoy building web applications that help make people’s lives a bit{" "}
        <span className="underline decoration-emerald-500">
          easier/more fun
        </span>
        . Outside of programming, I love listening to jazz, watching anime, and
        playing chess.
      </p>
      <section className="flex mt-10">
        <a
          href="https://github.com/xinfrank"
          target="_blank"
          rel="noreferrer"
          aria-label="link to Github"
        >
          <BsGithub
            className="mr-7 hover:scale-95"
            fill={"#E5E5E5"}
            size={32}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/xfrank/"
          target="_blank"
          rel="noreferrer"
          aria-label="link to LinkedIn"
        >
          <BsLinkedin
            className="mr-7 hover:scale-95"
            fill={"#E5E5E5"}
            size={32}
          />
        </a>
        <a
          href={"mailto:frankxin.private@gmail.com"}
          aria-label="button to send e-mail"
        >
          <ImMail4 className="hover:scale-95" fill={"#E5E5E5"} size={33} />
        </a>
      </section>
      <button className="w-48 h-16 bg-background-button rounded-md text-neutral-50 text-xl font-semibold mt-10">
        My Projects →
      </button>
    </main>
  );
};

export default Home;
