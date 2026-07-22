let artifacts = [0,0,0,0,0,0,0]

// add artifact functionality
function addItem(){
  
  const name = document.getElementById("Item-Name").value;
  const type = document.querySelector('input[name = "Item-Type"]:checked').value;
  const rarity = document.querySelector('input[name = "Item-Rarity"]:checked').value;
  const level = document.getElementById("Level-Requirement").value;
  
  const hash = hashing(name);
  //collision handling 
  if (artifacts[hash] !== 0){
   alert ("Item Slot Taken! Please Choose a different name or delete an artifact!")
   return 
  }

  artifacts[hash] = name

  const table = document.querySelector("#Artifacts table");
  const newRow = document.createElement("tr");
  newRow.innerHTML = "<td>"+name+"</td><td>"+level+"</td><td>"+rarity+"</td><td>"+type+"</td><td>"+hash+"</td>";
  table.appendChild(newRow);
  sortVault();  
}


// sort alphabetically function
function sortVault(){
  const table = document.querySelector("#Artifacts table")
  const rows = Array.from(table.querySelectorAll("tr")).slice(1);

  rows.sort((a,b) => { 
    const nameA = a.children[0].textContent.toLowerCase();
    const nameB = b.children[0].textContent.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  rows.forEach(row => table.appendChild(row));
}

//Hash function
function hashing(Name){
  let hash = 0
  for (let i = 0; i < Name.length; i++){
    hash = (hash * 3 + Name.charCodeAt(i)) % 7;
  }
  return hash
}


//Search function
function search(){
  const searchfor = document.getElementById ("Item-Search").value
  let SearchNum = hashing(searchfor)
  
  if (searchfor == ""){
    alert ("Enter Artifact Name!")
  } 
  else if (artifacts[SearchNum] == searchfor){
    const table = document.querySelector("#Artifacts table");
    const rows = table.querySelectorAll("tr");

    for (let i = 1; i < rows.length; i++) {  
      const nameCell = rows[i].children[0].textContent;

      if (nameCell == searchfor){
        const level = rows[i].children[1].textContent;
        const rarity = rows[i].children[2].textContent;
        const type = rows[i].children[3].textContent;
        const hash = rows[i].children[4].textContent;

        alert("Artifact Found!   Item Name: " + nameCell + "   Item Level: " + level + "   Item Rarity: " + rarity + "   Item Type: " + type + "   Item Hash: " + hash);
        return;
      }
    }
    alert("Found Artifact!")

  }
  else {
    alert("Artifact Not Found (Please Check Spelling)")
  } 
}


//remove function
function remove(){
  const searchfor = document.getElementById ("Item-Search").value
  let SearchNum = hashing(searchfor)
  if (searchfor == ""){
    alert ("Enter Artifact Name!")
  } 
  else if (artifacts[SearchNum] == searchfor){
    artifacts[SearchNum] = 0;
    
    const table = document.querySelector("#Artifacts table");
    const rows = table.querySelectorAll("tr");
    
    for (let i = 1; i < rows.length; i++) {  
      const cellText = rows[i].children[0].textContent;
      if (cellText === searchfor) {
        rows[i].remove();
        break;
        }
      }

      alert("Deleted Artifact!")
  }
  else {
    alert("Artifact Not Found (Please Check Spelling)")
  } 
}
