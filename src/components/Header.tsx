import { useState } from "react";
import Logo from "../assets/logo.svg";
import styles from "./Header.module.less";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<string>("ru");

  const changeLanguage = (language: string) => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
      setActiveLang(language);
      console.log("Language changed to:", language); // Проверка изменения языка
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoSection}>
          <img src={Logo} className={styles.logoImage} alt="logo" />
          <div>{t("healthy.ration")}</div>
        </div>
        <div>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li>{t("nutrition.programs")}</li>
              <li>{t("business.lunches")}</li>
              <li>{t("gastro.shop")}</li>
              <li>{t("about.us")}</li>
              <li>Блог</li>
            </ul>
          </nav>
          <div className={styles.languageSwitcher}>
            {["ru", "kz", "en"].map((lang) => (
              <button
                key={lang}
                className={`${styles.language} ${
                  activeLang === lang ? styles.active : ""
                }`}
                onClick={() => changeLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
        <a className={styles.phoneButton} href="tel:+77761195174">
          +7 776 119 51 74
        </a>
      </div>
    </header>
  );
};
