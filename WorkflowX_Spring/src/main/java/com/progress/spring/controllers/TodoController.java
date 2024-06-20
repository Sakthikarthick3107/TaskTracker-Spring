package com.progress.spring.controllers;

import com.progress.spring.models.Todo;
import com.progress.spring.services.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
@Tag(name = "Task API", description = "")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/{projectId}/tasks")
    @Operation(summary = "Project - All Tasks", description = "All Tasks of the Project")
    public List<Todo> getTasksByProject(@PathVariable String projectId) {
        return todoService.tasksByProject(projectId);
    }

    @GetMapping("/{projectId}/tasks/{taskId}")
    public Todo getTaskByProjectTaskId(@PathVariable String projectId, @PathVariable Integer taskId) {
        return todoService.taskByProjectTaskId(projectId, taskId);
    }

    @GetMapping("/{projectId}/tasks/search")
    @Operation(summary = "Filter Task by name and Priority")
    public List<Todo> filterProjectTasks(@PathVariable String projectId,
            @RequestParam(required = false) String priority, @RequestParam(required = false) String taskName) {
        return todoService.filterProjectTasks(projectId, priority, taskName);
    }

    @PostMapping("/newtask")
    @Operation(summary = "Create Task")
    @ResponseStatus(HttpStatus.CREATED)
    public Todo createNewTask(@RequestBody Todo newTask) {
        return todoService.createNewTask(newTask);
    }

    @PutMapping("task/put/{taskid}")
    @Operation(summary = "Update Task")
    public Todo updateTask(@PathVariable Integer taskid, @RequestBody Todo task) {
        return todoService.updateTask(task, taskid);
    }

    @DeleteMapping("task/delete/{taskid}")
    @Operation(summary = "Delete Task")
    public void deleteTask(@PathVariable Integer taskid) {
        todoService.deleteTask(taskid);
    }

    @PatchMapping("task/patch/{taskid}/status")
    @Operation(summary = "Update Task Status")
    public Todo updateTaskStatus(@PathVariable Integer taskid, @RequestBody String newStatus) {
        return todoService.updateTaskStatus(taskid, newStatus);
    }
}
