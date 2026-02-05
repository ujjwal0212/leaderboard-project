package com.example.demo.Controller;
import com.example.demo.model.User;
import com.example.demo.Service.LeaderboardService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {
	private final LeaderboardService service;
	//Automatic Creation of service object through IOC
	 public LeaderboardController(LeaderboardService service) {
	        this.service = service;
	 }
	 @PostMapping("/add")
	 public String addUser(@RequestParam int id,@RequestParam String name) {
		 return service.addUser(id, name);
	 }
	 @PutMapping("/score")
	 public String updateScore(@RequestParam("id") int id,@RequestParam("sc") int newScore) {
		 return service.updateScore(id, newScore);
	 }
	 @GetMapping("/top/{k}")
	 public List<User> topK(@PathVariable int k){
		 return service.getTopK(k);
	 }
	 @GetMapping("/rank/{id}")
	 public int rank(@PathVariable int id) {
		 return service.getRank(id);
	 }
}
