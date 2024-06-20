package com.progress.spring.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Project")
public class Project {
    @Id
    @Column(name = "prid", nullable = false, updatable = false)
    private String projectId;

    @Column(name = "name", nullable = false, updatable = false)
    private String projectName;
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "createdat", nullable = false, updatable = false)
    private Timestamp createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "startdate")
    private Date startDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "enddate")
    private Date endDate;

}
