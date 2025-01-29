import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

//exporting the javascript function 
export const getExpenses = () => {
    return apiClient.get<Expense[]>('/expenses');

} 

export const getExpenseByExpenseId = (expenseId: string) => {
    return apiClient.get<Expense>(`/expenses/${expenseId}`);
}

export const deleteExpenseByExpenseId = (expenseId: string) => {
    return apiClient.delete<void>(`expenses/${expenseId}`);
}