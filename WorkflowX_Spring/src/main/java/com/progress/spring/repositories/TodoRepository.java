package com.progress.spring.repositories;

import com.progress.spring.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Integer> {

    @Query("SELECT t from Todo t WHERE t.project = :project")
    List<Todo> getTasksByProject(@Param("project") String project);

    @Query("SELECT t from Todo t WHERE t.project = :project AND t.taskid = :taskid")
    Optional<Todo> getTaskByProjectTaskId(@Param("project") String project , @Param("taskid") Integer id);

    @Query("SELECT t FROM Todo t WHERE " +
            "t.project = :project AND" +
            "(:priority IS NULL OR :priority = '' OR t.priority = :priority) AND " +
            "(:taskname IS NULL OR :taskname = '' OR LOWER(t.taskname) LIKE LOWER(CONCAT('%', :taskname, '%')))")
    List<Todo> filterProjectTasks(@Param("project") String project ,@Param("priority") String priority, @Param("taskname") String taskname);



}
