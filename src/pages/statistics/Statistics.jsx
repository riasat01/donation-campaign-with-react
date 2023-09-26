import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {

    const [numOfDonations, setNumOfDonations] = useState(0);
    const [chart, setchart] = useState([]);
    // const [donations, setDonations] = useState([])
    const donations = JSON.parse(localStorage.getItem(`donations`));
    useEffect(() => {

        donations && setNumOfDonations(donations.length);
        const data = [
            { name: 'restOfDonation', value: (12 - numOfDonations) },
            { name: 'numOfDonationsvalue', value: numOfDonations }
        ];
        setchart(data);
    }, [numOfDonations])



    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100.00).toFixed(2)}%`}
            </text>
        );
    };



    return (
        <>
            {
                donations ?
                    <section>
                        <div className="my-24 md:my-0 relative h-screen flex justify-center items-center">
                            <PieChart className="hidden md:block" width={500} height={500}>
                                <Pie
                                    data={chart}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={250}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {chart.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>

                            <PieChart className="block md:hidden" width={320} height={320}>
                                <Pie
                                    data={chart}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={160}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {chart.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                        <div className="flex justify-center items-center mb-12 gap-2 md:gap-6">
                            <p>Your Donation</p>
                            <div className="h-3 w-12 md:w-24 bg-[#00C49F]"></div>
                            <p>Total Donation</p>
                            <div className="h-3 w-12 md:w-24 bg-[#FF444A]"></div>
                        </div>
                    </section>

                    :
                    <section className="h-screen flex justify-center items-center">
                        <p>No Data Available</p>
                    </section>
            }
        </>

    );
};

export default Statistics;