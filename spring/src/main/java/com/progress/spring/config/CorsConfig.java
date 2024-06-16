package com.progress.spring.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173" , "https://3228-183-82-205-52.ngrok-free.app")
                .allowedMethods("GET" , "POST" , "PUT" , "DELETE" , "PATCH")
                .allowedHeaders("*")
                .allowCredentials(false);
        ;

    }
}
