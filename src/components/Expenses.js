import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
    </Card>
  );
}

export default Expenses;
