import {useContext} from 'react';
import {ExpenseTrackerContext} from './context/Context';
import {incomeCategories, expenseCategories, resetCategories} from './constants/category'

const useTransactions = (title) =>{
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    const transPerType = transactions.filter((t)=>t.type === title);
    const total = transPerType.reduce((acc,curVal)=> acc += curVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transPerType.forEach((t)=>{
        const category = categories.find((c)=>c.type === t.category);

        if(category){
            category.amount += t.amount;
        }
    })

    const filterCategories = categories.filter((c)=>c.amount> 0);

    const chartData = {
        datasets :[{
            data: filterCategories.map((c)=>c.amount),
            backgroundColor: filterCategories.map((c)=>c.color)
        }],
        labels: filterCategories.map((c)=>c.type)
    }

    return {filterCategories, total, chartData};
}
export default useTransactions;