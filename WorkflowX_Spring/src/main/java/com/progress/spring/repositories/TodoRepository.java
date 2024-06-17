package com.progress.spring.repositories;

import com.progress.spring.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Integer> {

    @Query("SELECT t from Todo t WHERE t.priority = :priority")
    List<Todo> filterTaskByPriority(@Param("priority") String priority);

    @Query("SELECT t FROM Todo t WHERE LOWER(t.taskname) LIKE LOWER(CONCAT('%', :taskname, '%'))")
    List<Todo> filterTaskByTaskName(@Param("taskname") String taskname);

    @Query("SELECT t from Todo t WHERE t.priority = :priority AND LOWER(t.taskname) LIKE LOWER(CONCAT('%', :taskname, '%'))")
    List<Todo> filterTaskByNameAndPriority(@Param("priority") String priority , @Param("taskname") String taskname);

}
