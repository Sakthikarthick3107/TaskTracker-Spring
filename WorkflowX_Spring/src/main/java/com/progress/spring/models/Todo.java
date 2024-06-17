package com.progress.spring.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taskid;

    private String taskname;
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "startdate", nullable = false, updatable = false)
    private Timestamp startDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "enddate")
    private Date endDate;

    private String priority;
    private String status;

    @PrePersist
    protected void onCreate() {
        startDate = new Timestamp(System.currentTimeMillis());
    }
}
