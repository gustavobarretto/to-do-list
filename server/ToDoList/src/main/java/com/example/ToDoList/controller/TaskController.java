package com.example.ToDoList.controller;


import com.example.ToDoList.persistence.entities.Task;
import com.example.ToDoList.service.TaskService;
import jdk.javadoc.doclet.Reporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping()
public class TaskController {

    @Autowired
    TaskService taskService;

    @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping("/save_task")
    public ResponseEntity<String> save_task(@RequestBody Task task) {
        ResponseEntity<String> response = null;

        if(taskService.saveTask(task) != null)
            response = ResponseEntity.ok("Task saved with success");
        else
            response = ResponseEntity.internalServerError().body("Error during the save execution");

        return response;
    }

    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping("/alltasks")
    public ResponseEntity<List<Task>> searchAll() {
        return ResponseEntity.ok(taskService.allTasks());
    }

    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Task>> search_task_by_id(@PathVariable Integer id) {
        ResponseEntity<String> response = null;

        if(taskService.searchTask(id) != null)
            return ResponseEntity.ok(taskService.searchTask(id));
        else
            return null;

    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete_task (@PathVariable Integer id) {
        taskService.deleteTask(id);
        return ResponseEntity.ok("Task delete with success");

    }
}
