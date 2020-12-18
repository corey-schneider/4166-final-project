//Thank you to https://stackoverflow.com/questions/60433572/how-to-use-axios-api-with-chart-js-and-react-js

import React, { useState, useEffect } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import axios from "axios";

function ChartPage() {

 const [data, setData] = useState([]);
 const [posts, setPosts] = useState([]);

 let title = [];
 let budget = [];
 let color = [];

 useEffect(() => {

   axios.get("http://104.236.19.163:3001/api/budget").then(res => {
       const personalBudget = res.data;
       console.log(res.data);
     setPosts(personalBudget);

     personalBudget.forEach(record => {
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
       <br/><hr/><br/>
     <Pie
     data={data.Data}
     />
     <hr/>
     
     <Bar
     data={data.Data}
     />
     <hr/>
     
     <Line
     data={data.Data}
     />
   </div>
 );
}

export default ChartPage;