---
title: Untitled Chore App
overview: A weekly chore manager that generates timetables and ranks users by their contributions.
logo: /icons/projects/uca.png
---

# Untitled Chore App

> [https://github.com/t02smith/untitled-chore-app](https://github.com/t02smith/untitled-chore-app)

Have you ever:

- ✅ Wondered why your house was such a mess?​
- ✅ Had to do all the chores in your house?​
- ✅ Ran out of toilet paper because no one bought any?​
- ✅ Had to dig out all your house-mates kitchen supplies from the sink?

It's a common problem at home for a lot of people; especially students. \*_Untitled Chore App_ provides automated chore timetabling for each home you find yourself a part of that is refreshed weekly and allows you track which of your housemates aren't pulling their weight.

## 🛠️ Tools Used

![Python Badge](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=for-the-badge)
![FastAPI Badge](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=fff&style=for-the-badge)
![Microsoft Azure Badge](https://img.shields.io/badge/Microsoft%20Azure-0078D4?logo=microsoftazure&logoColor=fff&style=for-the-badge)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
![Vue.js Badge](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=for-the-badge)
![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=for-the-badge)

## 🎓 Authors

This project was part of the **Cloud Application Development** module at the **University of Southampton** and was a group project by:

- Myself
- Tom Cutts [https://github.com/Spratt93](https://github.com/Spratt93)
- Dean Davey [https://github.com/Davey-Dean](https://github.com/Davey-Dean)
- Jaret Wrintmore [https://github.com/W8up](https://github.com/W8up)

## 🏠 Architecture

<div class="image">

![architecture](/img/projects/uca/architecture.png)

</div>

### 🎨 Frontend

The frontend was built using the component framework [🟩 Vue.js v3](https://vuejs.org/), the state-management tool [🍍 Pinia](https://pinia.vuejs.org/), and the CSS framework [🅱️ Bootstrap](https://getbootstrap.com/). The combination of these provided an intuitive user interface for users throughout the application. Users would primarily interact with it through the **Dashboard**, which shows them all their chores for all their homes.

<div class="image">

![dashboard](/img/projects/uca/dashboard.png)

</div>

As you can see, each user has a score next to them. This is their **Chore Score**; this value shows how good a user is at performing their chores and it calculated at each refresh of a timetable. Users with a lower Chore Score will be first in line to be allocated the more difficult chores.

### 🏭 Backend

The backend uses [🏃‍♂️💨 FastAPI](https://fastapi.tiangolo.com/) web framework to build the API for our frontend to interact with. FastAPI is great as it is easy to build a large application and generates OpenAPI documentation that made it easy for the frontend team to interact with it.

### 🚀 Database

Untitled Chore App uses [🤮 Azure CosmosDB](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction) as a NoSQL database where we store our data.
