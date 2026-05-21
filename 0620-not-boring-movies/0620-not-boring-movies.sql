# Write your MySQL query statement below
SELECT * FROM Cinema
WHERE 1 = id % 2 && description != 'boring'
ORDER BY rating DESC;