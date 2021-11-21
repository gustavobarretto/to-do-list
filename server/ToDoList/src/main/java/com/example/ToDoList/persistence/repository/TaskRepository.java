package com.example.ToDoList.persistence.repository;

import com.example.ToDoList.persistence.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}
