package com.example.ToDoList.service;

import com.example.ToDoList.persistence.entities.Task;
import com.example.ToDoList.persistence.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    public String saveTask(Task task) {
        if(taskRepository.save(task) != null)
            return "OK";
        return null;
    }

    public List<Task> allTasks() {
        return taskRepository.findAll();
    }

    public String deleteTask(Task task) {
        if (taskRepository.findById(task.getId()) != null) {
            taskRepository.delete(task);
            return "OK";
        }
        return null;


    }

}
