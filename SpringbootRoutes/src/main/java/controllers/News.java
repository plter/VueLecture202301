package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class News {
    @GetMapping("/news")
    public String page(Model model) {
        model.addAttribute("pageTitle", "新闻");
        return "news";
    }
}
