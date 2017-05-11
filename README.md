This is a demo Meteor app using Apollo. It uses MySQL as the database and React as the UI framework.

## Install MySQL
To run, first install MySQL.

Start MySQL and create a database named `apollodemo`

```
> mysql -u root

mysql>  CREATE DATABASE apollodemo;
```

## Run the app
First clone this repository, if you haven't already. Then run the app.
```
> meteor npm install
> meteor
```
You can view the app at `http://localhost:3000/` or the built in graphiqql browser at `http://localhot:3000/graphiql`

## Insert Records
The app creates the table `posts` in the `apollodemo` database but does not add any records. Do so now in the `mysql` CLI,
```
mysql> USE apollodemo;
mysql> insert into posts (content, views) values ("Meteor Apollo Graphql in action", 5);
```

In your browser you should now see "Meteor Apollo Graphql in action" reactively display in the app.
