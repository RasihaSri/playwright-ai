package tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginInvalidTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeClass
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://login.salesforce.com/?locale=in");
        loginPage = new LoginPage(driver);
    }

    @Test
    public void invalidLoginTest() {
        loginPage.enterUsername("invalid_username");
        loginPage.enterPassword("invalid_password");
        loginPage.setRememberMe(false);
        loginPage.clickLogin();
        Assert.assertTrue(loginPage.getErrorMessage().contains("Please check your username and password"));
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}