package crosskey.mortagePlan.plan;

import java.text.DecimalFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "plan")
public class Plan {
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name = "customer_name")
	private String customerName;
	
	@Column(name = "total_loan")
	private double totalLoan ;
	
	@Column(name = "year_interest")
	private double yearInterest; //in percent unit Ex: 5 = 5% = 0.05 
	
	@Column(name = "year_duration")
	private int yearDuration;
	
	@Column(name = "monthly_payment")
	private double monthlyPayment;
	
	public Plan() {
		super();
	}

	public Plan(String customerName, double totalLoan, double yearInterest, int yearDuration) {
		super();
		this.customerName = customerName;
		this.totalLoan = totalLoan;
		this.yearInterest = yearInterest;
		this.yearDuration = yearDuration;
		this.monthlyPayment = this.calculatePayment();
	}
	
	public double power(double base, int exponent) {
		double result = base;
		for (int i=1; i < exponent; i++) {
			result *= base;
		}
		return result;
	}
	
	/*
	 * E = Fixed monthly payment
	 * b = Interest on a monthly basis
	 * U = Total loan
	 * p = Number of payments
	 * E = U[b(1 + b)^p]/[(1 + b)^p - 1]
	 */
	public double calculatePayment() {
		double monthlyInterest = (yearInterest / 100) / 12;
		int payments = yearDuration*12;
		return totalLoan*((monthlyInterest*power(1+monthlyInterest, payments)) / (power(1+monthlyInterest, payments)-1));
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public double getTotalLoan() {
		return totalLoan;
	}
	public void setTotalLoan(double totalLoan) {
		this.totalLoan = totalLoan;
	}
	public double getYearInterest() {
		return this.yearInterest;
	}
	public void setYearInterest(double yearInterest) {
		this.yearInterest = yearInterest;
	}
	public int getYearDuration() {
		return this.yearDuration;
	}
	public void setYearDuration(int yearDuration) {
		this.yearDuration = yearDuration;
	}
	public double getMonthlyPayment() {
		return this.monthlyPayment;
	}
	public void setMonthlyPayment(double monthlyPayment) {
		this.monthlyPayment = monthlyPayment;
	}
	public String getMonthlyPaymentToString() {
		DecimalFormat numberFormat = new DecimalFormat("#.00");
		return numberFormat.format(this.monthlyPayment);
	}
		
}
