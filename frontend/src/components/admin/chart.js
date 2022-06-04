import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "../../stylesheets/chart.css";
import { PieChart, Pie, Cell} from 'recharts';
import { AreaChart, Area,  } from 'recharts';
class LineRechartComponent extends React.Component {

    data = [
        {
            "name": "Jan 2019",
            "Product A": 3432,
            "Procuct B": 2342
        },
        {
            "name": "Feb 2019",
            "Product A": 2342,
            "Procuct B": 3246
        },
        {
            "name": "Mar 2019",
            "Product A": 4565,
            "Procuct B": 4556
        },
        {
            "name": "Apr 2019",
            "Product A": 6654,
            "Procuct B": 4465
        },
        {
            "name": "May 2019",
            "Product A": 8765,
            "Procuct B": 4553
        }
    ]
    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    pieData = [
        {
            "name": "Chrome",
            "value": 68.85
        },
        {
            "name": "Firefox",
            "value": 7.91
        },
        {
            "name": "Edge",
            "value": 6.85
        },
        {
            "name": "Internet Explorer",
            "value": 6.14
        },
        {
            "name": "Others",
            "value": 10.25
        }
    ];

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };
    data = [
        {
            "name": "Jan 2019",
            "Product A": 3432,
            "Procuct B": 2342
        },
        {
            "name": "Feb 2019",
            "Product A": 2342,
            "Procuct B": 3246
        },
        {
            "name": "Mar 2019",
            "Product A": 4565,
            "Procuct B": 4556
        },
        {
            "name": "Apr 2019",
            "Product A": 6654,
            "Procuct B": 4465
        },
        {
            "name": "May 2019",
            "Product A": 8765,
            "Procuct B": 4553
        }
    ]



    render() {
        return (
            <div>
            <div id="chart">
            <LineChart width={730} height={250} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
                <Line type="monotone" dataKey="Procuct B" stroke="#FF0000" />
            </LineChart>
            </div>
            <div id="pie">
             <PieChart width={730} height={300} >
             <Pie data={this.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                 {
                     this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                 }
             </Pie>
             <Tooltip content={<this.CustomTooltip />} />
             <Legend />
         </PieChart>
         </div>
         <div id="areachart">
         <AreaChart width={730} height={250} data={this.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Product A" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Procuct B" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
         </div></div>
        )
    };
}

export default LineRechartComponent;