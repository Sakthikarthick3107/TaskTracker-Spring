
CREATE TABLE Todo (
    taskid SERIAL PRIMARY KEY,
    taskname VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    startdate Timestamp DEFAULT CURRENT_TIMESTAMP,
    enddate DATE ,
	priority varchar(10) DEFAULT 'Low' CHECK (priority IN('Low' , 'Medium' , 'High')
    status VARCHAR(20) DEFAULT 'Todo' CHECK (status IN ('Todo', 'Progress', 'Completed', 'Withdrawn'))
);
	
ALTER TABLE Todo ADD COLUMN project VARCHAR(100) DEFAULT 'PR-2';
ALTER TABLE Todo ADD CONSTRAINT fk_project FOREIGN KEY (project) REFERENCES Project(prid);



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
	
CREATE SEQUENCE task_id_seq START 1;

CREATE OR REPLACE FUNCTION generate_task_id() RETURNS TEXT AS $$
DECLARE
    next_id INTEGER;
    task_id TEXT;
BEGIN
    SELECT nextval('task_id_seq') INTO next_id;
    task_id := 'PR-' || next_id::TEXT;
    RETURN task_id;
END;
$$ LANGUAGE plpgsql;

SELECT generate_task_id();

CREATE TABLE Project(
	prid varchar(100) primary key,
	name varchar(50) not null ,
	description varchar(200) ,
	createdat timestamp default CURRENT_TIMESTAMP,
	startdate DATE,
	enddate DATE
)

insert into Project(prid , name , description , startdate , enddate)values
	(generate_task_id() , 'My Todo Project' , 'Testing Project for this' , '2024-06-12' , '2024-07-20')

insert into Project(prid , name , description , startdate , enddate)values
	(generate_task_id() , 'Dummy Project' , 'Side one for separating both' ,'2024-06-12' , '2024-12-12' )
	
select * from Project 
select t from Todo t where t.project = 'PR-2';