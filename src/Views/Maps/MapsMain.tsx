import { useState } from "react";
import { MapDisplay } from "./MapDisplay";
import {
  sportEntries,
  sportColors,
  blogPosts,
  tripTransportColors,
  MapEntry,
} from "../../data/datatype/data_maps";
import { PicsHeader, StandardHeader } from "../../Single/StandardHeader";

// Utility: convert "Month Year" or "Month YYYY" to a real Date
function parseTravelDate(dateStr: string): Date {
  // Examples handled: "December 2025", "Jan 2026", "2005"
  const parts = dateStr.split(" ");
  if (parts.length === 1) {
    // only year
    return new Date(parseInt(parts[0]), 0, 1);
  }
  const [monthStr, yearStr] = parts;
  const year = parseInt(yearStr);
  const month = new Date(`${monthStr} 1, ${year}`).getMonth(); // 0–11
  return new Date(year, month, 1);
}

// Today’s date
const today = new Date();

export const getAlreadyHappenedPosts = (posts: MapEntry[]): MapEntry[] => {
  return posts.filter((post) => {
    const postDate = parseTravelDate(post.date);
    return postDate < today;
  });
};

type MapMode = "Trips" | "Sports" | "Gap Year 2026" | "All";

export const MapSelector = ({
  currentMode,
  setCurrentMode,
}: {
  currentMode: MapMode;
  setCurrentMode: (mode: MapMode) => void;
}) => {
  const [open, setOpen] = useState(false);

  const options: MapMode[] = ["Trips", "Sports", "Gap Year 2026", "All"];

  return (
    <div className="relative inline-block text-left">
      {/* Main button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex justify-between items-center w-40 px-4 py-2 text-sm font-medium text-white bg-slate-500 border border-gray-300 rounded-md shadow-sm"
      >
        {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)}
        <svg
          className="w-4 h-4 ml-2 -mr-1 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right bg-slate-500 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setCurrentMode(option);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentMode === option
                    ? "bg-slate-500 text-white-900 font-semibold"
                    : "text-white hover:bg-gray-600"
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const MapsMain = () => {
  const [category, setCategory] = useState<MapMode>("All");
  // Get legend based on category
  const australiaAsiaPosts = blogPosts.filter((entry) => {
    if (!entry.collection) return false; // skip posts without collection
    return entry.collection.some((c) => c.trim() === "GapYear2026");
  });
  // Get entries based on category
  const getEntries = (): MapEntry[] => {
    switch (category) {
      case "Sports":
        return sportEntries;
      case "Trips":
        return getAlreadyHappenedPosts(blogPosts);
      case "Gap Year 2026":
        return australiaAsiaPosts;
      // You can add your location dataset here
      case "All":
        return [...sportEntries, ...getAlreadyHappenedPosts(blogPosts)];
      default:
        return [...sportEntries, ...blogPosts];
    }
  };

  const getLegend = () => {
    switch (category) {
      case "Sports":
        return sportColors;
      case "Trips":
        return tripTransportColors;
      case "Gap Year 2026":
        return tripTransportColors;
      case "All":
      default:
        return {
          ...sportColors,
          ...tripTransportColors,
        };
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Map display (base layer) */}
      <MapDisplay
        title=""
        entries={getEntries()}
        legend={getLegend()}
        initialCenter={[31, -7]}
        initialZoom={3}
      />

      {/* Overlay content */}
      <div className="absolute top-4 right-4 z-10">
        <MapSelector
          currentMode={category.toLowerCase() as any}
          setCurrentMode={(mode) =>
            setCategory(
              (mode.charAt(0).toUpperCase() + mode.slice(1)) as MapMode
            )
          }
        />
      </div>
    </div>
  );
};

// export const MapsMain = () => {
//     return <PicsHeader title={" "} date={""} content={<MapsMainComponent />} />;
// };
