package Easy_Tests;

import java.util.Scanner;

public class Stairs {
	/*
	 * Complete the function below.
	 */

    static String getSpaces(int n){
        String spaces="";
        for(int i=0; i<n; i++){
            spaces += " ";
        }
        return spaces;
    }
    
    static void StairCase(int n) {
        String step = "#";
        for(int i = n; i >= 1; i--){
            String sp = getSpaces(i-1);
            System.out.println(sp + step);
            step += "#";
        }
    }
	    
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int _n;
        _n = Integer.parseInt(in.nextLine().trim());
        
        StairCase(_n);
        
    }
}
