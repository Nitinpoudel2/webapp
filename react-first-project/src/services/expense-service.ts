import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

//exporting the javascript function 
export const getExpenses = () => {
    return apiClient.get<Expense[]>('/expenses');

} 
