import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../../atoms/ui";
import styles from './index.module.scss';
import { 
  setFullNameFilter, 
  setCompanyFilter
} from '../../../app/store/FilterSlice';
import { RootState } from "../../../app/store/store";
import { useEffect } from "react";

interface SearchFormProps {
  className?: string
  setActive?: () => void;
} 

export default function SearchForm({className = '', setActive}: SearchFormProps ) {
  const dispatch = useDispatch();
  const { fullName, company} = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    const savedFullName = localStorage.getItem("filterFullName");
    const savedCompany = localStorage.getItem("filterFullCompany");

    if (savedFullName) {
      dispatch(setFullNameFilter(JSON.parse(savedFullName)));
    }

    if (savedCompany) {
      dispatch(setCompanyFilter(JSON.parse(savedCompany)));
    }
  }, [dispatch]);

  const filterName = (e: React.ChangeEvent<HTMLInputElement >) => {
    const value = e.currentTarget.value
    localStorage.setItem("filterFullName", JSON.stringify(value));
    dispatch(setFullNameFilter(value))
  }

  const filterCompany = (e: React.ChangeEvent<HTMLInputElement >) => {
    const value = e.currentTarget.value
    localStorage.setItem("filterFullCompany", JSON.stringify(value));
    dispatch(setCompanyFilter(value))
  }

  return (
    <div className={`${styles.searchForm} ${className}`}>
      <Input value={fullName}
        onChange={(e) => filterName(e)} placeholder="Поиск по имени"/>
      <Input value={company}
        onChange={(e) => filterCompany(e)} className={styles.searchForm_margin} placeholder="Поиск по компании"/>
      <Button onClick={setActive} variant='secondary'>Добавить</Button>
    </div>
  )
}