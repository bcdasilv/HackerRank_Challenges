

public class FindFibonacci {
//Assuming that the Fibonnacci sequence starts with 0,1,1,...
	//and that any sequence has at least three numbers.
	
	private static boolean isFibonacci(int[] arr, int i){
		if (arr[i] == arr[i-1] + arr[i-2])
			return true;
		else 
			return false;
	}
	
	public static boolean isFibonacci(int[] arr){
		boolean result = false;
		for (int i = 2; i < arr.length; i++) {
			result = isFibonacci(arr, i);
			if (!result) return result;
		}
		return result;
	}
	
	public static void main(String[] args) {
		int[] sequence = {0,1,1,2,3,5,8,13};
		System.out.println(FindFibonacci.isFibonacci(sequence));

	}

}
