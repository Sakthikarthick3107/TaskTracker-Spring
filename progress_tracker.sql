
CREATE TABLE Todo (
    taskid SERIAL PRIMARY KEY,
    taskname VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    startdate Timestamp DEFAULT CURRENT_TIMESTAMP,
    enddate DATE ,
	priority varchar(10) DEFAULT 'Low' CHECK (priority IN('Low' , 'Medium' , 'High')
    status VARCHAR(20) DEFAULT 'Todo' CHECK (status IN ('Todo', 'Progress', 'Completed', 'Withdrawn'))
);


INSERT INTO Todo (taskname, description, status, enddate) 
VALUES 
    ('Just another one without status', 'This is an example task description.', 'Todo', null), -- Replace null with appropriate enddate for each task
    ('Example Task 2', 'Description for Example Task 2.', 'Progress', '2024-06-30'),
    ('Example Task 3', 'Description for Example Task 3.', 'Completed', '2024-07-15'),
    ('Example Task 4', 'Description for Example Task 4.', 'Todo', null),
    ('Example Task 5', 'Description for Example Task 5.', 'Progress', '2024-07-10'),
    ('Example Task 6', 'Description for Example Task 6.', 'Completed', '2024-08-01'),
    ('Example Task 7', 'Description for Example Task 7.', 'Todo', null),
    ('Example Task 8', 'Description for Example Task 8.', 'Progress', '2024-07-20'),
    ('Example Task 9', 'Description for Example Task 9.', 'Completed', '2024-08-15'),
    ('Example Task 10', 'Description for Example Task 10.', 'Todo', null),
    ('Withhdrawn Task', 'This is an example withdrawn task.', 'Withdrawn', '2024-06-25');

select * from Todo;

truncate table Todo;