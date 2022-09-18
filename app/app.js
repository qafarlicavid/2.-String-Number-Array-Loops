function Theme(){
    var value = document.getElementById('inp').value;
    document.body.style.backgroundColor = value;
}
function Code() {
    var deyer = document.getElementById('inp2').value
        if (deyer[0]==='P' && deyer.length===4) {
            if (deyer[1]==='1') {
                document.getElementById("hidden").innerHTML = "Seher Qrupu";
                document.getElementById('hidden').style.color = 'yellow'

            }
            else if (deyer[1]==='2') {
                document.getElementById('hidden').style.color = 'red'
                document.getElementById("hidden").innerHTML = "Gunorta Qrupu";
            }
            else if (deyer[1]==='3') {
                document.getElementById('hidden').style.color = 'black'
                document.getElementById("hidden").innerHTML = "Axsam Qrupu";
            }
            else{
                alert('Code Academy-ə Yalnız 3 növbə mövcuddur')
            }
        }
        else{
            alert('Group not found')
        }
}