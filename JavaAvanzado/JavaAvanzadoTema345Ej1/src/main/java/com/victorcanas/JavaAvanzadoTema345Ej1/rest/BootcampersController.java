package com.victorcanas.JavaAvanzadoTema345Ej1.rest;

import org.springframework.stereotype.Controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("api/bootcampers")
@Controller
public class BootcampersController {

    @GET
    @Path("/hello")
    public String sayHello(){
        return "hello";
    }

    @GET
    @Path("/bye")
    public String sayBye(){
        return "bye";
    }
}
