import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
// import { alpha } from '@material-ui/core/styles';

const Stats = ({memes}: any) => {
    // console.log({memes});
    const dates = [...Array(7)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return new Date(d).toLocaleDateString("en-US");
    })
    // console.log({dates});
    // Sample data
    const data: any[] = []; // { argument: '3/9/2021', value: 10 },

    const counts: any = {};
    const sampleArray = memes?.map((memo: any) => memo?.createdAt);
    sampleArray.forEach(function (x: any) { counts[x] = (counts[x] || 0) + 1; });
    // console.log({counts});
    // const keys = Object.keys(counts);
    // keys?.map((key: any) => {
    //     data.push({argument: key, value: counts[key]})
    // });
    dates?.map((date: any) =>{
        data.push({argument: date, value: counts[date] || 0});
        // counts[date] && data.push({argument: date, value: counts[date]});
    });
    // console.log({data});
    
    return (
        <div style={{height: '90vh', padding: "150px"}} className="">
            <div className="d-flex justify-content-center">
                <h3 className="text-center mb-2 border rounded p-3">Stats</h3>
            </div>
            <p className="text-center mb-4">Memo uploaded per day last 7 days</p>
            <Paper className="my-0 p-2">
                <Chart
                    data={data}
                >
                    <ArgumentAxis />
                    <ValueAxis />
                    <BarSeries valueField="value" argumentField="argument" />
                </Chart>
            </Paper>
        </div>
    );
}

export default Stats;