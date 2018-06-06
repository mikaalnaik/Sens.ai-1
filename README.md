### Brand Analysis Platform


### Project Planning

## Project Description

# Project Title
# Project Description - What problem your app solves
# Target auidence - Your app will be useful to whom?
# Team Members


## User Stories

## Wireframes

## Entity Relationship Diagram

## Stack Choices

# Front End
# Back End
# Database


### Project Setup

## Git Repo Setup
## Project scaffold
## Database Setup

# CREATING NEW DATABASE

- Install Postgress SQL and Knex migration tool (on vagrant prompt).

````````
npm install pg --save
npm install knex --save
````````

- Write a following command to create database (on vagrant prompt).
```
psql -U vagrant -d template1

CREATE ROLE sensai WITH LOGIN PASSWORD 'sensai';
CREATE DATABASE sensai OWNER sensai;
```
- To login to Postgress database with user sensai

```
psql -U sensai
```

- To quit and logout Postgress database

```
\q
```
- Run following KNEX commands to run database migrations.

```
CREATE TABLES: Write following command on vagrant prompt

knex migrate:latest;
```

```
DROP ALL TABLES: Write following command on vagrant prompt

knex migrate:rollback;
```

## Seed File


### Project Workflow

## Project Communication

- What has been accomplished
- What will you be working on
- What hardles are you facing

## Project Workflow

1. What are the project milestones: you need to create a list of the project milestones and specify what are the deadlines.

2. Git workflow: establish rules about how you’re going to manage your Git workflow. You can discuss it with a mentor if needed.

3. How to distribute teamwork: before distributing work, you might want to consider working together until you build the core of your app. Afterward, you need to think about how you will distribute the work among your team members.

4. Coding styles: consider establishing some coding guidelines to ensure consistency between team members.


### Project Development

- Deadline: Week 9, Day 5

### Project Deployment

## Testing, bug fixing

# Deadline: Demo day minus 2

- Testing, testing, testing
- Fixing bugs
- Refactoring your code
- Cleaning up your code


### Project Presentation

# Deadline: Demoday minus 1
