 function equalsign(input) {
   console.log(typeof input, input);

   var symbols = ["sin", "cos", "tan", "log", "!", "π", "√", "^", "ln", "e"]

   // checking the parantheses if it matches.
   var left_parantheses = 0
   var right_parantheses = 0

   for (var i = 0; i<input.length; i++) {
      console.log(input[i]);
      if (input[i] == "(") {
         left_parantheses++;
      }
      else if (input[i] == ")") {
         right_parantheses++;
      }
   }

   if (left_parantheses != right_parantheses) {
      alert("Please check the parantheses.");
   }


   // the input example: 39e + (34(7) x sin(3))

   // get the parenthesis one done first!
   // Calculate 34(7) x sin(3) then put it into list
   // [39e, 34(7)sin(3)]
   // if numbers are adhered by different type of numbers then multiply those
   // then put those into new list
   // [106.01299131, 33.5865619182]
   // plus those two values according to operators.
   // 106.01299131 + 33.5865619182 = 139.21312412125
   // calculator.display.value = 139.12451326236


   else if (!(input in symbols)) {
      // put everything in list
      // make a list for operators as well.
      // numbers = [39e, 34(7), sin(3)]
      // operators = [+, x]
      // calculate 39e and 34(7) and sin(3)

      // if numbers[0] in "e": numbers[0].replace("e", "Math.E");
      
      // input = numbers[0] + operators[0] + numbers[1] + operators[1] + numbers[2]
      // eval(input)


   }


    calculator.display.value = eval(calculator.display.value)
 }