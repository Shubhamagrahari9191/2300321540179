import NotificationList from "./NotificationList";
import { notifications } from "./data";

function App() {
  const weights = {
    placement: 3,
    result: 2,
    event: 1,
  };

  const topNotifications = notifications
    .filter((n) => n.unread)
    .sort((a, b) => {
      const scoreA =
        weights[a.type] * 1000000 + new Date(a.timestamp).getTime();

      const scoreB =
        weights[b.type] * 1000000 + new Date(b.timestamp).getTime();

      return scoreB - scoreA;
    })
    .slice(0, 10);

  return (
    <div>
      <h1>Notification Dashboard</h1>
      <NotificationList notifications={topNotifications} />
    </div>
  );
}

export default App;