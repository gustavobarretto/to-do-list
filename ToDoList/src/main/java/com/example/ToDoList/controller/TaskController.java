package com.example.ToDoList.controller;


import com.example.ToDoList.persistence.entities.Task;
import com.example.ToDoList.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    TaskService taskService;

    @PostMapping("/save_task")
    public ResponseEntity<String> save_task(@RequestBody Task task) {
        ResponseEntity<String> response = null;

        if(taskService.saveTask(task) != null)
            response = ResponseEntity.ok("Task saved with success");
        else
            response = ResponseEntity.internalServerError().body("Error during the save execution");

        return response;
    }

    @GetMapping("/alltasks")
    public ResponseEntity<List<Task>> searchAll() {
        return ResponseEntity.ok(taskService.allTasks());
    }

    @DeleteMapping("/delete_task")
    public ResponseEntity<String> delete_task (@RequestBody Task task) {
        ResponseEntity<String> response = null;

        if(taskService.deleteTask(task) != null)
            response = ResponseEntity.ok("Task delete with success");
        else
            response = ResponseEntity.internalServerError().body("Error during the delete execution");

        return response;
    }
}
