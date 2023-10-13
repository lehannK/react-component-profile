import Avatar from "./Avatar";
import Name from "./Name";
import Bio from "./Bio";
import Email from "./Email";
import Phone from "./Phone";
import GithubUrl from "./GithubUrl";
import LinkedinUrl from "./LinkedinUrl";
import InstragramUrl from "./InstragramUrl";
import styles from "../styles/Profile.module.css";

export default () => {
  return (
    <div className={styles.profile}>
      <Avatar />
      <Name />
      <hr />
      <Bio />
      <hr />
      <Phone />
      <hr />
      <Email />
      <hr />
      <GithubUrl />
      <LinkedinUrl />
      <InstragramUrl />
    </div>
  );
};
