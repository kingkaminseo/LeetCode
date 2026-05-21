# Write your MySQL query statement below
SELECT MAX(num) AS num
FROM (
    SELECT num as num FROM MyNumbers
    GROUP BY num
    HAVING COUNT(*) = 1
) AS t;
