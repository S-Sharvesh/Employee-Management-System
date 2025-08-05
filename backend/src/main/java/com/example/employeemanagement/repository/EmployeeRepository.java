package com.example.employeemanagement.repository;

import com.example.employeemanagement.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/** This interface represents a repository for employees. */
@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

  /**
   * Find all employees with their departments.
   *
   * @return List of all employees with their departments
   */
  List<Employee> findAll();
}
