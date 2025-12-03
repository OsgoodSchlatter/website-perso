
import React, { useEffect, useState } from "react";
import axios from "axios";

interface EventRecord {
    start: string;
    end: string;
    summary: string;
}

export const StudioSchedule = () => {
    const [events, setEvents] = useState<EventRecord[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:8888/.netlify/functions/fetchCalendar");
                // const response = await axios.get("/.netlify/functions/fetchCalendar");
                setEvents(response.data);
            } catch (err) {
                console.error("Error fetching events:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Studio Schedule</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {events.map((event, i) => (
                        <li key={i}>
                            {event.summary}: {event.start} → {event.end}
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex justify-center">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=c_815978e488760af642fd6ace5f3c7bf45404dffbf9ddbf2a9f2b79fd330311fd@group.calendar.google.com&ctz=Europe%2FParis&mode=WEEK"
                    style={{ border: 0 }}
                    width="800"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="Studio Calendar"
                ></iframe>
            </div>
        </div>
    );
};
