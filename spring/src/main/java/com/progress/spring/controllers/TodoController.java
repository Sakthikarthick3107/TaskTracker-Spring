package com.progress.spring.controllers;

import com.progress.spring.models.Todo;
import com.progress.spring.services.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@Tag(name="Task API" , description = "")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    @Operation(summary = "All Tasks")
    public List<Todo> allTasks(){
        return todoService.allTasks();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Task by Id")
    public Todo getTaskById(@PathVariable Integer id){
        return todoService.getTaskById(id);
    }

    @PostMapping
    @Operation(summary = "Create Task")
    @ResponseStatus(HttpStatus.CREATED)
    public Todo createNewTask(@RequestBody Todo newTask){
        return todoService.createNewTask(newTask);
    }

    @PutMapping("/{taskid}")
    @Operation(summary = "Update Task")
    public Todo updateTask(@PathVariable Integer taskid , @RequestBody Todo task){
        return todoService.updateTask(task,taskid);
    }

    @DeleteMapping("/{taskid}")
    @Operation(summary = "Delete Task")
    public void deleteTask(@PathVariable Integer taskid){
        todoService.deleteTask(taskid);
    }

    @PatchMapping("/{taskid}/status")
    @Operation(summary = "Update Task Status")
    public Todo updateTaskStatus(@PathVariable Integer taskid ,@RequestBody String newStatus){
        return todoService.updateTaskStatus(taskid , newStatus);
    }
}
