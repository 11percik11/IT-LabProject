import { Button } from "../../atoms/ui";
import ClientForm from "../../molecules/ClientForm";
import styles from "./index.module.scss";
import svg from "../../atoms/assets/svg/cross-svgrepo-com.svg";
import { addClient } from "../../../app/store/cliantSlice";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface PopupCreateProps {
  active?: boolean;
  setActive?: () => void;
}

export default function PopupCreate({
  active = false,
  setActive,
}: PopupCreateProps) {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const fullName = formData.get("fullName") as string;
    const company = formData.get("company") as string;
    const group = formData.get("group") as string;

    if (!fullName || !company || !group) {
      setError("Все поля обязательны для заполнения");
      return;
    }

    const clientData = {
      fullName,
      company,
      group,
      presence: formData.get("presence") ? true : false,
    };

    console.log(clientData);

    dispatch(addClient(clientData));
    setActive?.();
    setError(null);
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.popupCreate}>
      <div className={styles.popupCreate_blok}>
        <div className={styles.popupCreate_box_cross}>
          <Button
            onClick={setActive}
            className={styles.popupCreate_button_cross}
            variant="silver"
          >
            <img src={svg} alt="#" />
          </Button>
        </div>
        <form className={styles.popupCreate_form} onSubmit={handleSubmit}>
          <ClientForm />
          {error && <div className={styles.popupCreate_errorMessage}>{error}</div>}
          <div className={styles.popupCreate_container}>
            <Button type="submit" variant="secondary">
              Добавить
            </Button>
            <Button
              onClick={setActive}
              variant="silver"
              className={styles.popupCreate_button_color}
            >
              Закрыть
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}