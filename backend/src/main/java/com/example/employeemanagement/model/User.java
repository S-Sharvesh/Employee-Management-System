package com.example.employeemanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

/** This class represents the user entity. */
@Document(collection = "users")
public class User {

  /** The user ID. */
  @Id
  private String id;

  /** The username. */
  @Indexed(unique = true)
  private String username;

  /** The password. */
  private String password;

  // Getters and Setters

  /**
   * Gets the user ID.
   *
   * @return The user ID
   */
  public String getId() {
    return id;
  }

  /**
   * Sets the user ID.
   *
   * @param id The user ID
   */
  public void setId(String id) {
    this.id = id;
  }

  /**
   * Gets the username.
   *
   * @return The username
   */
  public String getUsername() {
    return username;
  }

  /**
   * Sets the username.
   *
   * @param username The username
   */
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   * Gets the password.
   *
   * @return The password
   */
  public String getPassword() {
    return password;
  }

  /**
   * Sets the password.
   *
   * @param password The password
   */
  public void setPassword(String password) {
    this.password = password;
  }
}
