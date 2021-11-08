package com.victorcanas.GithubProject.dto;

public class RepositoryDto {
    private Long id;
    private String name;
    private String htmlUrl;


    public RepositoryDto(Long id, String name, String htmlUrl) {
        this.id = id;
        this.name = name;
        this.htmlUrl = htmlUrl;
    }

    @Override
    public String toString() {
        return "RepositoryDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", htmlUrl='" + htmlUrl + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHtmlUrl() {
        return htmlUrl;
    }

    public void setHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
    }
}
