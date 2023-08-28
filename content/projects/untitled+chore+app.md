---
title: Untitled Chore App
overview: A weekly chore manager that generates timetables and ranks users by their contributions.
logo: /icons/projects/uca.png
authors:
  [
    { name: "Tom Smith", role: "Full-Stack Dev", link: "/" },
    {
      name: "Tom Cutts",
      role: "Frontend Dev",
      link: "https://github.com/Spratt93",
    },
    {
      name: "Dean Davey",
      role: "Backend Dev",
      link: "https://github.com/Davey-Dean",
    },
    {
      name: "Jaret Wrintmore",
      role: "Backend Dev",
      link: "https://github.com/W8up",
    },
  ]
link: https://github.com/t02smith/untitled-chore-app
tools:
  [
    "vue",
    "python",
    "fastapi",
    "pinia",
    "javascript",
    "bootstrap",
    "azure",
    "sass",
    "cosmosdb",
  ]
---

Have you ever:

- ✅ Wondered why your house was such a mess?​
- ✅ Had to do all the chores in your house?​
- ✅ Ran out of toilet paper because no one bought any?​
- ✅ Had to dig out all your house-mates kitchen supplies from the sink?

It's a common problem at home for a lot of people; especially students. \*_Untitled Chore App_ provides automated chore timetabling for each home you find yourself a part of that is refreshed weekly and allows you track which of your housemates aren't pulling their weight.

## 🏠 Architecture

Untitled Chore App uses a client-server architecture where the user will interact with a Vue.js website, which makes HTTP requests to our FastAPI server that is deployed to Azure. This API will then interact with our instance of CosmosDB.

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
