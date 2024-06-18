package com.progress.spring.services;

import com.progress.spring.models.Project;
import com.progress.spring.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getProjects(){
        return projectRepository.findAll();
    }
}
