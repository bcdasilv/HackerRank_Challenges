package Easy_Tests;

import java.util.ArrayList;
import java.util.Scanner;

public class QuickSortPartition {

	static void partition(int[] ar) {
		ArrayList<Integer> right = new ArrayList(ar.length);
		ArrayList<Integer> left = new ArrayList(ar.length);
		int equal = ar[0];
		for (int i = 1; i < ar.length; i++) {
			if(ar[i] < equal)
				left.add(ar[i]);
			else if (ar[i] > equal)
				right.add(ar[i]);
		}
		printArray(left.toArray());
		System.out.print(equal+" ");
		printArray(right.toArray());
	} 	

	static void printArray(Object[] ar) {
		for(Object n: ar){
			System.out.print((int)n+" ");
		}
	}

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		int[] ar = new int[n];
		for(int i=0;i<n;i++){
			ar[i]=in.nextInt(); 
		}
		partition(ar);
	}    
}