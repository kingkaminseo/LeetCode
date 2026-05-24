# Write your MySQL query statement below
SELECT 
    project_id, 
    ROUND(AVG(experience_years), 2) AS average_years
FROM
    (
        SELECT 
            p.project_id, 
            e.experience_years
        FROM Project as p join Employee e
        ON p.employee_id = e.employee_id
    ) AS t
GROUP BY project_id
HAVING AVG(experience_years);