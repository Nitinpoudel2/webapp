import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import { Expense } from "../../model/Expense";
import AppHelper from "../../utils/AppHelper";
import DashboardStatus from "./DashboardStatus";


const Dashboard = () => {
  const loggedInUser : string =AppHelper.getLoggedInUser();

  const { expenses, error, isLoading } = useExpenses();
  const totalExpenses = expenses.reduce((acc: number, expense: Expense) => acc + expense.amount, 0);

  return (
    <div className="container">
      {isLoading && <p> Loading.....</p>}
      {error && <p>{error}</p>}
      <DashboardStatus loggedInUser = {loggedInUser} totalExpenses=  {totalExpenses} /> 
      <hr />
            <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
