package com.folio.controller;

import com.folio.dao.CustomerDao;
import com.folio.dao.CustomerOrderDao;
import com.folio.dao.OrderLineDao;
import com.folio.model.Customer;
import com.folio.model.OrderLine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController // should be sent back as JSON
public class CustomerController {

    @Autowired
    CustomerDao customerDao;

    @Autowired
    CustomerOrderDao customerOrderDao;

    @Autowired
    OrderLineDao orderLineDao;

    @PostMapping("/sign-in")
    public ResponseEntity<Map<String, Object>> signInCustomer(@RequestBody Map<String, Object> request) {
        try {
            // get specific JSON values from request
            String email = (String) request.get("email");
            String password_ = (String) request.get("password_");

            // check if Customer exists in database
            Customer authenticatedCustomer = customerDao.authenticateCustomer(email, password_);

            if (authenticatedCustomer != null) {
                // retrieve customer orders in basket

                Map<String, Object> response = new HashMap<>();
                response.put("id", authenticatedCustomer.getId());
                response.put("forename", authenticatedCustomer.getForename());                
                return ResponseEntity.ok(response);

            } else {
                return ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body(Collections.singletonMap("error", "Sign-in failed"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "Sign-in failed"));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerCustomer(@RequestBody Customer customer) {
        try {
            customerDao.createCustomer(customer);
            return ResponseEntity.ok("Registration successful");
        } catch (DuplicateKeyException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already registered");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed");
        }
    }
}
