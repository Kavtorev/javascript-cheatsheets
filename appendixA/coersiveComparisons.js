// if and ? :-ternary statements, as well as the test clauses in while and for loops, all perform an implicit value comparison. But what sort? Is it "strict" or "coercive"? Both, actually.

const number = 1;

if (number) {
  console.log("Yeaaahhh, this is true");
}

if (Boolean(number)) {
  console.log("Yeahh the equivalent also works fine!!");
}

// Since the Boolean(..) function always returns a value of type boolean, the == vs === in this snippet is irrelevant; they'll both do the same thing. But the important part is to see that before the comparison, a coercion occurs, from whatever type x currently is, to boolean.
