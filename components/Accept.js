import { google, outlook, office365, yahoo, ics } from "calendar-link";
import { FaGoogle, FaRegCalendar, FaYahoo } from "react-icons/fa";
import { SiMicrosoftoffice, SiMicrosoftoutlook } from "react-icons/si";

// Set event as an object
const event = {
  title: "My birthday party",
  description: "Be there!",
  start: "2019-12-29 18:00:00 +0100",
  duration: [3, "hour"],
};

const links = [
  {
    icon: <FaGoogle />,
    link: google(event),
    name: "Google",
  },
  {
    icon: <SiMicrosoftoutlook />,
    link: outlook(event),
    name: "Outlook",
  },
  {
    icon: <SiMicrosoftoffice />,
    link: office365(event),
    name: "Office 365",
  },
  {
    icon: <FaYahoo />,
    link: yahoo(event),
    name: "Yahoo",
  },
  {
    icon: <FaRegCalendar />,
    link: ics(event),
    name: "ICS",
  },
];

const Accept = ({ text }) => {
  return (
    <div>
      <h1 className="text-2xl my-8 w-full text-center">{text}</h1>

      <h2 className="w-full text-center text-xl font-bold my-4">
        Add to your calendar
      </h2>
      <div className="grid  grid-cols-3 md:grid-cols-5 space-evenly gap-2">
        {links.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl flex flex-col items-center hover:bg-gray-50 text-center opacity-80 border p-2 border-gray-200 rounded"
          >
            {item.icon}
            <span className="text-md">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Accept;
