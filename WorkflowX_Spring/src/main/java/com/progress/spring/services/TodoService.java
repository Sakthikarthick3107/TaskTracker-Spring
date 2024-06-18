package com.progress.spring.services;


import com.progress.spring.exceptions.NotFoundException;
import com.progress.spring.models.Todo;
import com.progress.spring.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> tasksByProject(String id){
        return todoRepository.getTasksByProject(id);
    }

    public Todo taskByProjectTaskId(String project , Integer taskId){
        Optional<Todo> getTodo = todoRepository.getTaskByProjectTaskId(project , taskId);
        if(getTodo.isPresent()){
            return  getTodo.get();
        }
        throw new NotFoundException("Task Not Found");
    }

    public List<Todo> allTasks(){
        return todoRepository.findAll();
    }

    public Todo getTaskById(Integer id) {
        Optional<Todo> getTodo = todoRepository.findById(id);
        if (getTodo.isPresent()) {
            return getTodo.get();
        }
        throw new NotFoundException("Task Not Found");
    }

    public List<Todo> filterProjectTasks(String project , String priority , String taskName){
        return todoRepository.filterProjectTasks(project , priority , taskName);
    }

    public Todo createNewTask(Todo newTodo){
        return todoRepository.save(newTodo);
    }

    public Todo updateTask(Todo newTask , Integer taskid){
        Todo getTask =todoRepository.findById(taskid).orElseThrow(() -> new RuntimeException("Task Not Found"));
        getTask.setTaskname(newTask.getTaskname());
        getTask.setDescription(newTask.getDescription());
        getTask.setPriority(newTask.getPriority());
        getTask.setEndDate(newTask.getEndDate());
        getTask.setStatus(newTask.getStatus());
        return todoRepository.save(getTask);
    }

    public void deleteTask(Integer  taskid){
        Todo getTask =todoRepository.findById(taskid).orElseThrow(() -> new NotFoundException("Task Not Found"));
        todoRepository.delete(getTask);
    }

    public Todo updateTaskStatus(Integer taskId , String newStatus){
        Todo getTask = todoRepository.findById(taskId).orElseThrow(() -> new NotFoundException("Task Not Found"));
        getTask.setStatus(newStatus);
        return todoRepository.save(getTask);
    }

}
