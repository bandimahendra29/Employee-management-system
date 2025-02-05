package com.mahi.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mahi.sms.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
