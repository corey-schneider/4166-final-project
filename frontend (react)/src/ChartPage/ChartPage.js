//Thank you to https://stackoverflow.com/questions/60433572/how-to-use-axios-api-with-chart-js-and-react-js

import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

function ChartPage() {

 const [data, setData] = useState([]);
 const [posts, setPosts] = useState([]);

 let title = [];
 let budget = [];
 let color = [];

 useEffect(() => {

   axios.get("http://localhost:3001/api/budget").then(res => {
       const ipl = res.data;
       console.log(res.data);
     setPosts(ipl);

     ipl.forEach(record => {
         title.push(record.title);
         budget.push(record.budget);
         color.push(record.backgroundColor);
       });


     setData({
       Data: {
         labels: title,
         datasets: [
           {
             data: budget,
             backgroundColor: color
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