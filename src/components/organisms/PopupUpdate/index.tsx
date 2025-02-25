import { Button } from "../../atoms/ui";
import ClientForm from "../../molecules/ClientForm";
import styles from "./index.module.scss";
import svg from "../../atoms/assets/svg/cross-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { deleteClient, updateClient } from "../../../app/store/cliantSlice";

interface Client {
  id: string;
  fullName: string;
  company: string;
  group: string;
  presence: boolean;
}

interface PopupUpdateProps {
  active?: boolean;
  data?: Client | null;
  setActive?: () => void;
}

export default function PopupUpdate({
  active = false,
  setActive,
  data,
}: PopupUpdateProps) {
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
      id: data?.id as string,
      fullName,
      company,
      group,
      presence: formData.get("presence") ? true : false,
    };

    dispatch(updateClient(clientData));
    setActive?.();
    setError(null);
  };

  const removeClient = () => {
    if (data) {
      dispatch(deleteClient(data?.id));
      setActive?.();
    }
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.popupUpdate}>
      <div className={styles.popupUpdate_blok}>
        <div className={styles.popupUpdate_box_cross}>
          <Button
            onClick={setActive}
            className={styles.popupUpdate_button_cross}
            variant="silver"
          >
            <img src={svg} alt="#" />
          </Button>
        </div>
        <form className={styles.popupUpdate_form} onSubmit={handleSubmit}>
          <ClientForm clientId={data?.id} />
          {error && <div className={styles.popupUpdate_errorMessage}>{error}</div>}
          <div className={styles.popupUpdate_container}>
            <Button type="submit" variant="secondary">
              Обновить
            </Button>
            <Button
              onClick={removeClient}
              variant="silver"
              className={styles.popupUpdate_button_color}
            >
              Удалить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}