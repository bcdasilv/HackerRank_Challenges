package easy;

import java.util.Scanner;

public class PlusMinus {

	private static void plusMinus(int[] arr){
		float positiveRatio = 0;
		float negativeRatio = 0;
		float zeroesRatio = 0;
		
		for(int i = 0; i < arr.length; i++){
			if (arr[i] > 0)
				positiveRatio++;
			else if (arr[i] < 0)
				negativeRatio++;
			else
				zeroesRatio++;
		}
		System.out.println(positiveRatio/arr.length);
		System.out.println(negativeRatio/arr.length);
		System.out.println(zeroesRatio/arr.length);
	}
	
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int arr[] = new int[n];
        for(int arr_i=0; arr_i < n; arr_i++){
            arr[arr_i] = in.nextInt();
        }
        plusMinus(arr);
    }
}
