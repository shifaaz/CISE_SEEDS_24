const inputElement = document.getElementById("essay"); // name from the html folder. 
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}