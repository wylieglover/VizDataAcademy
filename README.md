# Viz Data Academy
Our group has been tasked with developing an application for high school students to help with understanding data and its visualization. We hope to appeal to the kinesthetic learner by offering an environment for students to interact with data and graphs in a new format. Although the application will be built with biology in mind, its use case expands beyond that of a single subject.

# Local Development Setup
Before starting, make sure you have at least these components installed on your computer:
- Python
- python-dotenv
- Django
 
Start by cloning this repository into a local folder/directory:
```sh
git clone https://github.com/wylieglover/dataliteracy
```
 
Inside the file ```.env```, assign ```DJANGO_ALLOWED_HOSTS``` with your local IP (EX: 127.0.0.1 or localhost)

![Screenshot_1](https://github.com/wylieglover/dataliteracy/assets/70774631/e2893d53-0f98-406d-ad6c-1e9e6eb7486a)

You can now navigate to the folder/directory with the file ```manage.py``` and migrate files:
```sh
python manage.py migrate
```
Then finally, run the server:
```sh
python manage.py runserver
```

There you go! You can now start developing the project locally!
