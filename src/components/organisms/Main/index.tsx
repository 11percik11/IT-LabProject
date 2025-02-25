import { useSelector } from "react-redux";
import { Button, ColorFlag, Table } from "../../atoms/ui";
import { Column } from "../../atoms/ui/Table";
import styles from "./index.module.scss";
import { RootState } from "../../../app/store/store";
import { useEffect, useState } from "react";
import PopupUpdate from "../PopupUpdate";
import { selectFilteredClients } from "../../../app/store/selectors";

interface Client {
  id: string;
  fullName: string;
  company: string;
  group: string;
  presence: boolean;
}

interface MainProps {
  className?: string;
}

export default function Main({ className = "" }: MainProps) {
  const [active, setActive] = useState(false);
  const [dataClient, setDataClient] = useState<Client | null>(null);
  const filteredClients = useSelector(selectFilteredClients);
  const arrClient = useSelector((state: RootState) => state.client);

  const ClientClick = (clientId: string) => {
    const client = arrClient.find((c) => c.id === clientId);
    if (client) {
      setDataClient(client);
      setActive(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(arrClient));
  }, [arrClient]);

  const data = filteredClients.map((client, index) => ({
    id: index + 1,
    key: client.id,
    name: (
      <Button onClick={() => ClientClick(client.id)} variant="primary">
        {client.fullName}
      </Button>
    ),
    company: client.company,
    group: client.group,
    presence: (
      <ColorFlag className={styles.main_flag} state={client.presence} />
    ),
  }));

  const columns: Column[] = [
    {
      key: "id",
      title: "Номер",
      width: "12%",
      align: "left",
    },
    {
      key: "name",
      title: "ФИО",
      width: "28.5%",
    },
    {
       key: "company",
      title: "Компания",
      width: "22%" 
    },
    {
       key: "group",
      title: "Группа",
      width: "29%" 
    },
    {
       key: "presence",
      title: "Присутсвие",
      width: "8.5%" 
    },
  ];

  return (
    <div className={className}>
      <Table data={data} columns={columns} hoverable striped />
      <PopupUpdate
        data={dataClient}
        active={active}
        setActive={() => setActive(!active)}
      />
    </div>
  );
}
