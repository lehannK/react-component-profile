import styles from "../../styles/Profile.module.css";

const redirectToGitHub = () => {
  window.location.href = "https://github.com/lehannK"; // função que atualiza a URL atual
};

export default () => (
  <>
    <button className={styles.links} onClick={redirectToGitHub}>
      GitHub
    </button>
  </>
);
