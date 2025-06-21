import { Link } from "react-router-dom";
import { Code } from "lucide-react";
import { FaGithub, FaHandPointRight } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={s.homePage}>
      <Section>
        <Container>
          <h1 className={s.title}>
            Welcome to the Phonebook App <FaPhoneVolume />
          </h1>

          <p className={s.description}>
            This is a simple and convenient app for managing your personal
            contacts. You can add, delete, and edit contacts — everything is
            right at your fingertips!
          </p>

          <div className={s.developerInfo}>
            <h2 className={s.developerTitle}>
              <Code />
              About the Developer
            </h2>
            <p className={s.description}>
              Built with passion using React. You can reach out to me here:
            </p>
            <ul className={s.list}>
              <li className={s.item}>
                <a
                  href="https://github.com/geeeorgio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </li>
              <li className={s.item}>
                <a
                  href="https://www.linkedin.com/in/george-kyryliuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandLinkedinFilled />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className={s.startLink}>
            <p className={s.startDescr}>
              <FaHandPointRight /> Already registered?
            </p>
            <Link to="/contacts">Go to Contacts</Link>

            <p className={s.startDescr}>
              <FaHandPointRight /> Not registered yet?
            </p>
            <Link to="/register">Sign up</Link>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
