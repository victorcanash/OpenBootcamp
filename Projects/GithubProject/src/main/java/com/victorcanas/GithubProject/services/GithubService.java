package com.victorcanas.GithubProject.services;

import com.victorcanas.GithubProject.dto.RepositoryDto;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;

@Service
public class GithubService {

    public ArrayList<RepositoryDto> getRepositories(String username) throws IOException, InterruptedException {
        ArrayList<RepositoryDto> repositories = new ArrayList<>();
        var request = HttpRequest.newBuilder().uri(URI.create("https://api.github.com/users/" + username + "/repos"))
                .GET()
                .build();

        try {
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200){
                JSONArray jsonArray = new JSONArray(response.body());
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject = new JSONObject(jsonArray.get(i).toString());
                    RepositoryDto repository = new RepositoryDto(
                            jsonObject.getLong("id"),
                            jsonObject.getString("name"),
                            jsonObject.getString("html_url")
                    );
                    repositories.add(repository);

                }
            }

        } catch (IOException | InterruptedException e){
            System.out.println(e.getMessage());
            throw e;
        }

        return repositories;
    }
}
