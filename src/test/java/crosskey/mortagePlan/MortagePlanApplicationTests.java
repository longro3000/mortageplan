package crosskey.mortagePlan;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import crosskey.mortagePlan.plan.Plan;

@SpringBootTest
@AutoConfigureMockMvc
class MortagePlanApplicationTests {
	
	@Test
	void calculateMonthlyPayment() {
		Plan newPlan = new Plan("naruto", 1000, 5, 2);
		assertEquals("43.87",newPlan.getMonthlyPaymentToString());
	}
	
	@Test
	void calculatePower() {
		Plan newPlan = new Plan("naruto", 1000, 5, 2);
		assertEquals(8.0,newPlan.power(2, 3));
	}
}
