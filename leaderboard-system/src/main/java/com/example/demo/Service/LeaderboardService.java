package com.example.demo.Service;
import com.example.demo.model.User;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class LeaderboardService {
   private Map<Integer,User>userMap=new HashMap<>();
   private TreeSet<User>leaderboard=new TreeSet<>(
		(a,b)->{
			if(a.getScore() != b.getScore())return b.getScore()-a.getScore();
			return a.getId()-b.getId();
		}    
   );
   public String addUser(int id,String name) {
	   if(userMap.containsKey(id))return "Key already exist";
	   User newUser=new User(id,name,0);
	   userMap.put(id,newUser);
	   leaderboard.add(newUser);
	   return "User Added Successfully";
   }
   public String updateScore(int id,int newScore) {
	   User user= userMap.get(id);
	   if(user==null)return "User not found";
	   leaderboard.remove(user);
	   user.setScore(newScore);
	   leaderboard.add(user);
	   return "Score Updated";
   }
   public List<User> getTopK(int k){
	   List<User> result = new ArrayList<>();
       int count = 0;
       for (User user : leaderboard) {
           result.add(user);
           count++;
           if (count == k) break;
       }
       return result;
   }
   public int getRank(int id) {
	   int rank=1;
	   for(User user:leaderboard) {
		   if(user.getId()==id)return rank;
		   rank++;
	   }
	   return -1;
   }
}
