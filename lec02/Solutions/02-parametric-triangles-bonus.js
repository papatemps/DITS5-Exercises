function triangle (number, sign) {

    let i = 0;
    let output = sign;
    while (i < number) {
      console.log(output);
     i = i + 1;
     output += sign;
    }
    }

    triangle(4, "%")