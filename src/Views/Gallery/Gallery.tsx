import { StandardHeader } from "../../Single/StandardHeader";
import React, { useEffect, useState } from 'react';


// Define the types for the grouped dates structure
type GroupedDates = {
    [year: number]: {
        [month: string]: Date[];
    };
};

// Function to generate dates from January 1, 2020, to the current date
const generateDates = (): Date[] => {
    const startDate = new Date(2020, 0, 1); // January 1, 2020
    const today = new Date();
    const dates: Date[] = [];

    let currentDate = startDate;
    while (currentDate <= today) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    dates.sort((a, b) => b.getTime() - a.getTime());

    return dates;
};

// Function to group dates by month and year
const groupDatesByMonthAndYear = (dates: Date[]): GroupedDates => {
    const groupedDates: GroupedDates = {};

    dates.forEach(date => {
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' }); // Full month name

        if (!groupedDates[year]) {
            groupedDates[year] = {};
        }

        if (!groupedDates[year][month]) {
            groupedDates[year][month] = [];
        }

        groupedDates[year][month].push(date);
    });

    return groupedDates;
};

// React component to display the list of dates
const DateList: React.FC = () => {
    const [groupedDates, setGroupedDates] = useState<GroupedDates>({});

    useEffect(() => {
        const dates = generateDates();
        const grouped = groupDatesByMonthAndYear(dates);
        setGroupedDates(grouped);
    }, []);

    return (
        <div>
            {Object.keys(groupedDates)
                .sort((a, b) => Number(b) - Number(a)).map(year => (
                    <div key={year} className="text-xl">
                        <h2>{year}</h2>
                        {Object.keys(groupedDates[+year]).map(month => (
                            <div key={month} style={{ marginLeft: '20px' }}>
                                <h3>{month}</h3>
                                <ul>
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};






export const Gallery = () => {
    return (<StandardHeader title={"Gallery"} date={"2024"}
        content={< DateList />} />)
}
