package com.example.employeemanagement.repository;

import com.example.employeemanagement.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

/** This interface represents the repository for users. */
public interface UserRepository extends MongoRepository<User, String> {
  Optional<User> findByUsername(String username);
}
