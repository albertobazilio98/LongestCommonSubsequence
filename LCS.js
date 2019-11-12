class LCS {
  constructor(sequence1, sequence2) {
    this.sequence1 = sequence1;
    this.sequence2 = sequence2;
    this.c  = new Array(sequence1.length + 1);
    for(var i = 0; i <= sequence1.length; i++) {
     this.c[i] = new Array(sequence2.length + 1);
    }
    this.subsequence = "";
    this.findLCS();
  }
  findLCS() {
    for (var i = 0; i <= this.sequence1.length; i++) {
      this.c[i][0] = 0;
    } 
    for (var j = 0; j <= this.sequence2.length; j++) {
      this.c[0][j] = 0;
    }
    var cont = 0;
    for (var i = 1; i <= this.sequence1.length; i++) {
      for (var j = 1; j <= this.sequence2.length; j++) {
        if (this.sequence1[i - 1] == this.sequence2[j - 1]) {
          this.c[i][j] = this.c[i-1][j-1] + 1;
          if (this.c[i][j] == cont + 1) {
            cont++;
            this.subsequence += this.sequence1[i - 1];
          }
        } else {
          this.c[i][j] = Math.max(this.c[i-1][j], this.c[i][j-1]);
        }
      }
    }
    console.log("Tamanho da maior subsequencia: ", this.c[this.sequence1.length][this.sequence2.length])
    console.log("Maior subsequencia: ", this.subsequence);
    console.log("matriz de coincidencias: ")
    console.log(this.c);
  }
}
function calcLCS() {
  var form = document.getElementById("form");
  var lcs = new LCS(form.sequence1.value, form.sequence2.value);
  var results = document.getElementById("results")
  var mat = '';
  for (let i = 0; i < lcs.c.length; i ++) {
    mat += lcs.c[i].join(' ');
    mat += '</br>';
  }
  results.innerHTML = `
    Tamanho da maior subsequencia: ${lcs.c[lcs.sequence1.length][lcs.sequence2.length]} </br>
    Maior subsequencia: ${lcs.subsequence} </br>
    Matriz de coincidencias: </br>
    ${mat}
  `;
}