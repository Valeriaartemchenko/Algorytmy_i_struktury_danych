import java.time.LocalDate;
import java.util.HashSet;
import java.util.TreeSet;
import java.util.Set;
import java.util.Iterator;
import java.util.Comparator;
import java.util.Objects;
import java.util.SortedSet;

public class Main {

  public static class DataTypes implements Comparable<DataTypes>{
     String typString;
     int typInteger;
     double typDouble;
     LocalDate typDate;

     public DataTypes (String string, int integer, double typdouble) {
        typString = string;
        typInteger = integer;
        typDouble = typdouble;
        typDate = LocalDate.now();
      } 

      public int getInt() {
        return typInteger;
      }
      //definicja metody HashCode dla podanego objektu
      
      @Override
        public int hashCode() {
        int result = 17;
        result = 31 *  result + typString.hashCode();
        result = 31 *  result + typInteger;
        result = 31 *  result + typDate.hashCode();
        return result;
      }
      //definicja metody equals
      @Override
        public boolean equals(Object o) {

        if (o == this) return true;
        if (!(o instanceof DataTypes)) {
            return false;
        }

        DataTypes data = (DataTypes) o;

        return data.typString.equals(typString) &&
                data.typInteger == typInteger &&
                data.typDouble == typDouble &&
                //data.typArray == typArray &&
                data.typDate.equals(typDate);
        }
      
      //definicja metody compareTo którą korzystamy przy dodawaniu objektó∑ to TreeSet. metoda jest prosta i porównuje tylko parametr typInterger 
        public int compareTo(DataTypes data) {
        return this.getInt() - data.getInt();
      }
  }

/*---------------------------------------*/
   public static void main(String[] args){

    System.out.println("Tworzymy objekty klasy ");
    DataTypes newObject = new DataTypes("myString", 33, 7.999);
    DataTypes newObject2 = new DataTypes("myString", 98, 7.999);
    DataTypes newObject3 = new DataTypes("myStr", 38, 7.999);
    DataTypes newObject4 = new DataTypes("myString", 33, 7.999);
    
    //#test 1
    
    int hCode = newObject.hashCode();
    int hCode2 = newObject2.hashCode();
    int hCode3 = newObject3.hashCode();
    int hCode4 = newObject4.hashCode();
    System.out.println("hashCode pierwszego objektu " + hCode);
    System.out.println("hashCode drugiego objektu " +hCode2);
    System.out.println("hashCode trzeciego objektu " +hCode3);
    System.out.println("hashCode czwartego objektu " +hCode4); 
    /* 
    jak widzimy z tego testu to hashCode 1 i 4 objektów są równe, ponieważ objekty są równe sobie
    */
     
    // #test 2 sprawdzimy czy metoda equals działa poprawnie
    System.out.println("Czy objekty 1 i 2 są jednakowe? " + newObject.equals(newObject2));
    //rezultat false - ponieważ fakrycznie oni mają rózne watrośći w typInteger
    
    System.out.println("Czy objekty 1 i 4 są jednakowe? " + newObject.equals(newObject4));
    //rezultat true - objekty są identyczne, co było potwierdzono w test 1
    
    //test 4 - tworzymy HashSet
     HashSet<DataTypes> myHash = new HashSet<DataTypes>();//do pierwszego dodamy objekty
     HashSet<DataTypes> myHash2 = new HashSet<DataTypes>();//drugi zostanie pusty
     myHash.add(newObject);
     myHash.add(newObject2);
     myHash.add(newObject3);
     myHash.add(newObject4);//obj 1 i 4 są równę, dlatego newObject4 nie dodał się do HashSet
     System.out.println("Utworzony hashset: " + myHash);//wypisać zawartość hashSet
     System.out.println("Czy hashset 1 jest pusty? " + myHash.isEmpty());
     System.out.println("Czy hashset 2 jest pusty? " + myHash2.isEmpty());
     
    //#test 5 - tworzymy treeSet
     Set<DataTypes> treeSet = new TreeSet<DataTypes>();
     Set<DataTypes> treeSet2 = new TreeSet<>();
     treeSet.add(newObject);
     treeSet.add(newObject2);
     treeSet.add(newObject3);
     treeSet.add(newObject4);
     System.out.println("Utworzony treeset: " + treeSet);
     System.out.println("Utworzony treeset2: " + treeSet2);
     System.out.println("Czy treeset 1 jest pusty? " + treeSet.isEmpty());
    System.out.println("Czy treeset 2 jest pusty? " + treeSet.isEmpty());
   }
}
