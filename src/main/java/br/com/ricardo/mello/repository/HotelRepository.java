package br.com.ricardo.mello.repository;

import br.com.ricardo.mello.domain.Hotel;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Hotel entity.
 */
@SuppressWarnings("unused")
public interface HotelRepository extends JpaRepository<Hotel,Long> {

}
