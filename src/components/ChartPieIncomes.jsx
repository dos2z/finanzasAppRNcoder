
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { useSelector } from "react-redux";

const ChartPie = ({ isExpenses }) => {
    const { incomesTransations } = useSelector((state) => state.transactions.value)
    const { incomesCategories } = useSelector((state) => state.categories.value)






    const chartData = []
    
    let total

    incomesCategories.map((category) => {

        let transactionsByCategory = incomesTransations.filter((transaction) => {
            return transaction.category.id === category.id
        })
        let totalByCategory
        if (transactionsByCategory) {
            totalByCategory = transactionsByCategory.reduce((acc, transaction) => {
                return acc + Number(transaction.amount);
            }, 0);
        }
        let divisor = incomesTransations.reduce((acc, transaction) => {
            return acc + Number(transaction.amount)
        }, 0)
        total = divisor
        let percentage = (totalByCategory * 100) / divisor
        let data = { value: percentage, color: category.color }
        chartData.push(data)

    })

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