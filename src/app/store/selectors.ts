import { RootState } from "./store";

export const selectCompanies = (state: RootState) => 
  Array.from(new Set(state.client.map(client => client.company)));

export const selectFilteredClients = (state: RootState) => {
  const { fullName, company, presence } = state.filter;
  return state.client.filter(client => {
    const nameMatch = client.fullName.toLowerCase().includes(fullName.toLowerCase());
    const companyMatch = company ? client.company.toLowerCase().includes(company) : true;
    const presenceMatch = presence !== null ? client.presence === presence : true;
    return nameMatch && companyMatch && presenceMatch;
  });
};