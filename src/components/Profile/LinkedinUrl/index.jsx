import styles from "../../styles/Profile.module.css";

const redirectToLinkedIn = () => {
  window.location.href =
    "https://www.linkedin.com/in/leandro-martins-665839187/"; // função que atualiza a URL atual
};

export default () => (
  <>
    <button className={styles.links} onClick={redirectToLinkedIn}>
      LinkedIn
    </button>
  </>
);
