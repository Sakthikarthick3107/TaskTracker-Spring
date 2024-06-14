CREATE TABLE Todo (
    taskid SERIAL PRIMARY KEY,
    taskname VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'completed', 'withdrawn'))
);

drop table Todo;

SET timezone = 'UTC';
RESET timezone;

SELECT * FROM Todo;

truncate table Todo;

INSERT INTO Todo (taskname, description, status) VALUES ('Example Task', 'This is an example task description.', 'todo');

INSERT INTO Todo (taskname, description, status) 
VALUES 
    ('Example Task 2', 'Description for Example Task 2.', 'in_progress'),
    ('Example Task 3', 'Description for Example Task 3.', 'completed'),
    ('Example Task 4', 'Description for Example Task 4.', 'todo'),
    ('Example Task 5', 'Description for Example Task 5.', 'in_progress'),
    ('Example Task 6', 'Description for Example Task 6.', 'completed'),
    ('Example Task 7', 'Description for Example Task 7.', 'todo'),
    ('Example Task 8', 'Description for Example Task 8.', 'in_progress'),
    ('Example Task 9', 'Description for Example Task 9.', 'completed'),
    ('Example Task 10', 'Description for Example Task 10.', 'todo');
INSERT INTO Todo (taskname, description, status) VALUES ('Withhdrawn Task', 'This is an example withdrawn task.', 'withdrawn');
