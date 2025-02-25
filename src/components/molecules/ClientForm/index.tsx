import { useSelector } from "react-redux";
import { Checkbox, Input, Select } from "../../atoms/ui";
import styles from "./index.module.scss";
import { RootState } from "../../../app/store/store";
import { selectClientById } from "../../../app/store/cliantSlice";

interface ClientFormProps {
  clientId?: string;
}

export default function ClientForm({clientId = ''}: ClientFormProps
) {
  const client = useSelector((state: RootState) => 
    selectClientById(state, clientId)
  );
  
  const options = [
    { value: "Прохожий", label: "Прохожий" },
    { value: "Клиент", label: "Клиент" },
    { value: "Партнер", label: "Партнер" },
  ];

  const handleSelectChange = (value: string) => {
    console.log(value);
  };

  console.log(client?.group);
  
  
  return (
    <div className={styles.clientForm}>
      <div className={styles.clientForm_container}>
        <span className={styles.clientForm_label}>ФИО</span>
        <Input 
          defaultValue={client?.fullName || ""} 
          className={styles.clientForm_input} 
          name="fullName" 
        />
      </div>
      <div className={styles.clientForm_container}>
        <span className={styles.clientForm_label}>Компания</span>
        <Input 
          defaultValue={client?.company || ""} 
          className={styles.clientForm_input} 
          name="company" 
        />
      </div>
      <div className={`${styles.clientForm_container} ${styles.clientForm_container_margin}`}>
        <span className={styles.clientForm_label}>Группа</span>
        <Select 
          options={options}
          onChange={handleSelectChange}
          placeholder="Выбрать"
          defaultValue={client?.group}
          name="group"
        />
      </div>
      <div className={styles.clientForm_container}>
        <span className={styles.clientForm_label}>Присутсвие</span>
        <Checkbox 
          checked={client?.presence || false} 
          className={styles.clientForm_checkbox} 
          name="presence" 
        />
      </div>
    </div>
  );
}
