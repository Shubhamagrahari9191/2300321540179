function NotificationList({ notifications }) {
  return (
    <div className="notifications-container">
      {notifications.map((n) => (
        <div key={n.ID} className="notification-card">
          <span className={`badge ${n.Type.toLowerCase()}`}>
            {n.Type}
          </span>

          <h3>{n.Message}</h3>

          <p>
            <strong>ID:</strong> {n.ID}
          </p>

          <p>
            <strong>Time:</strong> {n.Timestamp}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NotificationList;