import { useEffect } from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
    
const ChartPie = ({myCategories, myTransactions, total}) => {
    
    const chartData = []
//lógica para meter los valores en el gráfico
    myCategories.map((category) => {
        let transactionsByCategory = myTransactions.filter((transaction)=> transaction.category === category)
        let totalByCategory = transactionsByCategory.reduce((acc, transaction) => {
            return acc + transaction.amount;
          }, 0);
        let percentage = totalByCategory*100/total  
        data = {value: percentage, color: category.color}
        
        chartData.push(data)
    })

    

    return(
        <View>
            <PieChart
                donut
                innerRadius={80}
                data={chartData}
                centerLabelComponent={() => {
                return <Text style={{fontSize: 30}}>$ {total}</Text>;
                }}
            />
        </View>
    );
}

export default ChartPie