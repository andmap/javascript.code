/*

select m.id, m.firstName, m.lastName, e.avgSalary from employee as m
INNER JOIN
(
    select managerId, avg(salary) as avgSalary from employee
    where managerId is not null
    group by managerId

) AS e  ON m.id = e.managerId

where m.managerId is null

*/