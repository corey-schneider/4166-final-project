//Thank you to https://stackoverflow.com/questions/60433572/how-to-use-axios-api-with-chart-js-and-react-js

import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

function ChartPage() {

 const [data, setData] = useState([]);
 const [posts, setPosts] = useState([]);

 let title1 = [];
 let budget1 = [];

 useEffect(() => {

   axios.get("http://localhost:3001/budget").then(res => {
       const ipl = res.data.myBudget;
       console.log(res.data.myBudget);
     setPosts(ipl);

     ipl.forEach(record => {
         title1.push(record.title);
         budget1.push(record.budget);
       });


     setData({
       Data: {
         labels: title1,
         datasets: [
           {
             data: budget1,
             backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#f542e9',
                '#42f55d',
                '#42f5dd'
             ]
           }
         ]
       }
     });

   });
 }, []);
 return (
   <div>
       <h1>Hello from ChartPage</h1>
     <Pie
     data={data.Data}
     />
   </div>
 );
}

export default ChartPage;