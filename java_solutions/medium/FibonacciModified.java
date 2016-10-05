package medium;

import java.math.BigInteger;
import java.util.Scanner;

public class FibonacciModified {

	private static void fibonacciModified(BigInteger t1, BigInteger t2, int current, int n){
		if (current == n)
			System.out.println(t2.pow(2).add(t1));
		else
			fibonacciModified(t2, t2.pow(2).add(t1), current+1, n);
	} 
	
	public static void main(String args[]){
		Scanner scanner = new Scanner(System.in);
		BigInteger t1 = scanner.nextBigInteger();
		BigInteger t2 = scanner.nextBigInteger();
		int n = scanner.nextInt();
		fibonacciModified(t1, t2, 3, n);
		
	}
}
