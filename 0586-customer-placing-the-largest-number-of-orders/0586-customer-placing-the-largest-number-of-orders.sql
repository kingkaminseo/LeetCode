# Write your MySQL query statement below
SELECT MAX(customer_number) AS customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(order_number) DESC
LIMIT 1;