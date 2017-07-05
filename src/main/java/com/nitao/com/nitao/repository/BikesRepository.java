package com.nitao.com.nitao.repository;

import com.nitao.model.Bike;
import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface BikesRepository extends CrudRepository<Bike, Long>{
    List<Bike> findByModel(String model);
}
