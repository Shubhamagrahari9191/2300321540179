# Stage 1

1. Store notifications in an array.
2. Filter unread notifications.
3. Assign priority:
   - Placement = 3
   - Result = 2
   - Event = 1
4. Sort by priority and recency.
5. Display top 10 notifications.

Time Complexity: O(n log n)

Future Optimization:
Use a Min Heap of size 10 to efficiently maintain the top 10 notifications as new notifications arrive.