
import { BarChart as BChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChart = () => {
  const studentData = [
  { name: "Alice", mathMark: 85, physicsMark: 78 },
  { name: "Bob", mathMark: 92, physicsMark: 88 },
  { name: "Charlie", mathMark: 78, physicsMark: 75 },
  { name: "David", mathMark: 90, physicsMark: 82 },
  { name: "Eve", mathMark: 88, physicsMark: 81 },
  { name: "Frank", mathMark: 95, physicsMark: 89 },
  { name: "Grace", mathMark: 79, physicsMark: 76 },
  { name: "Hannah", mathMark: 87, physicsMark: 84 },
  { name: "Isaac", mathMark: 84, physicsMark: 80 },
  { name: "Jessica", mathMark: 91, physicsMark: 86 }
];
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mb-4'>Bar Chart</h1>
      
        <BChart width={1100} height={400} data={studentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mathMark" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="physicsMark" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BChart>
     
    </div>
  );
};

export default BarChart;