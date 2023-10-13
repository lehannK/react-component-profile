import styles from "../../styles/Profile.module.css";

const redirectToInstagram = () => {
  window.location.href = "https://instagram.com/lehannk/"; // função que atualiza a URL atual
};

export default () => (
  <>
    <button className={styles.links} onClick={redirectToInstagram}>
      Instagram
    </button>
  </>
);
