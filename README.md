**About The Project**

The Leaderboard System is a full-stack web application built using React for the frontend and Spring Boot for the backend.
It allows users to be added, their scores to be updated, and shows real-time rankings.

On the backend, I used HashMap to store users by their ID so that I can quickly access any user, and TreeSet with a custom comparator to automatically maintain users in sorted order based on score.

Whenever a score changes, I remove the user from the TreeSet, update the score, and insert it again so that the ranking always remains correct.
 **Technolgy Used**
 
 **Frontend** : ReactJS + Vite
 
 **Backend**  : Java, SpringBoot
