package com.example.ToDoList.service;

import com.example.ToDoList.persistence.entities.Task;
import com.example.ToDoList.persistence.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Task> searchTask(Integer id) {
        return taskRepository.findById(id);
    }

    public void deleteTask(Integer id) {
        taskRepository.deleteById(id);
    }

}
