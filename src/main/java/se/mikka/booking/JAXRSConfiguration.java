package se.mikka.booking;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import se.mikka.booking.resource.ServiceResource;

/**
 * Configures a JAX-RS endpoint. Delete this class, if you are not exposing
 * JAX-RS resources in your application.
 *
 * @author nguyen
 */
@ApplicationPath("resources")
public class JAXRSConfiguration extends Application {
	
	@Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet<Class<?>>();
        addRestResourceClasses(resources);
        return resources;
    }
	
	private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(ServiceResource.class);
    }
}
