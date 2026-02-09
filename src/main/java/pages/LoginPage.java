package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class LoginPage {
    @FindBy(xpath = "//input[@id='username']")
    private WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMe;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement errorMsg;

    @FindBy(xpath = "//span[@id='userNavLabel']")
    private WebElement userNavLabel;

    private WebDriver driver;
    private WebDriverWait wait;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    public void enterUsername(String user) {
        wait.until(ExpectedConditions.visibilityOf(username));
        username.clear();
        username.sendKeys(user);
    }

    public void enterPassword(String pass) {
        wait.until(ExpectedConditions.visibilityOf(password));
        password.clear();
        password.sendKeys(pass);
    }

    public void clickLogin() {
        wait.until(ExpectedConditions.elementToBeClickable(loginButton));
        loginButton.click();
    }

    public void setRememberMe(boolean value) {
        wait.until(ExpectedConditions.visibilityOf(rememberMe));
        if (rememberMe.isSelected() != value) {
            rememberMe.click();
        }
    }

    public String getErrorMessage() {
        wait.until(ExpectedConditions.visibilityOf(errorMsg));
        return errorMsg.getText();
    }

    public boolean isUserNavLabelVisible() {
        try {
            wait.until(ExpectedConditions.visibilityOf(userNavLabel));
            return userNavLabel.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }
}