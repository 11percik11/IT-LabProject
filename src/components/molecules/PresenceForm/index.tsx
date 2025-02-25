import { useEffect, useState } from "react";
import { Button } from "../../atoms/ui";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { setPresenceFilter } from "../../../app/store/FilterSlice";

export default function PresenceForm() {
  const [activeIndex, setActiveIndex] = useState<number>(3);
  const dispatch = useDispatch();

  const handleFilterChange = (presence: boolean | null, Index: number) => {
    dispatch(setPresenceFilter(presence));
    setActiveIndex(Index);
    localStorage.setItem("filterPresence", JSON.stringify([presence, Index]));
  };

  useEffect(() => {
    const filterPresence = localStorage.getItem("filterPresence");

    if (filterPresence) {
      const [presence, index] = JSON.parse(filterPresence);
      dispatch(setPresenceFilter(presence));
      setActiveIndex(index);
    }
  }, [dispatch]);

  return (
    <div className={styles.presenceForm}>
      <div className={styles.presenceForm_title}>Фильтровать по:</div>
      <Button
        onClick={() => handleFilterChange(false, 1)}
        className={`${styles.presenceForm_button} ${
          styles.presenceForm_button_margin
        } ${activeIndex === 1 ? styles.presenceForm_button_active : ""}`}
        variant="danger"
      >
        Отсутсвующим
      </Button>
      <Button
        onClick={() => handleFilterChange(true, 2)}
        className={`${styles.presenceForm_button} ${
          activeIndex === 2 ? styles.presenceForm_button_active : ""
        }`}
        variant="danger"
      >
        Присутствующим
      </Button>
      <Button
        onClick={() => handleFilterChange(null, 3)}
        className={`${styles.presenceForm_button} ${
          activeIndex === 3 ? styles.presenceForm_button_active : ""
        }`}
        variant="danger"
      >
        Без фильтра
      </Button>
    </div>
  );
}
