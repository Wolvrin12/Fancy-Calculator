const btns = document.getElementsByTagName("span")
const result = document.getElementsByClassName("result")
let terms = ["", "", ""]
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "."]
const opers = ["+", "-", "×", "÷"]

function showResult() {
  result[0].children[0].textContent = terms.join(" ")
}

function refresh() {
  terms = ["", "", ""]
  showResult()
}

function backspace() {
  if (terms[2] !== "") {
    terms[2] = terms[2].slice(0, -1)
    showResult()
  } else if (terms[1] !== "") {
    terms[1] = ""
    showResult()
  } else {
    terms[0] = terms[0].slice(0, -1)
    showResult()
  }
}

function calculate() {
  const term1 = parseFloat(terms[0])
  const term2 = parseFloat(terms[2])
  switch (terms[1]) {
    case "+":
      output = term1 + term2
      terms = [output, "", ""]
      showResult()
      break;
    case "-":
      output = term1 - term2
      terms = [output, "", ""]
      showResult()
      break;
    case "×":
      output = term1 * term2
      terms = [output, "", ""]
      showResult()
      break;
    case "÷":
      if (terms[1] == "÷" && term2 !== 0) {
        output = term1 / term2
        terms = [output, "", ""]
        showResult()
      } else {
        refresh()
      }
  }
}

for (const btn of btns) {
  if (nums.includes(btn.textContent)) {
    btn.addEventListener('click', function() {
      if (terms[1] == "")  {
        terms[0] += btn.textContent
      } else {
        terms[2] += btn.textContent
      }
      showResult()
    })
  } else if (opers.includes(btn.textContent)) {
    btn.addEventListener('click', function() {
      if (terms[0] !== "" && terms[2] == "") {
        terms[1] = btn.textContent
      }
      showResult()
    })
  } else if (btn.textContent == "=") {
    btn.addEventListener('click', function() {
      if (terms[2] !== "") {
        calculate()
      }
    })
  } else if (btn.textContent == "refresh") {
    btn.addEventListener('click', function() {
      refresh()
    })
  } else if (btn.textContent == "backspace") {
    btn.addEventListener('click', function() {
      backspace()
    })
  }
}


