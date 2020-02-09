//Проект 2 часть LinkedList, ArrayList and Vector comparing
import java.io.*;
import java.util.*;

class Main2 {
    //losowa liczba w przedziale od 0 do b
    static int usingMathClass(int b) {
        double randomDouble = Math.random();
        randomDouble = randomDouble * b + 1;
        int randomInt = (int) randomDouble;
        return randomInt;
    }
    //Arraylist tworzenie
    static ArrayList createArrayList(int n, int b){

        ArrayList<Integer> arrlist = new ArrayList<Integer>(n);
        for (int i=1; i<=n; i++){
            int number = usingMathClass(b);
            arrlist.add(number);
        }
        // Printing elements
        System.out.println("Arraylist of " + n + " elements: "+arrlist);
        return arrlist;
    }

    static LinkedList createLinkedList(int n, int b){

        LinkedList<Integer> linkedList = new LinkedList<>();
        for (int i=1; i<=n; i++){
            int number = usingMathClass(b);
            linkedList.add(number);
        }
        // Printing elements
        System.out.println("LinkedList of " + n + " elements: "+ linkedList);
        return linkedList;
    }

    static Vector createVector(int n, int b){

        Vector<Integer> vector = new Vector<>();
        for (int i=1; i<=n; i++){
            int number = usingMathClass(b);
            vector.add(number);
        }
        // Printing elements
        System.out.println("Vector of " + n + " elements: "+ vector);
        return vector;
    }

/*-----------------------------------------*/
    public static void main(String[] args) {

        // создаем
        ArrayList<Integer> arrlist = createArrayList(10, 10);
        ArrayList<Integer> arrlist2 = createArrayList(100, 100);
        ArrayList<Integer> arrlist3 = createArrayList(1000, 500);
        ArrayList<Integer> arrlist4 = createArrayList(10000, 1000);
        ArrayList<Integer> arrlist5 = createArrayList(100000, 1000);

        int pos = usingMathClass(9);
        int pos2 = usingMathClass(99);
        int pos3 = usingMathClass(999);
        int pos4 = usingMathClass(9999);
        int pos5 = usingMathClass(99999);


        long startTime0 = System.nanoTime();
        int elem0 = arrlist.get(pos);
        long estimatedTime0 = System.nanoTime() - startTime0;

        long startTime = System.nanoTime();
        int elem1 = arrlist.get(pos);
        long estimatedTime = System.nanoTime() - startTime;

        long startTime1 = System.nanoTime();
        int elem2 = arrlist2.get(pos2);
        long estimatedTime1 = System.nanoTime() - startTime1;

        long startTime2 = System.nanoTime();
        int elem3 = arrlist3.get(pos3);
        long estimatedTime2 = System.nanoTime() - startTime2;

        long startTime3 = System.nanoTime();
        int elem4 = arrlist4.get(pos4);
        long estimatedTime3 = System.nanoTime() - startTime3;

        long startTime4 = System.nanoTime();
        int elem5 = arrlist5.get(pos5);
        long estimatedTime4 = System.nanoTime() - startTime4;

        //System.out.println("\nThe element at index : "+ pos + " is " + elem0 + "  time " + estimatedTime0);
        System.out.println("\nThe element at index : "+ pos + " is " + elem1 + "  time " + estimatedTime);
        System.out.println("\nThe element at index : "+ pos2 + " is " + elem2 + "  time " + estimatedTime1);
        System.out.println("\nThe element at index : "+ pos3 + " is " + elem3 + "  time " + estimatedTime2);
        System.out.println("\nThe element at index : "+ pos4 + " is " + elem4  + "  time " + estimatedTime3);
        System.out.println("\nThe element at index : "+ pos5 + " is " + elem5 + "  time " + estimatedTime4);

        //индексы для вставки в случайное место
        int index1 = usingMathClass(9);
        int index2 = usingMathClass(99);
        int index3 = usingMathClass(999);
        int index4 = usingMathClass(9999);
        int index5 = usingMathClass(99999);

        //вставляем в случайное место
        long startTime00 = System.nanoTime();
        arrlist.add(index1,25);
        long estimatedTime00 = System.nanoTime() - startTime00;

        long startTime5 = System.nanoTime();
        arrlist.add(index1,25);
        long estimatedTime5 = System.nanoTime() - startTime5;

        long startTime6 = System.nanoTime();
        arrlist2.add(index2,25);
        long estimatedTime6 = System.nanoTime() - startTime6;

        long startTime7 = System.nanoTime();
        arrlist3.add(index3,25);
        long estimatedTime7 = System.nanoTime() - startTime7;

        long startTime8 = System.nanoTime();
        arrlist4.add(index4,25);
        long estimatedTime8 = System.nanoTime() - startTime8;

        long startTime9 = System.nanoTime();
        arrlist5.add(index5,25);
        long estimatedTime9 = System.nanoTime() - startTime9;

        System.out.println("\nTime of adding the element to arraylist with length 10 : " + estimatedTime5);
        System.out.println("\nTime of adding the element to arraylist with length 100 : " + estimatedTime6);
        System.out.println("\nTime of adding the element to arraylist with length 1000 : " + estimatedTime7);
        System.out.println("\nTime of adding the element to arraylist with length 10000 : " + estimatedTime8);
        System.out.println("\nTime of adding the element to arraylist with length 100000 : " + estimatedTime9);
        //индексы для удаления со случайного места
        int index11 = usingMathClass(9);
        int index22 = usingMathClass(99);
        int index33 = usingMathClass(999);
        int index44 = usingMathClass(9999);
        int index55 = usingMathClass(99999);
        //удаляем со случайного места
        long startTime02 = System.nanoTime();
        arrlist.remove(index11);
        long estimatedTime02 = System.nanoTime() - startTime02;

        long startTime10 = System.nanoTime();
        arrlist.remove(index11);
        long estimatedTime10 = System.nanoTime() - startTime10;

        long startTime11 = System.nanoTime();
        arrlist2.remove(index22);
        long estimatedTime11 = System.nanoTime() - startTime11;

        long startTime12 = System.nanoTime();
        arrlist3.remove(index33);
        long estimatedTime12 = System.nanoTime() - startTime12;

        long startTime13 = System.nanoTime();
        arrlist4.remove(index44);
        long estimatedTime13 = System.nanoTime() - startTime13;

        long startTime14 = System.nanoTime();
        arrlist5.remove(index55);
        long estimatedTime14 = System.nanoTime() - startTime14;

        System.out.println("\nTime of removing the element to arraylist with length 10 : " + estimatedTime10);
        System.out.println("\nTime of removing the element to arraylist with length 100 : " + estimatedTime11);
        System.out.println("\nTime of removing the element to arraylist with length 1000 : " + estimatedTime12);
        System.out.println("\nTime of removing the element to arraylist with length 10000 : " + estimatedTime13);
        System.out.println("\nTime of removing the element to arraylist with length 100000 : " + estimatedTime14);

        //создаем linkedlist---------------------------------------------
        LinkedList<Integer> linkedList = createLinkedList(10,10);
        LinkedList<Integer> linkedList2 = createLinkedList(100,100);
        LinkedList<Integer> linkedList3 = createLinkedList(1000,500);
        LinkedList<Integer> linkedList4 = createLinkedList(10000,1000);
        LinkedList<Integer> linkedList5 = createLinkedList(100000,1000);


        long startTime03 = System.nanoTime();
        int element03 = linkedList.get(pos);
        long estimatedTime03 = System.nanoTime() - startTime03;

        long startTime15 = System.nanoTime();
        int element6 = linkedList.get(pos);
        long estimatedTime15 = System.nanoTime() - startTime15;

        long startTime16 = System.nanoTime();
        int element7 = linkedList2.get(pos2);
        long estimatedTime16 = System.nanoTime() - startTime16;

        long startTime17 = System.nanoTime();
        int element8 = linkedList3.get(pos3);
        long estimatedTime17 = System.nanoTime() - startTime17;

        long startTime18 = System.nanoTime();
        int element9 = linkedList4.get(pos4);
        long estimatedTime18 = System.nanoTime() - startTime18;

        long startTime19 = System.nanoTime();
        int element10 = linkedList5.get(pos5);
        long estimatedTime19 = System.nanoTime() - startTime19;

        System.out.println("\nThe element of linkedList at index : "+ pos + " is " + element6+ "  time " + estimatedTime15);
        System.out.println("\nThe element of linkedList at index : "+ pos2 + " is " + element7+ "  time " + estimatedTime16);
        System.out.println("\nThe element of linkedList at index : "+ pos3 + " is " + element8+ "  time " + estimatedTime17);
        System.out.println("\nThe element of linkedList at index : "+ pos4 + " is " + element9+ "  time " + estimatedTime18);
        System.out.println("\nThe element of linkedList at index : "+ pos5 + " is " + element10+ "  time " + estimatedTime19);


        long startTime04 = System.nanoTime();
        linkedList.add(index1,25);
        long estimatedTime04 = System.nanoTime() - startTime04;

        long startTime20 = System.nanoTime();
        linkedList.add(index1,25);
        long estimatedTime20 = System.nanoTime() - startTime20;

        long startTime21 = System.nanoTime();
        linkedList2.add(index2,25);
        long estimatedTime21 = System.nanoTime() - startTime21;

        long startTime22 = System.nanoTime();
        linkedList3.add(index3,25);
        long estimatedTime22 = System.nanoTime() - startTime22;

        long startTime23 = System.nanoTime();
        linkedList4.add(index4,25);
        long estimatedTime23 = System.nanoTime() - startTime23;

        long startTime24 = System.nanoTime();
        linkedList5.add(index5,25);
        long estimatedTime24 = System.nanoTime() - startTime24;

        System.out.println("\nTime of adding the element to linkedList with length 10 : " + estimatedTime20);
        System.out.println("\nTime of adding the element to linkedList with length 100 : " + estimatedTime21);
        System.out.println("\nTime of adding the element to linkedList with length 100 : " + estimatedTime22);
        System.out.println("\nTime of adding the element to linkedList with length 100 : " + estimatedTime23);
        System.out.println("\nTime of adding the element to linkedList with length 100 : " + estimatedTime24);


        long startTime05 = System.nanoTime();
        linkedList.remove(index11);
        long estimatedTime05 = System.nanoTime() - startTime05;

        long startTime25 = System.nanoTime();
        linkedList.remove(index11);
        long estimatedTime25 = System.nanoTime() - startTime25;

        long startTime26 = System.nanoTime();
        linkedList2.remove(index22);
        long estimatedTime26 = System.nanoTime() - startTime26;

        long startTime27 = System.nanoTime();
        linkedList3.remove(index33);
        long estimatedTime27 = System.nanoTime() - startTime27;

        long startTime28 = System.nanoTime();
        linkedList4.remove(index44);
        long estimatedTime28 = System.nanoTime() - startTime28;

        long startTime29 = System.nanoTime();
        linkedList5.remove(index55);
        long estimatedTime29 = System.nanoTime() - startTime29;

        System.out.println("\nTime of removing the element to linkedList with length 10 : " + estimatedTime25);
        System.out.println("\nTime of removing the element to linkedList with length 10 : " + estimatedTime26);
        System.out.println("\nTime of removing the element to linkedList with length 10 : " + estimatedTime27);
        System.out.println("\nTime of removing the element to linkedList with length 10 : " + estimatedTime28);
        System.out.println("\nTime of removing the element to linkedList with length 10 : " + estimatedTime29);


        Vector vector1 = createVector(10,10);
        Vector vector2 = createVector(100,100);
        Vector vector3 = createVector(1000,500);
        Vector vector4 = createVector(10000,1000);
        Vector vector5 = createVector(100000,1000);

        long startTime06 = System.nanoTime();
        Object element06 = vector1.get(pos);
        long estimatedTime06 = System.nanoTime() - startTime06;

        long startTime30 = System.nanoTime();
        Object element11 = vector1.get(pos);
        long estimatedTime30 = System.nanoTime() - startTime30;

        long startTime31 = System.nanoTime();
        Object element12 = vector2.get(pos2);
        long estimatedTime31 = System.nanoTime() - startTime31;

        long startTime32 = System.nanoTime();
        Object element13 = vector3.get(pos3);
        long estimatedTime32 = System.nanoTime() - startTime32;

        long startTime33 = System.nanoTime();
        Object element14 = vector4.get(pos4);
        long estimatedTime33 = System.nanoTime() - startTime33;

        long startTime34 = System.nanoTime();
        Object element15 = vector5.get(pos5);
        long estimatedTime34 = System.nanoTime() - startTime34;

        System.out.println("\nThe element of vector at index : "+ pos + " is " + element11+ "  time " + estimatedTime30);
        System.out.println("\nThe element of vector at index : "+ pos2 + " is " + element12+ "  time " + estimatedTime31);
        System.out.println("\nThe element of vector at index : "+ pos3 + " is " + element13+ "  time " + estimatedTime32);
        System.out.println("\nThe element of vector at index : "+ pos4 + " is " + element14+ "  time " + estimatedTime33);
        System.out.println("\nThe element of vector at index : "+ pos5 + " is " + element15+ "  time " + estimatedTime34);


        long startTime07 = System.nanoTime();
        vector1.add(index1, 25);
        long estimatedTime07 = System.nanoTime() - startTime07;

        long startTime35 = System.nanoTime();
        vector1.add(index1, 25);
        long estimatedTime35 = System.nanoTime() - startTime35;

        long startTime36 = System.nanoTime();
        vector2.add(index2, 25);
        long estimatedTime36 = System.nanoTime() - startTime36;

        long startTime37 = System.nanoTime();
        vector3.add(index3, 25);
        long estimatedTime37 = System.nanoTime() - startTime37;

        long startTime38 = System.nanoTime();
        vector4.add(index4, 25);
        long estimatedTime38 = System.nanoTime() - startTime38;

        long startTime39 = System.nanoTime();
        vector5.add(index5, 25);
        long estimatedTime39 = System.nanoTime() - startTime39;

        System.out.println("\nTime of adding the element to vector with length 10 : " + estimatedTime35);
        System.out.println("\nTime of adding the element to vector with length 100 : " + estimatedTime36);
        System.out.println("\nTime of adding the element to vector with length 1000 : " + estimatedTime37);
        System.out.println("\nTime of adding the element to vector with length 10000 : " + estimatedTime38);
        System.out.println("\nTime of adding the element to vector with length 100000 : " + estimatedTime39);

        long startTime08 = System.nanoTime();
        vector1.remove(index11);
        long estimatedTime08 = System.nanoTime() - startTime08;

        long startTime40 = System.nanoTime();
        vector1.remove(index11);
        long estimatedTime40 = System.nanoTime() - startTime40;

        long startTime41 = System.nanoTime();
        vector2.remove(index22);
        long estimatedTime41 = System.nanoTime() - startTime41;

        long startTime42 = System.nanoTime();
        vector3.remove(index33);
        long estimatedTime42 = System.nanoTime() - startTime42;

        long startTime43 = System.nanoTime();
        vector4.remove(index44);
        long estimatedTime43 = System.nanoTime() - startTime43;

        long startTime44 = System.nanoTime();
        vector5.remove(index55);
        long estimatedTime44 = System.nanoTime() - startTime44;

        System.out.println("\nTime of removing the element from vector with length 10 : " + estimatedTime40);
        System.out.println("\nTime of removing the element from vector with length 100 : " + estimatedTime41);
        System.out.println("\nTime of removing the element from vector with length 1000 : " + estimatedTime42);
        System.out.println("\nTime of removing the element from vector with length 10000 : " + estimatedTime43);
        System.out.println("\nTime of removing the element from vector with length 100000 : " + estimatedTime44);

    }

}
