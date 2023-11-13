import { LineChart  as LChart ,Tooltip, Line ,CartesianGrid,XAxis,YAxis} from 'recharts';

const LineChart = () => {

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
      <h1 className='text-3xl font-bold text-center mb-4'>Line Chart</h1>
      <LChart width={1000} height={400} data={studentData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <Line dataKey={'mathMark'} stroke="purple"></Line>
        <Line dataKey={'physicsMark'} stroke="#8884d0"></Line>
        <CartesianGrid stroke="#ccc" />
        
      </LChart>
    </div>
  );
};

export default LineChart;