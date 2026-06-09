import { useEffect, useState } from "react";
import NotificationList from "./NotificationList";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("http://4.224.186.213/evaluation-service/notifications", {
      headers: {
        Authorization: `Bearer YOUR_TOKEN`
      }
    })
      .then((res) => res.json())
      .then((data) => setNotifications(data.notifications))
      .catch((err) => console.log(err));
  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.Type === filter);

  return (
    <div>
      <h1>Notification Dashboard</h1>

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Placement")}>Placement</button>
        <button onClick={() => setFilter("Result")}>Result</button>
        <button onClick={() => setFilter("Event")}>Event</button>
      </div>

      <NotificationList notifications={filteredNotifications} />
    </div>
  );
}

export default App;