package com.example.ToDoList.entities;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Task {

    private Integer id;
    private String title;
    private String description;
    private Boolean isCompleted;

    public Task(){}

    public Task(String title, String description, Boolean isCompleted) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
    }
}
