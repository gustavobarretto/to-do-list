package com.example.ToDoList.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name="TASKS")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "TASK_TITLE")
    private String title;

    @Column(name = "TASK_DESCRIPTION")
    private String description;

    @Column(name = "TASK_COMPLETED")
    private Boolean isCompleted;

}
