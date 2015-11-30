package se.mikka.booking.resource;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import se.mikka.booking.model.Service;

@Stateless
@Path(value = "/services")
public class ServiceResource {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Service> getServices() {
		Service service = new Service();
		service.setName("Service 1");
		service.setPrice(new BigDecimal(650.00));
		service.setCurrency("SEK");
		List<Service> services = Arrays.asList(service);
		
		return services;
	}
	
	@GET
	@Path(value = "test")
	@Produces(MediaType.APPLICATION_JSON)
	public String testServices() {
		return "testing";
	}
}
