package com.example.employeemanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.List;

/** This class represents a Department entity. Each department has an ID and a name. */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "departments")
public class Department {

  /** The ID of the department. It is unique and generated automatically. */
  @Id
  private String id;

  /** The name of the department. */
  private String name;

  /** The list of employees in the department. */
  @DBRef
  @JsonManagedReference
  private List<Employee> employees;
}
