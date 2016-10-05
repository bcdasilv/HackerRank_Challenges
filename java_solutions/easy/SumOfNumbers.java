package easy;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class SumOfNumbers {


    static int sum(int[] numbers) {
        int numberOfSums = numbers[0];
        int sum = 0;
        for (int i = 1; i <= numberOfSums; i++){
            sum += numbers[i];
        }
        return sum;
    }

    public static void main(String[] args) throws IOException{
        Scanner in = new Scanner(System.in);
        final String fileName = System.getenv("OUTPUT_PATH");
        //BufferedWriter bw = new BufferedWriter(new FileWriter(fileName));
        int res;
        
        int _numbers_size = 0;
        //_numbers_size = Integer.parseInt(in.nextLine().trim());
        int[] _numbers = new int[3];
        int _numbers_item;
        _numbers[0] = 2;
        _numbers[1] = 12;
        _numbers[2] = 12;
//        for(int _numbers_i = 0; _numbers_i < _numbers_size; _numbers_i++) {
//            _numbers_item = Integer.parseInt(in.nextLine().trim());
//            _numbers[_numbers_i] = _numbers_item;
//        }
        
        res = sum(_numbers);
        System.out.println(res);
//        bw.write(String.valueOf(res));
//        bw.newLine();
//        
//        bw.close();
    }
}
