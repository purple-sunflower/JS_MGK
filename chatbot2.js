var json= 
[
    {
        "question":"이름이 뭐야?",
        "answer":"보라해바라기"
    },
    {
        "question":"나이는?",
        "answer":"아~ 그게 뭐가 중요해~"
    },
    {
        "question":"뭘 배우고 있어?",
        "answer":"자바스크립트!"
    }
]

var question="";
var answer="";
var key=0;

function push_json(){
    json.push({"question": `${question}`, "answer": `${answer}`}); 
}


function check_text(){
    var reply = document.getElementById("dog_saying");
    var value = document.getElementById("console").value; 


    if(key == 1){
        if(value == "네"){
            reply.innerHTML = "대답을 입력해주세요!";
            key = 2;
        }
        else{
            reply.innerHTML = "멍~!";
            key = 0;
        }
        return;
    }


    if(key == 2){
        reply.innerHTML = "말을 배웠다 멍!";
        answer = value; 
        key = 0;  
        push_json(); 
    }

	else{
		for(let i = 0; i < json.length; i++){
			if(value == json[i].question){ 
				reply.innerHTML = json[i].answer; 
				return; 
			}
		}
		if(answer == ""){
			reply.innerText = "말을 가르쳐 주실래요?(네 or 아니요)";
			question = value; 
			key = 1;
		}
	}
}
