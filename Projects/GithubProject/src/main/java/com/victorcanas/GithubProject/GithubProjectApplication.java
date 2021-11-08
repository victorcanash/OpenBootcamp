package com.victorcanas.GithubProject;

import com.victorcanas.GithubProject.dto.RepositoryDto;
import com.victorcanas.GithubProject.services.GithubService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Scanner;
import java.util.ArrayList;


@SpringBootApplication
public class GithubProjectApplication {

	public static void main(String[] args) {
		ApplicationContext app = SpringApplication.run(GithubProjectApplication.class, args);
		GithubService githubService = app.getBean(GithubService.class);
		Scanner scanner = new Scanner(System.in);

		System.out.println("Welcome to the client project made by Victor Canas to access the Github API.\n" +
				           "Introduce a username to view all its repositories");
		String username = scanner.nextLine();
		ArrayList<RepositoryDto> repositories;

		try {
			repositories = githubService.getRepositories(username);
		} catch (Exception e){
			System.out.println(e.getMessage());
			return;
		}

		if (repositories.size() <= 0){
			System.out.println(username + " doesn't have repositories");
		} else{
			for (RepositoryDto repository : repositories) {
				System.out.println("\n" + repository.getName());
				System.out.println("    - Id: " + repository.getId());
				System.out.println("    - Url: " + repository.getHtmlUrl());
			}
		}
	}
}
