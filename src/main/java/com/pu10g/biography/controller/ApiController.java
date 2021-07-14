package com.pu10g.biography.controller;

import com.pu10g.biography.model.rss.Rss;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.bind.JAXB;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;

@RestController
@RequestMapping("/api/v1")
public class ApiController {
  @GetMapping("/drupal")
  public ResponseEntity<Rss> get() {
    HttpClient cli = HttpClient.newBuilder()
      .version(HttpClient.Version.HTTP_2)
      .build();
    // @todo evacuation url
    HttpRequest req = HttpRequest.newBuilder()
      .uri(URI.create("https://pu10g.com/rss.xml"))
      .build();

    try (var stream = cli.send(req, BodyHandlers.ofInputStream()).body()) {
      return ResponseEntity.ok(JAXB.unmarshal(stream, Rss.class));
    } catch (IOException | InterruptedException e) {
      e.printStackTrace();
      return ResponseEntity
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(new Rss());
    }
  }
}
