import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { useSelector } from "react-redux";

const ChartPie = ({ isExpenses }) => {
    const { expensesTransactions, incomesTransations } = useSelector((state) => state.transactions.value)
    const { expensesCategories, incomesCategories, totalExpenses, totalIncomes } = useSelector((state) => state.categories.value)
    const [myTransactions, setMyTransactions] = useState(expensesTransactions)
    const [myCategories, setMyCategories] = useState(expensesCategories)
    const [total, setTotal] = useState(totalExpenses)
    const [chartData, setCharData] = useState([])




    useEffect(() => {
        if (!isExpenses) {
            setMyTransactions(incomesTransations)
            setMyCategories(incomesCategories)
            setTotal(totalIncomes)
        } else {
            setMyTransactions(expensesTransactions)
            setMyCategories(expensesCategories)
            setTotal(totalExpenses)
        }
        //lógica para meter los valores en el gráfico
        console.log(myCategories);
        
        myCategories.map((category) => {
            let transactionsByCategory = myTransactions.filter((transaction) => transaction.category === category)
            let totalByCategory = transactionsByCategory.reduce((acc, transaction) => {
                return acc + transaction.amount;
            }, 0);
            let percentage = totalByCategory * 100 / total
            let data = { value: percentage, color: category.color }

            setCharData(data)
        })
        console.log(chartData);

    }, [isExpenses])

    return (
        <View>
            <PieChart
                donut
                innerRadius={80}
                data={chartData}
                centerLabelComponent={() => {
                    return <Text style={{ fontSize: 30 }}>$ {total}</Text>;
                }}
            />
        </View>
    );
}

export default ChartPie