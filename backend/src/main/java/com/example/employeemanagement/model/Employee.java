package com.example.employeemanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * This class represents an Employee entity. Each employee has an ID, first name, last name, email,
 * department, and age.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "employees")
public class Employee {

  /** The ID of the employee. It is unique and generated automatically. */
  @Id
  private String id;

  /** The first name of the employee. */
  private String firstName;

  /** The last name of the employee. */
  private String lastName;

  /** The email of the employee. */
  private String email;

  /** The department of the employee. */
  @DBRef
  @JsonBackReference
  private Department department;

  /** The age of the employee. */
  private int age;
}
