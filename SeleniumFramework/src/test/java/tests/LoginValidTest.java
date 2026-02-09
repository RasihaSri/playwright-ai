package tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginValidTest {
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
    public void validLoginTest() {
        loginPage.enterUsername("valid_username");
        loginPage.enterPassword("valid_password");
        loginPage.setRememberMe(true);
        loginPage.clickLogin();
        Assert.assertTrue(loginPage.isUserNavLabelVisible());
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}