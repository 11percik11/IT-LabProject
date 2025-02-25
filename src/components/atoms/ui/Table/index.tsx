import styles from './index.module.scss';

export interface Column {
  key: string;
  title: string | React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps {
  data: Array<Record<string, any>>;
  columns: Column[];
  hoverable?: boolean;
  striped?: boolean;
}

export default function Table ({ 
    data, 
    columns, 
    hoverable = true, 
    striped = false,
  }: TableProps){
  return (
    <div className={styles.tableWrapper}>
      <table className={`${styles.table} ${hoverable ? styles.hoverable : ''} ${striped ? styles.striped : ''}`}>
        <thead className={styles.thead}>
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key} 
                style={{ 
                  width: column.width || 'auto',
                  textAlign: column.align || 'left'
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((row, index) => (
            <tr key={row.key || index}>
              {columns.map((column) => (
                <td 
                  key={`${index}-${column.key}`}
                  style={{ textAlign: column.align || 'left' }}
                >
                  {row[column.key] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}