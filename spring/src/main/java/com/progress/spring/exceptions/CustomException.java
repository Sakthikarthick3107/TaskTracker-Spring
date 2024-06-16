package com.progress.spring.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomException {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> handleTaskNotFoundException(NotFoundException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"err\": \"" + ex.getMessage() + "\"}");
    }
}
