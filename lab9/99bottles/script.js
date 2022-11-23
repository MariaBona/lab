
const button = document.getElementById("button");
button.addEventListener("click", play);

function play() {
  button.hidden = true;
  
  for(i=99;i>=0;i--){
    var chapter = document.createElement("p");
    chapter.setAttribute('style', 'white-space: pre;');
    if(i > 2){
      chapter.textContent = i + " bottles of beer on the wall,\n";
      chapter.textContent += i + " bottles of beer!\n";
      chapter.textContent += "Take one down,\n";
      chapter.textContent += "Pass it around,\n";
      chapter.textContent += (i - 1) + " bottles of beer on the wall!\n";
    }
    else if(i == 2){
      chapter.textContent = i + " bottles of beer on the wall,\n";
      chapter.textContent += i + " bottles of beer!\n";
      chapter.textContent += "Take one down,\n";
      chapter.textContent += "Pass it around,\n";
      chapter.textContent += (i - 1) + " bottle of beer on the wall!\n";
    }
    else if(i == 1){
      chapter.textContent = i + " bottle of beer on the wall,\n";
      chapter.textContent += i + " bottle of beer!\n";
      chapter.textContent += "Take one down,\n";
      chapter.textContent += "Pass it around,\n";
      chapter.textContent += (i - 1) + " bottles of beer on the wall!\n";
    }
    document.body.appendChild(chapter);
  }
  var chapter = document.createElement("p");
  chapter.textContent = "No more bottles of beer on the wall, no more bottles of beer."+"\n"+"Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  document.body.appendChild(chapter);
}