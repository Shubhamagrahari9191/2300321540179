function NotificationList({ notifications }) {
  return (
    <div>
      <h2>Top Notifications</h2>

      {notifications.map((n) => (
        <div key={n.id}>
          <h3>{n.message}</h3>
          <p>{n.type}</p>
        </div>
      ))}
    </div>
  );
}

export default NotificationList;