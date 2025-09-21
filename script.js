function Calculator() {

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1==="" || name2===""){

        const resText = document.getElementById("resText");
        resText.innerHTML = `Please Enter Both Names`;
    }else 
    {
        const LovePer = Math.floor(Math.random() * 101);

        const resText = document.getElementById("resText");

        resText.innerHTML = `${name1} and ${name2} 's love percentage is : ${LovePer}`;

        if(LovePer<=30){
            const Note = document.getElementById("Note");
            Note.innerHTML=`I think you should found a new partner!`;
        }
        else if(LovePer>30 && LovePer<=75){
            const Note = document.getElementById("Note");
            Note.innerHTML=`You may be better in the future`;
        }
        else if (LovePer>75) {
            const Note = document.getElementById("Note");
            Note.innerHTML=`OMG ! حبيبة قلبي ربنا يرزقك :)`;

        }
    }

}