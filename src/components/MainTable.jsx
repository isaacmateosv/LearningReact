import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CSVTable = () => {
    const [headers, setHeaders] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('./src/data/data.csv');
        const reader = response.body.getReader();
  
        const result = await reader.read();
        const data = new TextDecoder('utf-8').decode(result.value);
        
        Papa.parse(data, {
          complete: function(results) {
            setHeaders(results.data[0]);
          }
        });
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h2>CSV Table</h2>
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Render your CSV data rows here */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CSVTable;
  