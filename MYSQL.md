## Linux:
```shell
sudo service mysql start
```

```sql

CREATE DATABASE mytestdb;
CREATE USER myuser IDENTIFIED BY 'mypass';
USE mytestdb;

GRANT ALL PRIVILEGES ON mytestdb.* to myuser;
FLUSH privileges;
exit
```

#### login using the new user

```shell
> mysql -u myuser -p
> password: mypass
mysql>
```
```sql
use mytestdb;
create table test1 ( id INTEGER PRIMARY KEY, data VARCHAR(40));
show tables;
insert into test1 values(1,'aaaaaa');
select * from test1;
```


