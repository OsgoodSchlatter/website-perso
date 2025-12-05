import axios from "axios";

export const handler = async () => {
    const ICS_URL = "https://calendar.google.com/calendar/ical/c_815978e488760af642fd6ace5f3c7bf45404dffbf9ddbf2a9f2b79fd330311fd%40group.calendar.google.com/public/basic.ics";

    try {
        const response = await axios.get(ICS_URL);
        const icsText = response.data;

        // Simple parse example: extract summary, start, end
        const events = icsText.split("BEGIN:VEVENT").slice(1).map(ev => {
            const start = ev.match(/DTSTART.*:(.*)/)?.[1] ?? "";
            const end = ev.match(/DTEND.*:(.*)/)?.[1] ?? "";
            const summary = ev.match(/SUMMARY:(.*)/)?.[1] ?? "";
            return { start, end, summary };
        });

        return {
            statusCode: 200,
            body: JSON.stringify(events),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch calendar" }),
        };
    }
};
