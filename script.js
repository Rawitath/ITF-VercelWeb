const username = document.getElementById("username");
        const pfp = document.getElementsByClassName("pfp")[0];
        const phonegrid = document.getElementById("phonegrid");
        let count = 1;
        function ChangeUsername(){
            username.textContent = document.getElementById("usernameinput").value;
        }
        function ChangePFP(){
            pfp.style.backgroundImage = `url('${document.getElementById('urlinput').value}')`;
        }
        function CreateTelList(){
            const listdata = [count, document.getElementById("nameinput").value, document.getElementById("telinput").value];
            for(i = 0; i < 3; i++){
                let child = document.createElement("div");
                child.className = "phoneitemchild";
                let text = document.createElement("p");
                text.innerHTML = listdata[i];
                child.appendChild(text);
                phonegrid.appendChild(child);
            }
            count++;
        }
        function NumListToCSV(){
            let csvData = "";
            for(i = 0; i < phonegrid.childElementCount / 3; i++){
                for(j = 0; j < 3; j++){
                    csvData += phonegrid.children[j + 3 * i].children[0].innerHTML;
                    csvData += ",";
                }
                csvData += "\n";
            }
            file = new Blob([csvData], {type:"text/csv"});
            const link = document.createElement("a");
            link.href = URL.createObjectURL(file);
            link.download = "phonenumber.csv";
            link.click();
            URL.revokeObjectURL(link.href);
        }